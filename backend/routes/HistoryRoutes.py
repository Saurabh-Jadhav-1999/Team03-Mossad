

from backend import app, db
from backend.services.HistoryServices import validateHistoryData, addHistory, getHistory
from backend.models.HotelModel import searchHistory_representation
from flask import make_response, request
from flask_restful import marshal_with, Resource
import datetime

# method to show data in searchHistory_representation way
@marshal_with(searchHistory_representation)
def showHistory(data):
    return data

# class to handle /history api request's
class HandleHistory(Resource):
    
     # route to get all the history
    @marshal_with(searchHistory_representation)
    def get(self):
        data = getHistory() # get all the history
        return data

    # route to add new history
    def post(self):
        
        data=request.json
        #data.update({​​"search_date":datetime.datetime.utcnow()}​​)
        data.update({"search_date":datetime.datetime.utcnow()})

        validateData = validateHistoryData(request.json) # validate incoming data
        
        if validateData.errors:
            return make_response(validateData.errors, 400) # return error if validation fails

        history = addHistory(request.json) # adding new history
    
        return showHistory(history), 200

app.route("/history", methods=['POST'])
def historyAdding():
     print('hii:',request.json)
     validateData = validateHistoryData(request.json)
     
     if validateData.errors:
         return make_response(validateData.errors, 400)

     history = addHistory(request.json)
    
     return showHistory(history), 200