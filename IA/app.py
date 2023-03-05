# import packages
from flask import Flask, jsonify, abort, request
import pickle

# create an instance of the flask app
app = Flask(__name__)
tf_model = pickle.load(open("artifacts/preprocess.pkl", 'rb'))
clf_model = pickle.load(open("artifacts/model.pkl", 'rb'))

@app.route('/')
def say_hello():
    return 'Hello, World!'

@app.route("/predict", methods=["POST"])
def get_forecast():
    print("request",request)
    print("json",request.json)
    sentence = request.json['data']
    print(sentence)
    preprocessed = tf_model.transform([sentence])
    probabilities = clf_model.predict_proba(preprocessed)[0]
    adult_probability    =  int(probabilities[0]*10)
    no_adult_probability =  10-adult_probability
    
    return jsonify({"adult": adult_probability,
                    "no_adult":no_adult_probability})


if __name__ == "__main__":
    app.run(debug=True)