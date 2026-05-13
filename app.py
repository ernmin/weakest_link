from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/setup')
def setup():
    return render_template('setup.html')

@app.route('/game', methods=['POST'])
def game():
    player_names = []
    for key, value in request.form.items():
        if key.startswith('player_name_'):
            player_names.append(value)
    print(f"Detected players: {player_names}")
    duration = request.form.get('game_duration')
    num_players = request.form.get('num_players')
    return render_template('game.html', num_players=num_players, duration=duration, players=player_names)

if __name__ == "__main__":
    app.run(debug=True)