from flask_restful import marshal_with, Resource, reqparse
from flask import abort, request, make_response
from backend.models.HotelModel import User, Hotel
from backend.models.UserModel import user_representation
from backend import db, app
from cerberus import Validation
from backend.services.HotelServices import validateHotelData

app.post("/hotel")
def hotelAdd():
    result = validateHotelData(request.json)
    if result.errors:
        return result.errors, 400

    print(result.document)

    return result.document, 200