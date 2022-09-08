from tabnanny import check
from flask_restful import marshal_with, Resource, reqparse, fields
from flask import abort, request, make_response
from backend.models.HotelModel import User, Hotel, hotel_representation, review_representation
from backend.models.UserModel import user_representation
from backend import db, app
from backend.services.HotelServices import validateHotelData, addNewHotel, getAllHotels, validateCityName, getCitiesByName, validateGetHotels, getHotelsByCityName
from backend.services.BookingServices import checkHotelAvailability, mayuriLogic
from backend.models.HotelModel import hotel_representation
import datetime


# app.route("/hotel", methods=['POST'])
# def hotelAdd():
#     result = validateHotelData(request.json) 
#     if result.errors:
#         return result.errors, 400 

#     print(result.document)

#     return result.document, 200

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
    "city":fields.String
}

@marshal_with(city_representation)
@app.route("/getCityList", methods=["GET"])
def getCityList():
    print('hii:',request.json)
    validationResult = validateCityName(request.json)
    if validationResult.errors:
        return make_response(validationResult.errors, 400)

    return make_response(getCitiesByName(request.json['city_name']),200)
    
# data representation for new hotel list
new_hotel_representation = {
    "hotel_id":fields.Integer,
    "hotel_name":fields.String,
    "description":fields.String,
    "hotel_profile_picture": fields.String,
    "hotel_images":fields.List(fields.String),
    "city":fields.String,
    "state":fields.String,
    "country":fields.String,
    "pincode":fields.Integer,
    "landmark":fields.Integer,
    "address":fields.String,
    "exclusive_room_count":fields.Integer,
    "double_room_count":fields.Integer,
    "economy_room_count":fields.Integer,
    "premium_room_count":fields.Integer,
    "exclusive_room_capacity":fields.Integer,
    "double_room_capacity":fields.Integer,
    "economy_room_capacity":fields.Integer,
    "premium_room_capacity":fields.Integer,
    "exclusive_room_rate":fields.Integer,
    "double_room_rate":fields.Integer,
    "economy_room_rate":fields.Integer,
    "premium_room_rate":fields.Integer,
    "allow_pet_cost":fields.Integer,
    "breakfast_for_people":fields.Integer,
    "extra_parking_rate":fields.Integer,
    "extra_pillow_rate":fields.Integer,
    "hotel_facilities":{
        "breakfast":fields.Boolean,
    "dinner":fields.Boolean,
    "outdoor_sport":fields.Boolean,
    "swimming_pool":fields.Boolean,
    "Spa":fields.Boolean,
    "Room_Service":fields.Boolean,
    "Living_room":fields.Boolean,
    "Berbeque":fields.Boolean
    },
    "available_room_types": fields.List(fields.String),
    "hotelreviews": fields.Nested(review_representation)
}

# method to show hotel data in hotel_representation format
@marshal_with(hotel_representation)
def newDataView(data):
    return data


@app.route("/getHotel", methods=["GET"])
@marshal_with(new_hotel_representation)
def getHotels():
    data = request.json
    print(data)
    if "check_in_date" not in data.keys() or  "check_out_date" not in data.keys():
        return {"error": "check_in_date or check_out_date is missing"}, 400
    data['check_in_date'] = datetime.datetime.strptime(data['check_in_date'], "%Y-%m-%d")
    data['check_out_date'] = datetime.datetime.strptime(data['check_out_date'], "%Y-%m-%d")
    
    validationResult = validateGetHotels(data)

    if validationResult.errors:
        return make_response(validationResult.errors, 400)

    print(validationResult.document)
    # get the list of hotels present in particular city
    hotels = getHotelsByCityName(data['city_name'])
   
    availableHotelList = []



    # get one hotel at time and then check availability
    for x in hotels:
        # mayuriLogic(data['check_in_date'], data['check_out_date'],x.hotel_id)
        newhotel = newDataView(x)
        lst = checkHotelAvailability(x.hotel_id, data['check_in_date'], data['check_out_date'], data['adult_count'], data['child_count'])
        if len(lst) == 0:
            continue
        print("list:",lst)
        newhotel.update({"available_room_types":lst})
        # print(newhotel)
        availableHotelList.append(newhotel)


    return availableHotelList, 200