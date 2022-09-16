from flask_restful import marshal_with, Resource, reqparse, fields
from flask import abort, request, make_response
from backend.models.HotelModel import booking_representation
from backend.services.BookingServices import validateBookingData, addBooking, getBookings, showBooking
from backend.services.UserServices import getPerticularUser
from backend.services.HotelServices import getPerticularHotelById
from backend.services.UserServices import getCurrentDate
import datetime
from backend.auth.authToken import token_required


class HandleBooking(Resource):
   
    def post(self):
        # token validtion code 
        token_result = token_required(request)
        if  isinstance(token_result, dict)  and "error" in token_result.keys():
            print('error found')
            return make_response(token_result, 400)


        data = request.json
        # check if checkin , checkout date is present
        if "check_in_date" not in data.keys() or  "check_out_date" not in data.keys():
            return {"error": "check_in_date or check_out_date is missing"}, 400

        # convert string date to date format
        data['check_in_date'] = datetime.datetime.strptime(data['check_in_date'], "%Y-%m-%d")
        data['check_out_date'] = datetime.datetime.strptime(data['check_out_date'], "%Y-%m-%d")

         # check if check in date is greater than current date
        current_date = getCurrentDate()
        if data['check_in_date'] < current_date or data['check_out_date'] < current_date:
            return make_response({"error":"check_in_date and check_out_date must greater than equal to current date"})



        #check if checkout is less than check in
        if data['check_out_date'] < data['check_in_date']:
            return {"error": "check_in_date must be less than check_out_date"}
        # print(data)

        validationResult = validateBookingData(data)
        if validationResult.errors:
            # print('returning error')
            print(validationResult.errors)
            return make_response(validationResult.errors, 400)

        # check if user exists
        user = getPerticularUser(data['user_id'])
        if not user:
            return make_response("user not found", 404)

        # check if hotel exists
        hotel = getPerticularHotelById(data['hotel_id'])
        if not hotel:
            return make_response("hotel not found", 400)

        result = addBooking(data, user, hotel)
        
        if  isinstance(result, dict) and "error" in result.keys():
            return make_response(result, 400)

        print(result)

        return make_response(result, 200)
    @marshal_with(booking_representation)
    def get(self):
        data = getBookings()
        return data, 200