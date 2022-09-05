from flask_restful import marshal_with, Resource, reqparse
from flask import abort, request, make_response
from backend.models.HotelModel import User
from backend.models.UserModel import user_representation
from backend import db, app
from backend.services.UserServices import isUserExists, addNewUser, validateLoginData
import json
import jwt

# post request parser
post_parser = reqparse.RequestParser()
post_parser.add_argument("user_name", str, help="user_name is missing", required=True)
post_parser.add_argument("email", str, help="email is missing", required=True)
post_parser.add_argument("password", str, help="password is missing", required=True)
post_parser.add_argument("user_address", str, help="user_address is missing", required=True)
post_parser.add_argument("user_contact", str, help="user_contact is missing", required=True)
post_parser.add_argument('user_role', str, help="user role is missing", required=True)

class UserHandler(Resource):
    @marshal_with(user_representation)
    def get(self):
        result = User.query.all()
        return result, 200


    @marshal_with(user_representation)
    def post(self):
        args = post_parser.parse_args()
        user = isUserExists(args['email'])
        if user:
            abort(400, "user already exists")
        result = addNewUser(args)
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
                    "uid": user['user_id']
                }
    token = jwt.encode(
                    payload=payload_data,
                    key= app.config['SECRET_KEY']
                )
    resp = make_response(data, 200)
    resp.headers['x-auth-token'] = token    
    return resp, 200