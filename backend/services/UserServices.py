from backend.models.UserModel import user_representation
from backend.models.HotelModel import User
from backend import db
from cerberus import Validator
from flask_restful import marshal_with

@marshal_with(user_representation)
def showData(data):
    return data


def isUserExists(email):
    user = User.query.filter_by(email=email).first()
    if not user:
        return user
    return showData(user)

def addNewUser(userinfo):
    try:
        user = User(userinfo)
        db.session.add(user)
        db.session.commit()
        return user
    except Exception as e:
        print(e)
        return {"error":e}


def validateLoginData(data):
    loginSchema = {
        "email": {'type':"string", "required":True,"minlength": 8,
            "maxlength": 255,
            "regex": "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"},
        "password": {"type":"string", "required":True}
    }
    loginValidator = Validator(loginSchema)
    result = loginValidator.validate(data)
    return loginValidator