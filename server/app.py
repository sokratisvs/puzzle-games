from flask import Flask, jsonify
from search_puzzle_generator import board

app = Flask(__name__)

@app.route('/search-puzzle/')
def search_puzzle_route():
    response = jsonify({ 'puzzleArray': [board] })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "main":
    app.run(debug=True)
