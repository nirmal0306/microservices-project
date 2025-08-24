from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so frontend can fetch

products = [
    {"id": 1, "name": "Laptop"},
    {"id": 2, "name": "Mobile"},
    {"id": 3, "name": "Tablet"}
]

@app.route('/')
def home():
    return "Product Service is running!"

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)
