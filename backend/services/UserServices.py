from backend.models.UserModel import user_representation
from backend.models.HotelModel import User
from backend import db
from cerberus import Validator
from flask_restful import marshal_with

# method to show data in user_representation form 
@marshal_with(user_representation)
def showData(data):
    return data

# method to check if user exists with given email
def isUserExists(email):
    user = User.query.filter_by(email=email).first()
    if not user:
        return user
    return showData(user)

# method to add new user
# input user model fields
def addNewUser(userinfo):
    try:
        user = User(userinfo)
        db.session.add(user)
        db.session.commit()
        return user
    except Exception as e:
        print(e)
        return {"error":e}

# method to validate incoming data from request checks for email and password mandatory fields
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

# method to get one single user by its user_id
def getPerticularUser(user_id):
    try:
        return User.query.filter_by(user_id=user_id).first()
    except Exception as e:
        return {"error":e}

# method to return current date 
def getCurrentDate():
    from datetime import datetime
    return  datetime.strptime(datetime.today().strftime("%Y-%m-%d"), "%Y-%m-%d")