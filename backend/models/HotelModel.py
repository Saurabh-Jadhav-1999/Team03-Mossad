from dataclasses import field
from email.policy import default
from enum import unique
from backend import db
from flask_restful import fields
from sqlalchemy.dialects.postgresql import JSON
from datetime import date, datetime, timedelta
from backend.models.UserModel import user_representation



# User model 
class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(40), unique=True)
    password = db.Column(db.String(200), nullable=False)
    user_address = db.Column(db.String(200), nullable=False)
    user_contact = db.Column(db.String(10), nullable=False)
    user_profile = db.Column(db.String(10), default="abc.txt")
    user_role = db.Column(db.String(20))
    hotel_reviews = db.relationship('Review', backref="owner")# Review
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

# Review model data representation object
review_representation = {
    "review_id": fields.Integer,
    "rating": fields.Integer,
    "description": fields.String,
    "datetime_posted": fields.String,
    "owner": fields.Nested(user_representation)
}

# Facality representation 
facality_representation = {
    "allow_pet_cost":fields.Integer,
    "breakfast_for_person":fields.Integer,
    "extra_parking_cost":fields.Integer,
    "extra_pillow_cost":fields.Integer,
    "breakfast":fields.Boolean,
    "dinner":fields.Boolean,
    "out_door_sport":fields.Boolean,
    "swimming_pool":fields.Boolean,
    "spa":fields.Boolean,
    "room_service":fields.Boolean,
    "living_room":fields.Boolean,
    "barbeque":fields.Boolean,
    "free_wifi": fields.Boolean,
    "free_cancellation": fields.Boolean,
    "no_prepayment": fields.Boolean
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
    "hotelfacalities": fields.Nested(facality_representation) # nested field facality_representation
}

# review model data representation object
review_representation = {
    "review_id": fields.Integer,
    "rating": fields.Integer,
    "description": fields.String,
    "datetime_posted": fields.String,
    "owner": fields.Nested(user_representation),
    # "reviewed": fields.Nested(hotel_representation)
}

# create a object for hotel model data representations for suggestion list
hotel_representation_for_review = {
    "hotel_id":fields.Integer,
    "hotel_name":fields.String,
    "hotel_profile_picture": fields.String,
    "city":fields.String,
    "state":fields.String,
    "address":fields.String,
    "economy_room_rate":fields.Integer,
    "average_rating":fields.Float
}

# hotel model 
class Hotel(db.Model):
    hotel_id = db.Column(db.Integer, primary_key=True)
    hotel_name = db.Column(db.String(200), nullable=False)
    hotel_profile_picture = db.Column(db.String(200), default="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg")
    hotel_images = db.Column(db.ARRAY(db.String(2500)))
    description = db.Column(db.String(2000), nullable=False)
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
    average_rating = db.Column(db.Float, default=0)#new field
    hotelfacalities = db.relationship("Facality", backref="hotelfacality") # relationship with Facality model
    hotelreviews = db.relationship('Review', backref="reviewed") # relationship with Review model
    hotel_booking = db.relationship('Booking', backref="hotelconcerned") #  relation with Booking model

    # initialize the model fields
    def __init__(self, data) -> None:
        self.hotel_name = data['hotel_name']
        self.description = data['description']
        self.city = data['city']
        self.state = data['state']
        self.country = data['country']
        self.pincode = data['pincode']
        self.address = data['address']
        self.hotel_images = data['hotel_images']

        # check for all non required field if present then add
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

        if "landmark" in data.keys():
            self.landmark = data['landmark']

# facility model for hotel
class Facality(db.Model):
    hotel = db.Column(db.Integer, db.ForeignKey("hotel.hotel_id"))
    facality_id = db.Column(db.Integer, primary_key=True)
    breakfast = db.Column(db.Boolean, default = False)
    dinner = db.Column(db.Boolean, default = False)
    out_door_sport = db.Column(db.Boolean, default = False)
    swimming_pool = db.Column(db.Boolean, default = False)
    spa = db.Column(db.Boolean, default = False)
    room_service = db.Column(db.Boolean, default = False)
    living_room = db.Column(db.Boolean, default = False)
    barbeque = db.Column(db.Boolean, default = False)
    allow_pet_cost = db.Column(db.Float, nullable = False)
    breakfast_for_person = db.Column(db.Integer, nullable=False)
    extra_parking_cost = db.Column(db.Float, nullable=False)
    extra_pillow_cost = db.Column(db.Integer, nullable=False)
    free_wifi = db.Column(db.Boolean, default = False)
    free_cancellation = db.Column(db.Boolean, default=False)
    no_prepayment = db.Column(db.Boolean, default=False)


# review model with many table for user and hotel 
class Review(db.Model):
    review_id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=False)
    datetime_posted = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))  # relation with user table
    hotel_id  = db.Column(db.Integer, db.ForeignKey("hotel.hotel_id")) # relation with hotel table


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
    "hotelconcerned": fields.Nested(hotel_representation)
}

# booking temprory table for holding many to many relationship with user and booking table
# model for booking a hotel
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
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id")) # relation with User model
    hotel_id = db.Column(db.Integer, db.ForeignKey("hotel.hotel_id")) # relation with Hotel model

#search history representation
searchHistory_representation = {
    
    "location": fields.String,
    "search_date": fields.String,
    "number_times": fields.Integer,
 
}

# representation for SearchHistory with hotel_id
searchHistory_representation_with_hotel = {
    "user_id": fields.Integer,
    "hotel_id": fields.Integer,
    "location": fields.String,
    "search_date": fields.String,
    "number_times": fields.Integer,
}

# search history(user) model
class SearchHistory(db.Model):
    searchHistory_id = db.Column(db.Integer, primary_key=True)
    ip= db.Column(db.String(200),default=None)
    location = db.Column(db.String(200),nullable=False)
    search_date = db.Column(db.Date, nullable=False)
    number_times= db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer)
    hotel_id = db.Column(db.Integer,default=None)
    search_date = db.Column(db.DateTime, nullable=False)
    number_times= db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    hotel_id = db.Column(db.Integer, default=None)

# create a object for hotel model data representations
hotel_representation_for_review = {
    "hotel_id":fields.Integer,
    "hotel_name":fields.String,
    "hotel_profile_picture": fields.String,
    "city":fields.String,
    "state":fields.String,
    "address":fields.String,
    "economy_room_rate":fields.Integer,
    "average_rating":fields.Float
}
