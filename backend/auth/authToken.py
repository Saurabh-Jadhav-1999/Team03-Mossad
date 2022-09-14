import jwt
from backend import app
from backend.models.HotelModel import User
from flask import make_response


#Header:- contains the algorithms like RSA or HMACSHA256 and the information of the type of Token.
#Signature:- { base64urlencoded (header) +”.”+ base64urlencoded (payload) +”.”+ secret } add header x-auth-token generate it using jwt 
#Payload:- contains the information of rows, i.e., user credentials.

#A combination of all headers, payload and signatures converts into JWT TOKEN.

#flow of jwt auth
#user login with username and password
#server create jwt token with secret
#response jwt token
#browser send auth request with jwt header
#server check jwt signature from client,if valid,get user info from jwt
#send response to browser


def token_required(request):
    token = None
    if 'x-auth-token' in request.headers:
        token = request.headers['x-auth-token']
    if not token:
        return ({'error' : 'Token is missing !!'})
    try:
        # decoding the payload to fetch the stored details
        print("token",token)
        data = jwt.decode(token,app.config['SECRET_KEY'], algorithms=["HS256"])
        current_user = User.query.filter_by(email=data['email']).first()
        request.json.update({"email":current_user.email, "user_id":current_user.user_id})
        return request
    except Exception as e:
        # print(e)
        return {"error": "invalid token"}
        # returns the current logged in users contex to the routes 
    