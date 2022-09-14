# from flask_restful import marshal_with, Resource, reqparse
# from flask import abort, request, make_response
# from backend.models.HotelModel import User
# from backend.models.UserModel import user_representation
# from backend import db, app
# from backend.services.UserServices import isUserExists, addNewUser, validateLoginData
# import json
# import jwt
# from backend.auth.authToken import token_required

# # post request parser
# #Parsers are responsible for taking the content of the request body as a bytestream,
# # and transforming it into a native Python data representation.
# post_parser = reqparse.RequestParser()
# post_parser.add_argument("user_name", str, help="user_name is missing", required=True)
# post_parser.add_argument("email", str, help="email is missing", required=True)
# post_parser.add_argument("password", str, help="password is missing", required=True)
# post_parser.add_argument("user_address", str, help="user_address is missing", required=True)
# post_parser.add_argument("user_contact", str, help="user_contact is missing", required=True)
# post_parser.add_argument('user_role', str, help="user role is missing", required=True)

# # class to handle /user get post request
# class UserHandler(Resource):
#     # method to get all the users
#     @marshal_with(user_representation)
#     def get(self):
#         result = User.query.all()
#         return result, 200

#     # method to add new user
#     @marshal_with(user_representation)
#     def post(self):
#         args = post_parser.parse_args() # parse incoming data validation
#         user = isUserExists(args['email']) # check if user exists 
#         if user:
#             abort(400, "user already exists") # return if user does not exists
#         result = addNewUser(args) # adding new user
#         return result, 200


# @app.route("/login", methods=["POST"])
# def login():
#     data = request.json
#     validationResult = validateLoginData(data)
 
#     if validationResult.errors:
#         return make_response(validationResult.errors, 400)
    
#     user = isUserExists(data['email'])
#     if not user:
#         abort(404, "user not found with given email address")

#     print(data['password'])
#     print(user['password'])
#     if user['password'] != data['password']:
#         print('Both are not equal')
#         abort(400, {'error':"Invalid email or password"})

# #Header contains the algorithms like RSA or HMACSHA256 and the information of the type of Token.
# #Signature { base64urlencoded (header) +”.”+ base64urlencoded (payload) +”.”+ secret }
# # add header x-auth-token generate it using jwt
# #A combination of all headers, payload and signatures converts into JWT TOKEN. 
# #Payload contains the information of rows, i.e., user credentials.

#     payload_data = {
#                     "email": user['email'],
#                     "uid": user['user_id'],
#                 }
#     token = jwt.encode(
#                     payload=payload_data,
#                     key= app.config['SECRET_KEY']
#                 )
#     data.update({"x-auth-token":token})
#     resp = make_response({"x-auth-token":token}, 200)
#     resp.headers['x-auth-token'] = token    
#     return resp, 200


# @app.route("/", methods=["GET"])
# def basicRoute():
#     print("before token validation:",request.json)
#     token_result = token_required(request)
#     print(token_result)
#     if  type(token_result)==dict({}) and "error" in token_result.keys():
#         return token_result
#     print("after token validation:",request.json) 
#     return make_response("Application is running", 200)

from flask_restful import marshal_with, Resource, reqparse
from flask import abort, request, make_response
from backend.models.HotelModel import User
from backend.models.UserModel import user_representation
from backend import db, app
from backend.services.UserServices import isUserExists, addNewUser, validateLoginData
import json
import jwt
from backend.auth.authToken import token_required

from backend.services.HistoryServices import getUserHistory

# post request parser
post_parser = reqparse.RequestParser()
post_parser.add_argument("user_name", str, help="user_name is missing", required=True)
post_parser.add_argument("email", str, help="email is missing", required=True)
post_parser.add_argument("password", str, help="password is missing", required=True)
post_parser.add_argument("user_address", str, help="user_address is missing", required=True)
post_parser.add_argument("user_contact", str, help="user_contact is missing", required=True)
post_parser.add_argument('user_role', str, help="user role is missing", required=True)

# class to handle /user get post request
class UserHandler(Resource):
    # method to get all the users
    @marshal_with(user_representation)
    def get(self):
        result = User.query.all()
        return result, 200

    # method to add new user
    @marshal_with(user_representation)
    def post(self):
        args = post_parser.parse_args() # parse incoming data validation
        user = isUserExists(args['email']) # check if user exists 
        if user:
            abort(400, "user already exists") # return if user does not exists
        result = addNewUser(args) # adding new user
        return result, 200


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    validationResult = validateLoginData(data)
 
    if validationResult.errors:
        return make_response(validationResult.errors, 400)
    
    user = isUserExists(data['email'])
    if not user:
        abort(404, "user not found with given email address")

    print(data['password'])
    print(user['password'])
    if user['password'] != data['password']:
        print('Both are not equal')
        abort(400, {'error':"Invalid email or password"})

    # add header x-auth-token generate it using jwt
    payload_data = {
                    "email": user['email'],
                    "uid": user['user_id'],
                }
    token = jwt.encode(
                    payload=payload_data,
                    key= app.config['SECRET_KEY']
                )
    data.update({"x-auth-token":token})
    resp = make_response({"x-auth-token":token}, 200)
    resp.headers['x-auth-token'] = token    
    return resp, 200


@app.route("/", methods=["GET"])
def basicRoute():

    # print("before token validation:",request.json)
    token_result = token_required(request)
    # print(token_result)
    if  type(token_result)==dict({}) and "error" in token_result.keys():
        return token_result
    # print("after token validation:",request.json) 

    # call the get search suggestion
    getUserHistory(request.json.get("user_id"))


    return make_response("Application is running", 200)