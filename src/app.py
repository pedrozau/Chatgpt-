from flask import Flask, render_template, jsonify
import openai

openai.api_key = "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"

app = Flask(__name__) 

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
    app.run(debug=True,host="0.0.0.0")
