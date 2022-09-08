from dataclasses import field
from email.policy import default
from enum import unique
from backend import db
from flask_restful import fields
from sqlalchemy.dialects.postgresql import JSON
from datetime import date, datetime, timedelta
from backend.models.UserModel import user_representation



# creating user model 
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(40), unique=True)
    password = db.Column(db.String(200), nullable=False)
    user_address = db.Column(db.String(200), nullable=False)
    user_contact = db.Column(db.String(10), nullable=False)
    user_profile = db.Column(db.String(10), default="abc.txt")
    user_role = db.Column(db.String(20))
    hotel_reviews = db.relationship('Review', backref="owner")
    hotel_booking = db.relationship('Booking', backref="bookingowner") #for booking

    # initilize the row values for model
    def __init__(self, userdata) -> None:
        self.user_name = userdata['user_name']
        self.email = userdata['email']
        self.password = userdata['password']
        self.user_address = userdata['user_address']
        self.user_contact = userdata['user_contact']
        self.user_role = userdata['user_role']
        # user_profile is not required field so check if present then update or will take default
        if 'user_profile' in userdata.keys():
            self.user_profile = userdata['user_profile']

# review model data representation object
review_representation = {
    "review_id": fields.Integer,
    "rating": fields.Integer,
    "description": fields.String,
    "datetime_posted": fields.String,
    "owner": fields.Nested(user_representation)
}


# create a object for hotel model data representations
hotel_representation = {
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
    "hotelreviews": fields.Nested(review_representation)
}

# hotel model 
class Hotel(db.Model):
    hotel_id = db.Column(db.Integer, primary_key=True)
    hotel_name = db.Column(db.String(200), nullable=False)
    hotel_profile_picture = db.Column(db.String(200), default="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg")
    hotel_images = db.Column(db.ARRAY(db.String(500)))
    description = db.Column(db.String(500), nullable=False)
    city = db.Column(db.String(200), nullable=False)
    state = db.Column(db.String(200), nullable=False)
    country = db.Column(db.String(200), nullable=False)
    pincode = db.Column(db.Integer, nullable=False)
    landmark = db.Column(db.String(200), default=None)
    address = db.Column(db.String(200), nullable=False)
    exclusive_room_count = db.Column(db.Integer, default = 0)
    economy_room_count = db.Column(db.Integer, default = 0)
    double_room_count = db.Column(db.Integer, default=0)
    premium_room_count = db.Column(db.Integer, default=0)
    exclusive_room_rate = db.Column(db.Integer, default=0)
    economy_room_rate = db.Column(db.Integer, default=0)
    double_room_rate = db.Column(db.Integer, default=0)
    premium_room_rate = db.Column(db.Integer, default=0)
    exclusive_room_capacity = db.Column(db.Integer, default=0)
    economy_room_capacity = db.Column(db.Integer, default=0)
    double_room_capacity = db.Column(db.Integer, default=0)
    premium_room_capacity = db.Column(db.Integer, default=0)
    allow_pet_cost = db.Column(db.Integer, default = 0)
    breakfast_for_people = db.Column(db.Integer, default=0)
    extra_parking_rate = db.Column(db.Integer, default=0)
    extra_pillow_rate = db.Column(db.Integer, default=0)
    hotel_facilities = db.Column(JSON, default={})
    hotelreviews = db.relationship('Review', backref="reviewed")
    hotel_booking = db.relationship('Booking', backref="hotelconcerned") #Booking

    def __init__(self, data) -> None:
        self.hotel_name = data['hotel_name']
        self.description = data['description']
        self.city = data['city']
        self.state = data['state']
        self.country = data['country']
        self.pincode = data['pincode']
        self.address = data['address']
        self.hotel_images = data['hotel_images']

        if 'hotel_facilities' in data.keys():
            self.hotel_facilities = data['hotel_facilities']

        if "hotel_profile_picture" in data.keys():
            self.hotel_profile_picture = data['hotel_profile_picture']

        if "exclusive_room_count" in data.keys():
            self.exclusive_room_count = data['exclusive_room_count']
            self.exclusive_room_rate = data['exclusive_room_rate']
            self.exclusive_room_capacity = data['exclusive_room_capacity']      

        if "economy_room_count" in data.keys():
            self.economy_room_count = data['economy_room_count']
            self.economy_room_rate = data['economy_room_rate']
            self.economy_room_capacity = data['economy_room_capacity']  

        if "double_room_count" in data.keys():
            self.double_room_count = data['double_room_count']
            self.double_room_rate = data['double_room_rate']
            self.double_room_capacity = data['double_room_capacity']          

        if "premium_room_count" in data.keys():
            self.premium_room_count = data['premium_room_count']
            self.premium_room_rate = data['premium_room_rate']
            self.premium_room_capacity = data['premium_room_capacity'] 

        if "allow_pet_cost" in data.keys():
            self.allow_pet_cost = data['allow_pet_cost']

        if "breakfast_for_people" in data.keys():
            self.breakfast_for_people = data['breakfast_for_people']

        if "extra_parking_rate" in data.keys():
            self.extra_parking_rate = data['extra_parking_rate']

        if "extra_pillow_rate" in data.keys():
            self.extra_pillow_rate = data['extra_pillow_rate']



# review model with many table for user and hotel 
class Review(db.Model):
    review_id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)
    datetime_posted = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    hotel_id  = db.Column(db.Integer, db.ForeignKey("hotel.hotel_id"))


# booking temprory table for holding many to many relationship with user and booking table
# booking representation
booking_representation = {
    "b_id": fields.Integer,
    "check_in_date": fields.String,
    "check_out_date": fields.String,
    "status": fields.String,
    "child_count": fields.Integer,
    "adult_count": fields.Integer,
    "transaction_id": fields.Integer,
    "exclusive_count": fields.Integer,
    "economy_count": fields.Integer,
    "double_count": fields.Integer,
    "premium_count": fields.Integer,
    "bookingowner": fields.Nested(user_representation),
    "hotelconcerned": fields.Nested(hotel_representation)
}

class Booking(db.Model):
    b_id = db.Column(db.Integer, primary_key=True)
    check_in_date = db.Column(db.Date, nullable=False)
    check_out_date = db.Column(db.Date, nullable=False)
    status = db.Column(db.String, nullable=False, default="Booked")
    child_count = db.Column(db.Integer, nullable=False)
    adult_count = db.Column(db.Integer, nullable=False)
    transaction_id = db.Column(db.Integer, default=None)
    exclusive_count= db.Column(db.Integer, default=0)
    economy_count= db.Column(db.Integer, default=0)
    double_count = db.Column(db.Integer, default=0)
    premium_count = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    hotel_id = db.Column(db.Integer, db.ForeignKey("hotel.hotel_id"))


#SearchHistory model 
class SearchHistory(db.Model):
    searchHistory_id = db.Column(db.Integer, primary_key=True)
    ip= db.Column(db.String(200), nullable=True)
    location = db.Column(db.String(200),nullable=False)
    search_date = db.Column(db.Date, nullable=False)
    number_times= db.Column(db.Integer(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    hotel_id = db.Column(db.Integer, db.ForeignKey("hotel.hotel_id"))


    def __init__(self, data) -> None:
        self. serachHistory_id= data[' serachHistory_id']
        self.ip = data['ip']
        self.location = data['location']
        self.search_date = data['search_date']
        self.number_times = data['number_times']
        self.user_id = data['user_id']
        self.address = data['address']
        self.hotel_id = data['hotel_id']