import jwt
from backend import app
from backend.models.HotelModel import User
from flask import make_response

# method to validate request header and check token availability and validity 
def token_required(request):
    token = None # to store token 
    if 'x-auth-token' in request.headers: 
        token = request.headers['x-auth-token'] # set token present in request header to token variable
    if not token:
        return ({'error' : 'Token is missing !!'}) # return error if token is not present in request header
    try:
        # decoding the payload to fetch the stored details
        print("token",token)
        data = jwt.decode(token,app.config['SECRET_KEY'], algorithms=["HS256"])
        # current_user = User.query.filter_by(email=data['email']).first()
        # request.json.update({"email":current_user.email, "user_id":current_user.user_id})
        request.json.update({"email":data['email'], "user_id":data['user_id']}) # adding user_id and email to request body
        return request
    except Exception as e:
        print(e)
        return {"error": "invalid token"} # return the error if token is invalid