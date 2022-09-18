from flask import Flask, abort, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import  reqparse, Resource, Api, marshal_with
from flask_cors import CORS

app = Flask(__name__)
# new database for testing
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://iwvausdj:e0nz6LyOKpPcJShk3bNncscM_Gx1Htpa@tyke.db.elephantsql.com/iwvausdj"

# final db for last demo 19/09/2022
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://yprqsugt:UZtE5dtDGQry7MGm-F226ydOxAyo3brB@rosie.db.elephantsql.com/yprqsugt"

# allow origins
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True # disable warnings of sqlalchemy 
app.config['SECRET_KEY'] = '578c61c660c50e32f4de9edcbbf4c191' # adding secret key to app configuration 

api = Api(app) # api object 

try:
    db = SQLAlchemy(app) # create db object

    # import route handlers
    from backend.routes.UserRoutes import UserHandler
    from backend.routes.HotelRoutes import HotelHandler
    from backend.routes.ReviewRoutes import HandleReview
    from backend.routes.BookingRoutes import HandleBooking
    from backend.routes.HistoryRoutes import HandleHistory, TopFiveSuggestionsForUser
    from backend.routes.FacalityRoute import HandleFacality

    from backend.models.HotelModel import User, Hotel, Review

    # db.drop_all()
    # db.create_all()
    # db.session.query(Review).delete()

    api.add_resource(UserHandler, "/user")  # route for handling user
    api.add_resource(HotelHandler, "/hotel") # route for handling hotel
    api.add_resource(HandleReview, "/review") # route for handling review
    api.add_resource(HandleBooking, "/booking") # route for handling booking
    api.add_resource(HandleHistory,"/history") # route for handling user's search history
    api.add_resource(TopFiveSuggestionsForUser,"/topFiveSuggestionsForUser") # route to get top five hotels in most searched city
    api.add_resource(HandleFacality, "/facality") # route for adding facalities to particular hotel
    print('done with creating routes!')
except Exception as e:
    print(e)
    print('cannot start application, could not connect to database')


