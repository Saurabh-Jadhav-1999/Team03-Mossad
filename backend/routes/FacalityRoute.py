from backend import app, db
from backend.models.HotelModel import facality_representation, Facality, Hotel
from flask import make_response, request
from flask_restful import marshal_with, Resource

class HandleFacality(Resource   ):
    @marshal_with(facality_representation)
    def post(self):
        data = request.json
        ht = Hotel.query.filter_by(hotel_id=data['hotel_id']).first()
        if not ht:
            return make_response({"error":"invalid hotel id"}, 400)
        facality = Facality(hotelfacality=ht, breakfast=data['breakfast'], dinner=data['dinner'], out_door_sport=data['out_door_sport'], swimming_pool=data['swimming_pool'], spa=data['spa'], room_service=data['room_service'], living_room=data['living_room'], barbeque=data['barbeque'], free_wifi=data['free_wifi'],allow_pet_cost=data['allow_pet_cost'],breakfast_for_person=data['breakfast_for_person'],extra_parking_cost=data['extra_parking_cost'],extra_pillow_cost=data['extra_pillow_cost'])
        db.session.add(facality)
        db.session.commit()

        return facality

    @marshal_with(facality_representation)
    def get(self):
        return Facality.query.all()
