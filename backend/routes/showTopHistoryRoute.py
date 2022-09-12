from backend import app, db
from backend.services.showTopHistoryServices import showTopHistory
from backend.models.HotelModel import searchHistory_representation,review_representation,searchHistory_representation
from flask import make_response, request
from flask_restful import marshal_with, Resource
import datetime


# method to show data in searchHistory_representation way
@marshal_with(review_representation)
def showTopHistory(data):
    return data



# class to handle /history api request's
class HandleHistoryTop(Resource):
    
     # route to get all the history
    @marshal_with(review_representation)
    def get(self):
        data = showTopHistory() # get all the history
        return data

    # route to add new history
   
# method to show data in review_representation way

app.route("/showTopHistory", methods=["GET"])
@marshal_with(review_representation)
def showTopHistory():
    data = showTopHistory()
    return data