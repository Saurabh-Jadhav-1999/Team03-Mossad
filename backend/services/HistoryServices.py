from operator import and_
from cerberus import Validator
from backend.models.HotelModel import SearchHistory
import datetime
from sqlalchemy import and_
from backend import db
from backend.models.HotelModel import searchHistory_representation_with_hotel
from flask_restful import marshal_with

# method to show db result in search_history_with_hotel format
@marshal_with(searchHistory_representation_with_hotel)
def showSearchHistoryDataWithHotel(data):
        return data

# method to validate input data for history table with location, user_id
def validateHistoryData(data):
    historySchema = {
        "location": {"type":"string", "required":True},
        "user_id": {"type":"integer", "required":True},
    }

    historyValidator = Validator(historySchema)
    historyValidator.allow_unknown=True
    result = historyValidator.validate(data)
    return historyValidator

# validation for building user history based on location and hotel_id
def validateHistoryDataWithHotel(data):
    history_Schema = {
            "city_name":{"type":"string", "required":True},
            "user_id" :{"type":"integer", "required":True}, 
            "hotel_id":{"type":"integer", "required":True}      
    }

    history_validate = Validator(history_Schema)
    history_validate.allow_unknown = True
    res = history_validate.validate(data)
    return history_validate

# add new history in history model
def addHistory(data):
    row1 = db.session.query(SearchHistory).filter(and_(SearchHistory.user_id == data['user_id'], SearchHistory.location == data['location'],SearchHistory.hotel_id==None)).first()
    if row1 is not None:
        row1.number_times=row1.number_times+1
        row1.search_date=datetime.datetime.utcnow()
       # searchHistory = SearchHistory(location=data['location'],search_date=date.today(),user_id=data['user_id'],hotel_id=data['hotel_id'])  
       # db.session.add(searchHistory)
        db.session.commit()
        return row1
    else:
        searchHistory = SearchHistory(location=data['location'],search_date=datetime.datetime.utcnow(),number_times=1,user_id=data['user_id'])  
        db.session.add(searchHistory)
        db.session.commit()
        return searchHistory

# method to add user history by hotel_id, location, user_id
def addHistoryByHotelId(data):
        # check if user have already history with given details
        history = SearchHistory.query.filter(and_(SearchHistory.hotel_id==data['hotel_id'], SearchHistory.user_id==data['user_id'], SearchHistory.hotel_id==data['hotel_id'])).first()

        # if user have already present update number_times count
        if history is not None:
                history.number_times=history.number_times+1
                history.search_date=datetime.datetime.utcnow()
                db.session.commit()
                return showSearchHistoryDataWithHotel(history)

        # if user history not exists
        newHistory = SearchHistory(location=data['city_name'],user_id=data['user_id'], hotel_id=data['hotel_id'], search_date=datetime.datetime.utcnow(), number_times=1)
        db.session.add(newHistory)
        newHistory = db.session.commit()
        return showSearchHistoryDataWithHotel(newHistory)

# method to get all the history 
def getHistory():
    return SearchHistory.query.all()


# method to get user history