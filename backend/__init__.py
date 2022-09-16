from flask import Flask, abort, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import  reqparse, Resource, Api, marshal_with
from flask_cors import CORS
from flasgger import Swagger
from backend.config.Swagger import template,swagger_config


app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://efcdpwyl:R05Qw_8OiIW0hG_um1xr4blSG4-ar0Bx@rosie.db.elephantsql.com/efcdpwyl"

# db url for testing
# app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://lccftkvn:iOCW9BYtnRqQakPSMfenW79jR5jvGd7l@rosie.db.elephantsql.com/lccftkvn"

# final testing with new facality model and updated code testing
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://nlxvhwkd:8tBh0PJcR6C5U1-o2XyCC89hEh4DQGnv@rosie.db.elephantsql.com/nlxvhwkd"


#config swagger
Swagger = {
    'title': "Hotel Booking API",
    'uiversion': 3
}


# allow origins
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = '578c61c660c50e32f4de9edcbbf4c191'

# Swagger(app, config= swagger_config, template=template)

#swagger = Swagger(app)
api = Api(app)

try:
    db = SQLAlchemy(app) # create db object

    # import route handlers
    from backend.routes.UserRoutes import UserHandler
    from backend.routes.HotelRoutes import HotelHandler
    from backend.routes.ReviewRoutes import HandleReview
    from backend.routes.BookingRoutes import HandleBooking
    from backend.routes.HistoryRoutes import HandleHistory
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
    api.add_resource(HandleFacality, "/facality") # route for adding facalities to particular hotel
    print('done with creating routes!')
except Exception as e:
    print(e)
    print('cannot start application, could not connect to database')



# config swagger
# SWAGGER = {
#     'title':"Hotel Booking API",
#     'uiversion':3
# }


