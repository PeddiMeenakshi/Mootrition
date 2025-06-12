from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib
import lightgbm as lgb
app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

# Rule-based feed logic
def recommend_feed(breed,weight, age, purpose, weather):
    weight = float(weight)
    model = joblib.load("cattle_diet_predictor.pkl")

    # Predict for new input
    new_input = pd.DataFrame([{
        'Breed': breed,
        'Weight_kg': weight,
        'Age_years': age,
        'Purpose': purpose,
        'Weather': weather
    }])

    predicted_diet = model.predict(new_input)
    return round(predicted_diet[0][0],3),round(predicted_diet[0][1],3),round(predicted_diet[0][2],3)
    
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    breed=data.get('breed')
    weight = data.get('weight')
    age = data.get('age')
    purpose = data.get('purpose')
    weather = data.get('weather')
    dry, conc, green = recommend_feed(breed,weight, age, purpose, weather)
    return jsonify({
        'dry_fodder': dry,
        'concentrate': conc,
        'green_fodder': green
    })

if __name__ == '__main__':
    app.run(debug=True)