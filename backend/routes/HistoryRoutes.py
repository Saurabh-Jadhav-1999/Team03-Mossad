from backend import app, db
from backend.services.HistoryServices import validateHistoryData, addHistory, getHistory, getUserHistory
from backend.models.HotelModel import searchHistory_representation, searchHistory_representation_with_hotel
from backend.auth.authToken import token_required
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
    @marshal_with(searchHistory_representation_with_hotel)
    def get(self):
        data = getHistory() # get all the history
        return data, 200

    # route to add new history
    def post(self):
         # token validtion code 
        token_result = token_required(request)
        if  isinstance(token_result, dict)  and "error" in token_result.keys():
            print('error found')
            return make_response(token_result, 400)

        data=request.json
        #data.update({​​"search_date":datetime.datetime.utcnow()}​​)
        data.update({"search_date":datetime.datetime.utcnow()}) # add current date and time to request body
        validateData = validateHistoryData(request.json) # validate incoming data
        if validateData.errors:
            return make_response(validateData.errors, 400) # return error if validation fails
        history = addHistory(request.json) # adding new history
        return showHistory(history), 200

# class for handling topfivesuggested hotel api
class TopFiveSuggestionsForUser(Resource):
   def get(self):
        token_result = token_required(request)
    # print(token_result)
        if  type(token_result)==dict({}) and "error" in token_result.keys():
          return token_result

    # call the get search suggestion
        result = getUserHistory(request.json.get("user_id"))
        return make_response(result, 200)


# route to get the all the history in SearchHistory table
app.route("/history", methods=['POST'])
def historyAdding():
     print('hii:',request.json)
     validateData = validateHistoryData(request.json)
     
     if validateData.errors:
         return make_response(validateData.errors, 400)

     history = addHistory(request.json)
    
     return showHistory(history), 200