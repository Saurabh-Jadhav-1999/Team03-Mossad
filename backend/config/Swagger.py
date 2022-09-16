template = {
    "swagger": "0.5.2",
    "info": {
        "title": "Hotel API",
        "description": "API for Hotel Booking",
        "contact": {
            "responsibleOrganization": "",
            "responsibleDeveloper" : "",
            "email": "deve@gmail.com",
            "url" : "www.twitter.com/deve"
        },
    "termsOfService" : "www.twitter.com/deve",
    "version": "1.0"    
    },
    "basePath": "/api/v1",     #bash bash for blueprint registration
    "schemes": [
        "http",
        "https"
    ],
    "securityDefinitions": {
        "Bearer": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
            "description": "JWT Authorization using the Bearer schem. Example: \"Authorization: Bearer {token}\""     
        }
    },
}

swagger_config = {
    "headers": [      
    ],
    "specs": [
        {
            "endpoint": 'apispec',
            "route": '/apispec.json',
            #"rule_filter" : lamda rule: True, #all in
            #"model_filter": lamda tag: True,  #all in
        }
    ],
    "static_url_path": "/flasgger_static",
    "swagger_ui": True,
    "specs_route": "/"    

}


