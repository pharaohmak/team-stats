const team = {
    _players: [{
            firstName: 'Mak',
            lastName: 'Ibrahim',
            age: 26
        },
        {
            firstName: 'Rihan',
            lastName: 'Deng',
            age: 23
        },
        {
            firstName: 'Jon',
            lastName: 'Doe',
            age: 29
        }
    ],
    _games: [{
            opponent: 'Manchester United',
            teamPoints: 44,
            opponentPoints: 50
        },
        {
            opponent: 'Liverpool',
            teamPoints: 44,
            opponentPoints: 53
        },
        {
            opponent: 'Everton',
            teamPoints: 44,
            opponentPoints: 40
        }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        }
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this._games.push(game);
    },
};

team.addPlayer('Lionel', 'Messi', 34);
team.addPlayer('Christiano', 'Ronaldo', 36);
team.addPlayer('Neymar', 'Santos', 29);

console.log(team.players);

team.addGame('Leicester City', 44, 49);
team.addGame('Leeds United', 44, 33);
team.addGame('Arsenal', 44, 30);

console.log(team.games);