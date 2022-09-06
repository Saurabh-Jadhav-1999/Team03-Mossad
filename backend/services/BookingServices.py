from operator import or_
from backend.models.HotelModel import Booking, booking_representation
from backend import db, app
from cerberus import Validator
from flask_restful import marshal_with
from sqlalchemy import func, or_, and_


# method to validate booking data
def validateBookingData(data):
    booking_validation_schema = {
        "exclusive_room_count": {"type":"integer", "required":False},
        "economy_room_count": {"type":"integer", "required":False},
        "double_room_count": {"type":"integer", "required":False},
        "premium_room_count": {"type":"integer", "required":False},
        "check_in_date": {"type":"date", "required":True},
        "check_out_date": {"type":"date", "required":True},
        "child_count": {"type":"integer", "required":True},
        "adult_count": {"type":"integer", "required":True},
        "user_id": {"type":"integer", "required":True},
        "hotel_id": {"type":"integer", "required":True}
    }

    bookingValidator = Validator(booking_validation_schema)
    result = bookingValidator.validate(data)
    return bookingValidator

# def checkAvalabilityOfRoomInHotel(hid, check_in_date, check_out_date, room_type):
#     from sqlalchemy import func
#     cursor = db.session.query(func.sum(Booking.room_type)).filter(Booking.hotel_id==hid)
#     total = cursor.scalar()
#     print("total:",total)
#     return total


# method to check type of room booking for 
def checkRoomType(data, hotel):
    from sqlalchemy import func
    if data['exclusive_room_count'] > 0:
        cursor = db.session.query(func.max(Booking.exclusive_count)).filter(Booking.hotel_id==hotel.hotel_id).filter(and_(Booking.check_in_date<=data['check_out_date'], Booking.check_out_date>=data['check_in_date']))
        total = cursor.scalar()
        print("total:",total)
        return ["exclusive_count", hotel.exclusive_room_capacity]
    if data['economy_room_count'] > 0:
        cursor = db.session.query(func.sum(Booking.economy_count)).filter(Booking.hotel_id==hotel.hotel_id)
        total = cursor.scalar()
        print("total:",total)
        return ["economy_count", hotel.economy_room_capacity]
    if data['double_room_count'] > 0:
        cursor = db.session.query(func.sum(Booking.double_count)).filter(Booking.hotel_id==hotel.hotel_id)
        total = cursor.scalar()
        print("total:",total)
        return ["double_count", hotel.double_room_capacity]
    if data['premium_room_count'] > 0:
        cursor = db.session.query(func.sum(Booking.exclusive_count)).filter(Booking.hotel_id==hotel.hotel_id)
        total = cursor.scalar()
        print("total:",total)
        return ["premium_count", hotel.premium_room_capacity]
    return False

# method to add new booking
def addBooking(data, user, hotel):
    # get the user
    room_type = checkRoomType(data, hotel)
    if room_type == False:
        return {"error":"please select room type to continue"}
    print('got the roomtype')
    if (data['adult_count']+data['child_count']) <= room_type[1]:
        print('count is okay')
        # # result = checkAvalabilityOfRoomInHotel(data['hotel_id'], data['check_in_date'], data['check_out_date'], room_type[0])
        # booking = Booking(check_in_date=data['check_in_date'], check_out_date=data['check_out_date'], child_count=data['child_count'], adult_count=data['adult_count'], exclusive_count=data['exclusive_room_count'], economy_count=data['economy_room_count'],double_count=data['double_room_count'],premium_count=data['premium_room_count'],bookingowner=user,hotelconcerned=hotel)
        # db.session.add(booking)
        # db.session.commit()
        # return booking
    return "Hii"
    print('returning error')
    

# method to get all the booking
def getBookings():
    return Booking.query.all()

# method to show booking details in perticular format
@marshal_with(booking_representation)
def showBooking(data):
    return data