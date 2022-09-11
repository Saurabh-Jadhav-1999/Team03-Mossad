
from backend import db, app  
import backend.models.HotelModel
from backend.models.HotelModel import SearchHistory
from backend.services.UserServices import getPerticularUser
from backend.services.HotelServices import getPerticularHotelById
from cerberus import Validator
import datetime
from datetime import date
from sqlalchemy import func, or_, and_

# method to validate input data for history table
def validateHistoryData(data):
    historySchema = {
        #"searchHistory_id": {"type":"integer", "required":True},
        # "ip": {"type":"string", "required":True},
        "location": {"type":"string", "required":True},
       # "search_date": {"type":"datetime", "required":True},
      #  "number_times": {"type":"integer", "required":True},
        "user_id": {"type":"integer", "required":True},
     #   "hotel_id": {"type":"integer", "required":True}
    }

    historyValidator = Validator(historySchema)
    historyValidator.allow_unknown=True
    result = historyValidator.validate(data)
    return historyValidator

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



    # searchHistory = SearchHistory(location=data['location'],search_date=datetime.datetime.utcnow(),number_times=data['number_times'],user_id=data['user_id'],hotel_id=data['hotel_id'])  
    # db.session.add(searchHistory)
    # db.session.commit()
    # return searchHistory

# method to get all the history 
def getHistory():
    return SearchHistory.query.all()

# def checkIfSearchUserExists(user_id, location):

#     row1 = session.query(SearchHistory).filter(SearchHistory.user_id == data['user_id'] && SearchHistory.location == data['location']).first()

#     if row1 is not None:
        #searchHistory = SearchHistory(location=data['location'],search_date=date.today(),number_times=number_times+1,user_id=data['user_id'],hotel_id=data['hotel_id'])  
        #db.session.add(searchHistory)
        #db.session.commit()
          #return searchHistory
#         
#     else:
#       #searchHistory = SearchHistory(location=data['location'],search_date=date.today(),number_times=1,user_id=data['user_id'],hotel_id=data['hotel_id'])  
        #db.session.add(searchHistory)
        #db.session.commit()
          #return searchHistory
