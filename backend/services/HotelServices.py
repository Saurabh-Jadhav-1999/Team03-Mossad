from dataclasses import field
from importlib.metadata import requires
from backend.models.HotelModel import Hotel, review_representation, facality_representation, hotel_representation_for_review, SearchHistory, Review
from backend import db, app
from cerberus import Validator
from flask_restful import fields, marshal_with

# validation schema for hotel 
hotel_schema = {
    "hotel_name": {"type":"string", "required":True},
    "hotel_profile_picture":{"type":"string"},
    "hotel_images": {"type":"list", "required":True},
    "description":{"type":"string", "required":True},
    "city":{"type":"string", "required":True},
    "state":{"type":"string", "required":True},
    "country":{"type":"string", "required":True},
    "pincode":{"type":"integer", "required":True},
    "landmark":{"type":"string", "required":False},
    "address":{"type":"string", "required":True},
    "exclusive_room_count": {"type":"integer", "required":False},
    "economy_room_count": {"type":"integer", "required":False},
    "double_room_count": {"type":"integer", "required":False},
    "premium_room_count": {"type":"integer", "required":False},
    "exclusive_room_capacity": {"type":"integer", "required":False},
    "economy_room_capacity": {"type":"integer", "required":False},
    "double_room_capacity": {"type":"integer", "required":False},
    "premium_room_capacity": {"type":"integer", "required":False},
    "exclusive_room_rate": {"type":"integer", "required":False},
    "economy_room_rate": {"type":"integer", "required":False},
    "double_room_rate": {"type":"integer", "required":False},
    "premium_room_rate": {"type":"integer", "required":False},
}

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
    "landmark":fields.String,
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
    "hotelfacalities": fields.Nested(facality_representation),
    "available_room_types": fields.List(fields.String),
    "discounted_room_type": fields.List(fields.String),
    "rating": fields.Float,
    "total_reviews": fields.Integer
}

# method to validate hotel details 
def validateHotelData(data):
    print("Data in validateHotelData:",data)
    hotelValidator = Validator(hotel_schema)
    result = hotelValidator.validate(data)
    return hotelValidator

# method to add new hotel input is validated method data 
def addNewHotel(data):
    try:
        hotel = Hotel(data)
        db.session.add(hotel)
        db.session.commit()
        return hotel
    except Exception as e:
        print(e)
        return {"error":e}

# method to get all the hotels
def getAllHotels():
    return Hotel.query.all()

# method to get particular hotel by hotel id 
def getPerticularHotelById(id):
    try:
        return Hotel.query.filter_by(hotel_id=id).first()
    except Exception as e:
        return {"error":e}
    
# method to validate city name
def validateCityName(cityname):
    city_schema = {
    "city_name": {"type":"string","required":True, "minlength":1}
    }
    print("Data in validateCityData:",cityname)
    cityValidator = Validator(city_schema)
    cityValidator.allow_unknown = True
    r = cityValidator.validate(cityname)
    return cityValidator


# method to get city names starting from characters
def getCitiesByName(city_name):
    print("cityname in getCitiesByName:",city_name)
    result = db.session.query(Hotel.city).filter(Hotel.city.ilike(f"{city_name}%")).distinct().all()
    # result = Hotel.query.filter(Hotel.city.ilike(f"%{city_name}%")).all()
    cityList = [s.city for s in result]
    print(cityList)
    return cityList

# method to validate incoming data for 
def validateGetHotels(data):
    validate_schema = {
        "city_name":{"type":"string", "required":True},
        "check_in_date": {"type":"date", "required":True},
        "check_out_date": {"type":"date", "required":True},
        "adult_count": {"type":'integer', "required":True},
        "child_count": {"type":"integer", "required":True}

    }
    validator = Validator(validate_schema)
    validator.allow_unknown = True
    result = validator.validate(data)
    return validator

# method to get all the hotels from particular city
def getHotelsByCityName(city_name):
    print("city name in:",city_name)
    return Hotel.query.filter_by(city=city_name).all() 

# method to show all available hotels matching search criteria in marshel_with format 
@marshal_with(new_hotel_representation)
def showAvailableHotels(data):
    return data

