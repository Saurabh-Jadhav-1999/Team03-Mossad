from backend import app, db
from backend.services.ReviewServices import validateReviewData, addReview, getReviews,addAverageRating
from backend.models.HotelModel import review_representation
from flask import make_response, request
from flask_restful import marshal_with, Resource

# method to show data in review_representation way
@marshal_with(review_representation)
def showReview(data):
    return data

# class to handle /review api request's
class HandleReview(Resource):
    # route to get all the reviews
    @marshal_with(review_representation)
    def get(self):
        data = getReviews() # get all the reviews
        return data

    # route to add new review for perticular hotel by user
    def post(self):
        validateData = validateReviewData(request.json) # validate incoming data

        if validateData.errors:
            return make_response(validateData.errors, 400) # return error if validation fails

        review = addReview(request.json) # adding new review
        addAverageRating(review.hotel_id)
        return showReview(review), 200


app.route("/review", methods=['POST'])
def reviewAdding():
     #print('hii:',request.json)

     validateData = validateReviewData(request.json)

     if validateData.errors:
         return make_response(validateData.errors, 400)

     review = addReview(request.json)
    
     return showReview(review), 200

#app.route("/review", methods=["GET"])
#@marshal_with(review_representation)
#def getReviews():
#     data = getReviews()
#     return data