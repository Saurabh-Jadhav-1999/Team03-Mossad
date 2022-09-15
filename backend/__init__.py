from inspect import trace
from logging import Handler
import traceback
from flask import Flask, abort, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import  reqparse, Resource, Api, marshal_with
from flask_cors import CORS



app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://efcdpwyl:R05Qw_8OiIW0hG_um1xr4blSG4-ar0Bx@rosie.db.elephantsql.com/efcdpwyl"

# db url for testing
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://xcqgjvbd:m2mMRxVQp3X5j6cBgp7YlJgX1Qo3LjuI@rosie.db.elephantsql.com/xcqgjvbd"

# final testing with new facality model and updated code testing
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://nlxvhwkd:8tBh0PJcR6C5U1-o2XyCC89hEh4DQGnv@rosie.db.elephantsql.com/nlxvhwkd"

# new database for testing
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://iwvausdj:e0nz6LyOKpPcJShk3bNncscM_Gx1Htpa@tyke.db.elephantsql.com/iwvausdj"

# final testing with new facality model and updated code testing
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://nlxvhwkd:8tBh0PJcR6C5U1-o2XyCC89hEh4DQGnv@rosie.db.elephantsql.com/nlxvhwkd"

# allow origins
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = '578c61c660c50e32f4de9edcbbf4c191'

api = Api(app)

try:
    db = SQLAlchemy(app) # create db object

    # import route handlers
    from backend.routes.UserRoutes import UserHandler
    from backend.routes.HotelRoutes import HotelHandler
    from backend.routes.ReviewRoutes import HandleReview
    from backend.routes.BookingRoutes import HandleBooking
    from backend.routes.HistoryRoutes import HandleHistory, TopFiveSuggestionsForUser
    from backend.routes.FacalityRoute import HandleFacality


    from backend.models.HotelModel import User, Hotel, Review,SearchHistory

    #db.drop_all()
    #db.create_all()
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
    import tracemalloc
    print(e.with_traceback)
    print(traceback.print_exc())
    print('cannot start application, could not connect to database')#

