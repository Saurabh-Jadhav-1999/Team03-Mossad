from flask_restful import marshal_with, Resource, reqparse, fields
from flask import abort, request, make_response
from backend.models.HotelModel import booking_representation
from backend.services.BookingServices import validateBookingData, addBooking, getBookings, showBooking
from backend.services.UserServices import getPerticularUser
from backend.services.HotelServices import getPerticularHotelById
import datetime


class HandleBooking(Resource):
    # @marshal_with(booking_representation)
    def post(self):
        data = request.json
        data['check_in_date'] = datetime.datetime.strptime(data['check_in_date'], "%Y-%m-%d")
        data['check_out_date'] = datetime.datetime.strptime(data['check_out_date'], "%Y-%m-%d")
        # print(data)
        validationResult = validateBookingData(data)
        if validationResult.errors:
            print('returning error')
            print(validationResult.errors)
            return make_response(validationResult.errors, 400)
        
        # print(validationResult.document)

        # check if user exists
        user = getPerticularUser(data['user_id'])
        if not user:
            return make_response("user not found", 404)

        # check if hotel exists
        hotel = getPerticularHotelById(data['hotel_id'])
        if not hotel:
            return make_response("hotel not found", 400)

        result = addBooking(data, user, hotel)
        return showBooking(result), 200

    @marshal_with(booking_representation)
    def get(self):
        data = getBookings()
        return data, 200