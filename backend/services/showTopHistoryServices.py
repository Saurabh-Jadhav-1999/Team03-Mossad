
from backend import db, app  
import backend.models.HotelModel
from backend.models.HotelModel import SearchHistory,Hotel,Review
from backend.services.UserServices import getPerticularUser
from backend.services.HotelServices import getPerticularHotelById
from cerberus import Validator
import datetime
from datetime import date
from sqlalchemy import func, or_, and_
from sqlalchemy import desc

 
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

# show top five hotels(according to top ratings) in city 
def showTopHistory(data):
    #most frequently city comes first select that city
    res1=db.session.query(SearchHistory).order_by(desc(SearchHistory.number_times)).first()
    #most frequently city comes first select that city and stored int city_name
    city_name=res1.location
    #select hotel.name,hotel.id,Review.rating from Hotel join Review on Hotel.hotel_id=Review.hotel_id where hotel.cityName==city_name and orderby des(rating) and limit==5
    res2=db.session.query((Hotel.hotel_name,Hotel.hotel_id,Review.rating).join(Hotel,Hotel.hotel_id==Review.hotel_id)).filter_by(Hotel.city==city_name).order_by(desc(Review.rating)).limit(5).all()
    #iterate 
    hotelid = [i.hotel_id for i in res2]
    print(hotelid)
    return hotelid


