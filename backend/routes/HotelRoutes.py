from tabnanny import check
from flask_restful import marshal_with, Resource, reqparse, fields
from flask import abort, request, make_response
from backend.models.HotelModel import User, Hotel, hotel_representation, review_representation
from backend.models.UserModel import user_representation
from backend import db, app
from backend.services.HotelServices import validateHotelData, addNewHotel, getAllHotels, validateCityName, getCitiesByName, validateGetHotels, getHotelsByCityName, showAvailableHotels, getPerticularHotelById
from backend.services.BookingServices import checkHotelAvailability, mayuriLogic
from backend.services.ReviewServices import averageRating
from backend.services.HistoryServices import addHistoryByHotelId
from backend.models.HotelModel import hotel_representation
import datetime
from backend.auth.authToken import token_required
from backend.services.HistoryServices import validateHistoryData, validateHistoryDataWithHotel, addHistory


class HotelHandler(Resource):
    # route to add new hotel 
    @marshal_with(hotel_representation)
    def post(self):
        result = validateHotelData(request.json) # validate the request data
        if result.errors:
            return make_response(result.errors, 400) # return if validation fails
        hotelResult = addNewHotel(request.json) # adding new hotel
        return hotelResult, 200

    # route to get all the hotels 
    @marshal_with(hotel_representation)
    def get(self):
        result = getAllHotels() # get the hotels
        return result, 200
    
# method to get city list
city_representation = {
    "cities":fields.List(fields.String)
}

@marshal_with(city_representation)
@app.route("/getCityList", methods=["GET"])
def getCityList():
    # token validtion code 
    token_result = token_required(request)
    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400)
    validationResult = validateCityName(request.json)
    if validationResult.errors:
        return make_response(validationResult.errors, 400)
    return make_response(getCitiesByName(request.json['city_name']),200)
    
@marshal_with(city_representation)
def showCityList(data):
    return data

@app.route("/getCityList", methods=["POST"])
def getCityListByPost():
    # token validtion code 
    token_result = token_required(request)
    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400)

    # validate incoming data
    validationResult = validateCityName(request.json)
    if validationResult.errors:
        return make_response(validationResult.errors, 400)
    # get list of cities starting from character provided
    cityListData = getCitiesByName(request.json['city_name'])
    # print('before returning data:',cityListData)
    return make_response({"cities":cityListData},200)

# method to show hotel data in hotel_representation format
@marshal_with(hotel_representation)
def newDataView(data):
    return data

@app.route("/getHotel", methods=["GET", "POST"])
def getHotels():
    # token validtion code 
    token_result = token_required(request)
    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400)

    data = request.json
    print(data)

    # check if check_in_date and check_out_date is present
    if "check_in_date" not in data.keys() or  "check_out_date" not in data.keys():
        return {"error": "check_in_date or check_out_date is missing"}, 400
    data['check_in_date'] = datetime.datetime.strptime(data['check_in_date'], "%Y-%m-%d")
    data['check_out_date'] = datetime.datetime.strptime(data['check_out_date'], "%Y-%m-%d")

    # check_in_date, check_out_date validation
    if data['check_out_date'] < data['check_in_date']:
        return {"error": "invalid check_in, check_out date"}, 400
    
    validationResult = validateGetHotels(data) # validate all other fields

    if validationResult.errors:
        return make_response(validationResult.errors, 400) # return validation errors if any

    print(validationResult.document)

    # get the list of hotels present in particular city
    hotels = getHotelsByCityName(data['city_name'])

    # return error if city_name was incorrect
    if len(hotels) == 0:
        return make_response({"error":"No hotels available for given city"}, 400)

    availableHotelList = []


    # get one hotel at time and then check availability
    for x in hotels:
        # mayuriLogic(data['check_in_date'], data['check_out_date'],x.hotel_id)
        newhotel = newDataView(x)
        rating = averageRating(x.hotel_id)
        lst = checkHotelAvailability(x.hotel_id, x,  data['check_in_date'], data['check_out_date'], data['adult_count'], data['child_count'])
        if len(lst) == 0:
            continue
        newhotel.update({"available_room_types":lst})
        newhotel.update({"rating":rating[0]}) # update the response add average rating
        newhotel.update({"total_reviews":rating[1]})
        availableHotelList.append(newhotel)

    # check if available rooms are less than 20% of all avilable rooms if yes apply discount
    if  len(availableHotelList) <= (len(hotels)-int(len(hotels)*0.8)):
        print('must apply price increment for hotels')
    # build user history
    addHistory({"user_id":data['user_id'],"location":data['city_name']})    
    return showAvailableHotels(availableHotelList), 200

@app.route("/getHotelById", methods=['POST'])
def getHotelByHotelId():
     # token validtion code 
    token_result = token_required(request)
    print(token_result)
    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400) # return error if token authorization fails
    
    data = request.json
    if data is None or "hotel_id" not in data.keys():
        return make_response({"error":"hotel_id is missing"}, 400)

    data['hotel_id'] = int(data['hotel_id'])
    # validate incoming data
    validationResult = validateHistoryDataWithHotel(data)
    if validationResult.errors:
        return make_response({"errors":validationResult.errors}, 400)

    # get particular hotel by id
    hotel = getPerticularHotelById(data['hotel_id'])

    # error occured while getting hotel
    if isinstance(hotel, dict) and "error" in hotel.keys():
        return make_response(hotel, 400)

    # if hotel not present with given id
    if not hotel:
        return make_response({"error": "invalid hotel id!"}, 400)

    print("avg rating",hotel.average_rating)
    # build the user history
    user_history = addHistoryByHotelId(data)

    # add average rating to hotel
    rating = averageRating(hotel.hotel_id)
    hotel = newDataView(hotel)
    # print(hotel)
    hotel.update({"rating":rating[0]}) # update the response add average rating
    hotel.update({"total_reviews":rating[1]})

    return showAvailableHotels(hotel), 200
    

