from flask import Flask, render_template, jsonify
from dotenv import dotenv_values
from flask_cors import CORS 
import openai
import os 


config = dotenv_values(".env")

openai.api_key =   config['API_KEY']     #os.getenv('API_KEY')

app = Flask(__name__) 
CORS(app)




@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/v1/chat/<string:content>")
def api(content):
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {"role": "user", "content": content}
    ]
    )
    #print(completion.choices[0].message)

    return jsonify({
        "data": completion.choices[0].message
    })





if __name__ == "__main__": 
    app.run(debug=False,host="0.0.0.0")
