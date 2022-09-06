from flask_restful import marshal_with, Resource, reqparse
from flask import abort, request, make_response
from backend.models.HotelModel import User, Hotel, hotel_representation
from backend.models.UserModel import user_representation
from backend import db, app
from backend.services.HotelServices import validateHotelData, addNewHotel, getAllHotels


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