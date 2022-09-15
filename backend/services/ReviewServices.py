from backend import db, app  
from backend.models.HotelModel import User, Hotel, Review
from backend.services.UserServices import getPerticularUser
from backend.services.HotelServices import getPerticularHotelById
from cerberus import Validator
import datetime
from sqlalchemy import func
import math


# method to validate input data for review table
def validateReviewData(data):
    reviewSchema = {
        "rating": {"type":"integer", "required":True},
        "description": {"type":"string", "required":True},
        "user_id": {"type":"integer", "required":True},
        "hotel_id": {"type":"integer", "required":True}
    }

    reviewValidator = Validator(reviewSchema)
    result = reviewValidator.validate(data)
    return reviewValidator


# method to get all the reviews 
def getReviews():
    return Review.query.all()

# method to return average rating of particular hotel
def averageRating(hotel_id):
    result1 = db.session.query(func.avg(Review.rating).label("average rating"), func.count(Review.hotel_id).label("total_reviews")).filter(Review.hotel_id==hotel_id).all()
    result = result1[0]['average rating']
    count = result1[0]['total_reviews']
    if result != None:
        result = round(result, 1)
    return [result, count]


# method to add average rating into table
def addAverageRating(hotel_id):
    rating = averageRating(hotel_id) # get the rating of hotel
    
    hotel = getPerticularHotelById('hotel_id') # get the hotel detail's by hotel_id

    hotel.average_rating = rating[0]

    db.session.commit()

# method to add average rating into table
def addAverageRating(hotel_id):
    
    rating = averageRating(hotel_id) # get the rating of hotel
    hotel = getPerticularHotelById(hotel_id) # get the hotel detail's by hotel_id
    hotel.average_rating = rating[0] # add the new average rating 
    db.session.commit() # save the changes
