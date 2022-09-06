from flask import Flask, abort, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import  reqparse, Resource, Api, marshal_with


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://efcdpwyl:R05Qw_8OiIW0hG_um1xr4blSG4-ar0Bx@rosie.db.elephantsql.com/efcdpwyl"
# app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://lccftkvn:iOCW9BYtnRqQakPSMfenW79jR5jvGd7l@rosie.db.elephantsql.com/lccftkvn"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = '578c61c660c50e32f4de9edcbbf4c191'

api = Api(app)

try:
    db = SQLAlchemy(app)

    # db.drop_all()

    from backend.routes.UserRoutes import UserHandler
    from backend.routes.HotelRoutes import HotelHandler
    from backend.routes.ReviewRoutes import HandleReview

    from backend.models.HotelModel import User, Hotel, Review

    # db.drop_all()
    # db.create_all()

    api.add_resource(UserHandler, "/user")
    api.add_resource(HotelHandler, "/hotel")
    api.add_resource(HandleReview, "/review")
    print('done with creating routes!')
except Exception as e:
    print(e)
    print('cannot start application, could not connect to database')


