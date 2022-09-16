from tabnanny import check
from flask_restful import marshal_with, Resource, reqparse, fields
from flask import abort, request, make_response
from backend.models.HotelModel import User, Hotel, hotel_representation, review_representation, SearchHistory
from backend.models.UserModel import user_representation
from backend import db, app
from backend.services.HotelServices import validateHotelData, addNewHotel, getAllHotels, validateCityName, getCitiesByName, validateGetHotels, getHotelsByCityName, showAvailableHotels, getPerticularHotelById
from backend.services.BookingServices import checkHotelAvailability, mayuriLogic
from backend.services.ReviewServices import averageRating
from backend.services.HistoryServices import addHistoryByHotelId
from backend.models.HotelModel import hotel_representation
import datetime
from datetime import timedelta
from backend.auth.authToken import token_required
from backend.services.HistoryServices import validateHistoryData, validateHistoryDataWithHotel, addHistory
from backend.services.UserServices import getCurrentDate
from sqlalchemy import and_


class HotelHandler(Resource):
    # route to add new hotel 
    @marshal_with(hotel_representation)
    def post(self):
        result = validateHotelData(request.json) # validate the request data
        if result.errors:
            return make_response(result.errors, 400) # return if validation fails

        hotelResult = addNewHotel(request.json) # adding new hotel
        print(hotelResult)
        # resp = make_response(hotelResult, 200)

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
def showCityList(data):
    return data

# Swagger(app, config= swagger_config, template=template)

@marshal_with(city_representation)
@app.route("/getCityList", methods=["GET"])
def getCityList():
     # token validtion code 
    token_result = token_required(request)
    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400) # return error if something wrong with token validation
    
    validationResult = validateCityName(request.json) # validate the input data from user

    if validationResult.errors:
        return make_response(validationResult.errors, 400)

    cityListResult = getCitiesByName(request.json['city_name']) # get the list of cities 

    if len(cityListResult) == 0:
        return make_response("", 400) # if no cities found then return 400 error with no result

    return make_response(cityListResult,200) # if cities found then return cities
    


@app.route("/getCityList", methods=["POST"])
def getCityListByPost():
  # token validtion code 
    token_result = token_required(request)
    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400) # return error if something wrong with token validation
    
    validationResult = validateCityName(request.json) # validate the input data from user

    if validationResult.errors:
        return make_response(validationResult.errors, 400)

    cityListResult = getCitiesByName(request.json['city_name']) # get the list of cities 

    if len(cityListResult) == 0:
        return make_response("", 400) # if no cities found then return 400 error with no result

    return make_response({"cities":cityListResult},200) # if cities found then return cities


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

    data = request.json # store the data passed by user in dictionary
    # print(data)

    # check if check_in_date and check_out_date is present
    if "check_in_date" not in data.keys() or  "check_out_date" not in data.keys():
        return {"error": "check_in_date or check_out_date is missing"}, 400

    # convert the user's string date into date format and update request.json field    
    try:
        data['check_in_date'] = datetime.datetime.strptime(data['check_in_date'], "%Y-%m-%d")
        data['check_out_date'] = datetime.datetime.strptime(data['check_out_date'], "%Y-%m-%d")
    except Exception as e:
        print('error while converting input date to backend date format:',e)
        return make_response({"error":"invalid date format"}, 400)


    # check if check in date is greater than current date
    current_date = getCurrentDate()
    if data['check_in_date'] < current_date or data['check_out_date'] < current_date:
        return make_response({"error":"check_in_date and check_out_date must greater than equal to current date"}, 400)


    # add validation check_in_date >= current date and check_out_date >= current_date
    if data['check_out_date'] < data['check_in_date']:
        return {"error": "invalid check_in, check_out date"}, 400
    
    validationResult = validateGetHotels(data) # validate all other fields

    if validationResult.errors:
        return make_response(validationResult.errors, 400) # return validation errors if any

    # print(validationResult.document)

    # get the list of hotels present in particular city
    hotels = getHotelsByCityName(data['city_name'])

    # return error if city_name was incorrect
    if len(hotels) == 0:
        return make_response({"error":"No hotels available for given city"}, 400)

    priority_hotel_id = [] # list to store prioritize hotel id
    # get the most searched hotel's by user on particular location
    most_searched_hotel_in_location = db.session.query(SearchHistory).filter(and_(SearchHistory.user_id==data['user_id'],SearchHistory.hotel_id!=None, SearchHistory.number_times>=3, SearchHistory.location==data['city_name'])).order_by(SearchHistory.number_times.desc()).all()
    for  x in most_searched_hotel_in_location: # loop to get most search hotels id
        priority_hotel_id.append(x.hotel_id) 

    availableHotelList = []
    priorityHotelList = []
    # get one hotel at time and then check availability
    for x in hotels:
        # mayuriLogic(data['check_in_date'], data['check_out_date'],x.hotel_id)
        newhotel = newDataView(x)
        rating = averageRating(x.hotel_id)
        lst, discounted_room = checkHotelAvailability(x.hotel_id, x,  data['check_in_date'], data['check_out_date'], data['adult_count'], data['child_count'])
        if len(lst) == 0:
            continue
        
        # check if checkin date <= currentdate+2 and checkout <= currentdate+2
        day_after_tomorrow = getCurrentDate()+timedelta(2)

        if data['check_in_date'] <= day_after_tomorrow and data['check_out_date'] <= day_after_tomorrow:
            newhotel.update({"discounted_room_type":discounted_room})
        else:
            discounted_room = []
            newhotel.update({"discounted_room_type":discounted_room})
            
        # remove discounted roomtype from available list and add into response    
        lst = list(set(lst).difference(set(discounted_room)))

        newhotel.update({"available_room_types":lst})
        newhotel.update({"rating":rating[0]}) #adding rating to hotel
        newhotel.update({"total_reviews":rating[1]}) # adding total reviews for hotel

        # check if hotel is in priority list if yes add to priorityHotelLIst array
        if newhotel['hotel_id'] in priority_hotel_id:
            priorityHotelList.append(newhotel)
        else:
            availableHotelList.append(newhotel) # if not add to available array

    # build user history
    addHistory({"user_id":data['user_id'],"location":data['city_name']})

    # check if available rooms are less than 20% of all avilable rooms if yes apply discount
    if  len(hotels)>1 and  len(availableHotelList) <= (len(hotels)-int(len(hotels)*0.8)):
        print('must apply price increment for hotels')
        # availableHotelList.append("dynamic_price_hike")
        return make_response(newdata, 200)
        # return make_response([showAvailableHotels(availableHotelList), {"dynamic_hike_price":True}], 200)
        
    # concat availableHotelList to priorityHotelList
    priorityHotelList.extend(availableHotelList)

    newdata = showAvailableHotels(priorityHotelList)
    # newdata.append({"dynamic_hike_price":False})
    return make_response(newdata, 200)
    # return make_response({"dynamic_hike_price":False,"hotel_list":showAvailableHotels(availableHotelList)}, 200)

@app.route("/getHotelById", methods=['POST'])
def getHotelByHotelId():
     # token validtion code 
    token_result = token_required(request)
    # print(token_result)

    if  isinstance(token_result, dict)  and "error" in token_result.keys():
        print('error found')
        return make_response(token_result, 400) # return error if token authorization fails
    
    data = request.json
    if data is not None and 'hotel_id' not in data.keys():
         return make_response({"error":"hotel_id is missing"}, 400)
   
    data['hotel_id'] = int(data['hotel_id'])
    # validate incoming data
    validationResult = validateHistoryDataWithHotel(data)
    if validationResult.errors:
        return make_response({"errors":validationResult.errors}, 400) # return error if user

    # get particular hotel by id
    hotel = getPerticularHotelById(data['hotel_id'])

    # error occured while getting hotel
    if isinstance(hotel, dict) and "error" in hotel.keys():
        return make_response(hotel, 400)

    # if hotel not present with given id
    if not hotel:
        return make_response({"error": "invalid hotel id!"}, 400)

    # add hotel city as location in data need for building history
    data.update({"location": hotel.city})

    # build the user history
    user_history = addHistoryByHotelId(data)

    # get average rating by hotel_id
    rating = averageRating(hotel.hotel_id)
    hotel = newDataView(hotel)
    # print(hotel)
    hotel.update({"rating":rating[0]}) # update the response add average rating
    hotel.update({"total_reviews":rating[1]}) # update the response add total reviews for hotel

    return make_response(showAvailableHotels(hotel), 200)
    

