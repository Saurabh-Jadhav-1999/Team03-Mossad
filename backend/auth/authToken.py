import jwt
from backend import app
from backend.models.HotelModel import User
from flask import make_response


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
    