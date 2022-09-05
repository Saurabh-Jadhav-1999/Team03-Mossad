from dataclasses import field
from backend import db
from flask_restful import fields
from sqlalchemy.dialects.postgresql import JSON


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

# db.drop_all()

# class User(db.Model):
#     email = db.Column(db.String(40), primary_key=True)
#     password = db.Column(db.String(200), nullable=False)
#     user_address = db.Column(db.String(200), nullable=False)
#     user_contact = db.Column(db.String(10), nullable=False)
#     user_profile = db.Column(db.String(10), default="abc.txt")
#     user_role = db.Column(db.String(20))

#     def __init__(self, userdata) -> None:
#         self.email = userdata['email']
#         self.password = userdata['password']
#         self.user_address = userdata['user_address']
#         self.user_contact = userdata['user_contact']
#         self.user_role = userdata['user_role']
#         if 'user_profile' in userdata.keys():
#             self.user_profile = userdata['user_profile']
# db.create_all()