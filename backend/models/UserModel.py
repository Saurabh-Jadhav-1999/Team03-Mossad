from flask_restful import fields

# object to represent data of user model
user_representation = {
    "user_id": fields.Integer,
    "user_name":fields.String,
    "email": fields.String,
    "password": fields.String,
    "user_address": fields.String,
    "user_contact": fields.String,
    "user_profile": fields.String, 
    "user_role": fields.String
}