from itertools import count
from tabnanny import check
from backend.models.HotelModel import Booking, booking_representation
from backend.services.HotelServices import getPerticularHotelById
from backend import db, app
from cerberus import Validator
from flask_restful import marshal_with
from sqlalchemy import func, or_, and_
from datetime import timedelta


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

# method to get count of booked room on perticular day for particular hotel and room type
def getAvailabilityCount(data, dte, hotel):
    from sqlalchemy import func
    print('getAvailability called')
    if data['exclusive_room_count'] > 0:
        cursor = db.session.query(func.sum(Booking.exclusive_count)).filter(Booking.hotel_id==hotel.hotel_id).filter(or_((Booking.check_in_date==dte),and_(dte>Booking.check_in_date, dte<Booking.check_out_date)))
        total = cursor.scalar()
        print(f"date:{dte} totalbooked:",total)
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


# method to check whether the hotel is available for that perticular checkin, checkout date by hotel_id
def checkHotelAvailability(hotel_id, hotel, check_in_date, check_out_date, adult_count, child_count):
    from sqlalchemy import func
    # get the hotel data
    # hotel = getPerticularHotelById(hotel_id)

    delta = check_out_date - check_in_date
    availableRoomTypes = []
    # check the availability of exclusive_rooms
    countList = []

    for x in range(delta.days):
        dte = check_in_date+timedelta(days=x)
        cursor = db.session.query(func.sum(Booking.exclusive_count)).filter(and_(Booking.hotel_id==hotel_id, dte==Booking.check_in_date))
        total1 = cursor.scalar()
        if total1 == None:
            total1 = 0
        cursor = db.session.query(func.sum(Booking.exclusive_count)).filter(and_(Booking.hotel_id==hotel_id, dte>Booking.check_in_date, dte<Booking.check_out_date))
        total2 = cursor.scalar()
        if total2 == None:
            total2 = 0
        countList.append(total1+total2)
    print(countList)
    if len(countList)>0 and (max(countList) < hotel.exclusive_room_count) and "exclusive_room" not in availableRoomTypes:
        availableRoomTypes.append("exclusive_room")

    countList = []
    for x in range(delta.days):
        dte = check_in_date+timedelta(days=x)
        cursor = db.session.query(func.sum(Booking.economy_count)).filter(and_(Booking.hotel_id==hotel_id, dte==Booking.check_in_date))
        total1 = cursor.scalar()
        if total1 == None:
            total1 = 0
        cursor = db.session.query(func.sum(Booking.economy_count)).filter(and_(Booking.hotel_id==hotel_id, dte>Booking.check_in_date, dte<Booking.check_out_date))
        total2 = cursor.scalar()
        if total2 == None:
            total2 = 0
        countList.append(total1+total2)
    print(countList)
    if len(countList)>0 and (max(countList) < hotel.economy_room_count) and "economy_room" not in availableRoomTypes:
        print("max in economy count:",max(countList))
        availableRoomTypes.append("economy_room")

    countList = []
    for x in range(delta.days):
        dte = check_in_date+timedelta(days=x)
        cursor = db.session.query(func.sum(Booking.double_count)).filter(and_(Booking.hotel_id==hotel_id, dte==Booking.check_in_date))
        total1 = cursor.scalar()
        if total1 == None:
            total1 = 0
        cursor = db.session.query(func.sum(Booking.double_count)).filter(and_(Booking.hotel_id==hotel_id, dte>Booking.check_in_date, dte<Booking.check_out_date))
        total2 = cursor.scalar()
        if total2 == None:
            total2 = 0
        countList.append(total1+total2)
    print(countList)
    if len(countList)>0 and (max(countList)<hotel.double_room_count) and "double_room" not in availableRoomTypes:
        availableRoomTypes.append("double_room")


    countList = []
    for x in range(delta.days):
        dte = check_in_date+timedelta(days=x)
        cursor = db.session.query(func.sum(Booking.premium_count)).filter(and_(Booking.hotel_id==hotel_id, dte==Booking.check_in_date))
        total1 = cursor.scalar()
        if total1 == None:
            total1 = 0
        cursor = db.session.query(func.sum(Booking.premium_count)).filter(and_(Booking.hotel_id==hotel_id, dte>Booking.check_in_date, dte<Booking.check_out_date))
        total2 = cursor.scalar()
        if total2 == None:
            total2 = 0
        countList.append(total1+total2)

    print(countList)
    if len(countList)>0 and (max(countList)<hotel.premium_room_count) and "premium_room" not in availableRoomTypes:
        availableRoomTypes.append("premium_room")
   
    return availableRoomTypes


def mayuriLogic(check_in_date, check_out_date, hotel_id):
    hotel = getPerticularHotelById(hotel_id)
    cursor = db.session.query(func.sum(Booking.economy_count)).filter(or_(and_(check_in_date<Booking.check_in_date,check_out_date>Booking.check_out_date) , and_(check_in_date==Booking.check_in_date,check_out_date>=Booking.check_out_date) ,and_(check_in_date==Booking.check_in_date ,check_out_date<Booking.check_out_date) ,and_(check_in_date<Booking.check_in_date ,check_out_date>Booking.check_in_date), and_(check_in_date<check_in_date ,check_out_date==Booking.check_in_date),and_(check_in_date>Booking.check_in_date ,check_in_date<Booking.check_out_date),and_(check_in_date>Booking.check_in_date ,check_in_date==Booking.check_out_date)))
    total = cursor.scalar()
    print("mayuri op:",total)

# method to check type of room booking for 
def checkRoomType(data, hotel):
    from sqlalchemy import func
    if "exclusive_room_count" in data.keys() and data['exclusive_room_count'] > 0:
        cursor = db.session.query(func.max(Booking.exclusive_count)).filter(Booking.hotel_id==hotel.hotel_id).filter(and_(Booking.check_in_date<=data['check_out_date'], Booking.check_out_date>=data['check_in_date']))
        total = cursor.scalar()
        print("total:",total)
        return ["exclusive_count", hotel.exclusive_room_capacity]
    if "economy_room_count" in data.keys() and data['economy_room_count'] > 0:
        cursor = db.session.query(func.sum(Booking.economy_count)).filter(Booking.hotel_id==hotel.hotel_id)
        total = cursor.scalar()
        return ["economy_count", hotel.economy_room_capacity]
    if "double_room_count" in data.keys() and data['double_room_count'] > 0:
        cursor = db.session.query(func.sum(Booking.double_count)).filter(Booking.hotel_id==hotel.hotel_id)
        total = cursor.scalar()
        print("total:",total)
        return ["double_count", hotel.double_room_capacity]
    if "premium_room_count" in data.keys() and data['premium_room_count'] > 0:
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
        delta = data['check_out_date'] - data['check_in_date']
        
        # loop over to each date and check if any day having booking more than its capacity
        # for x in range(delta.days):
        #     dte = data['check_in_date']+timedelta(days=x)
        #     getAvailabilityCount(data, dte, hotel)
        #     pass

        # result = checkAvalabilityOfRoomInHotel(data['hotel_id'], data['check_in_date'], data['check_out_date'], room_type[0])
        booking = Booking(check_in_date=data['check_in_date'], check_out_date=data['check_out_date'], child_count=data['child_count'], adult_count=data['adult_count'], exclusive_count=data['exclusive_room_count'], economy_count=data['economy_room_count'],double_count=data['double_room_count'],premium_count=data['premium_room_count'],bookingowner=user,hotelconcerned=hotel)
        db.session.add(booking)
        db.session.commit()
        return booking
    return "Hii"
    print('returning error')
    

# method to get all the booking
def getBookings():
    return Booking.query.all()

# method to show booking details in perticular format
@marshal_with(booking_representation)
def showBooking(data):
    return data