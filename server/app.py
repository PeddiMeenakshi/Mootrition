from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

# Rule-based feed logic
def recommend_feed(weight, age, purpose, weather):
    weight = float(weight)
    if purpose == "Milk":
        dry_fodder = round(weight * 0.01, 2)
        concentrate = round(weight * (0.007 if weather == "Cold" else 0.005), 2)
        green_fodder = round(weight * 0.025, 2)
    else:
        dry_fodder = round(weight * 0.012, 2)
        concentrate = round(weight * 0.006, 2)
        green_fodder = round(weight * 0.02, 2)
    return dry_fodder, concentrate, green_fodder

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    weight = data.get('weight')
    age = data.get('age')
    purpose = data.get('purpose')
    weather = data.get('weather')
    dry, conc, green = recommend_feed(weight, age, purpose, weather)
    return jsonify({
        'dry_fodder': dry,
        'concentrate': conc,
        'green_fodder': green
    })

if __name__ == '__main__':
    app.run(debug=True)
