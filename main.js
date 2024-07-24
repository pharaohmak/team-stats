const team = {
    _players: [
        { firstName: 'Mak', lastName: 'Ibrahim', age: 26 },
        { firstName: 'Rihan', lastName: 'Deng', age: 23 },
        { firstName: 'Jon', lastName: 'Doe', age: 29 }
    ],
    _games: [
        { opponent: 'Manchester United', teamPoints: 44, opponentPoints: 50 },
        { opponent: 'Liverpool', teamPoints: 44, opponentPoints: 53 },
        { opponent: 'Everton', teamPoints: 44, opponentPoints: 40 }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        const player = { firstName, lastName, age };
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
        const game = { opponent, teamPoints, opponentPoints };
        this._games.push(game);
    },
};

const renderData = () => {
    const playersList = document.getElementById('playersList');
    const gamesList = document.getElementById('gamesList');

    playersList.innerHTML = '';
    gamesList.innerHTML = '';

    team.players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.firstName} ${player.lastName}, Age: ${player.age}`;
        playersList.appendChild(listItem);
    });

    team.games.forEach(game => {
        const listItem = document.createElement('li');
        listItem.textContent = `vs. ${game.opponent}, Team Points: ${game.teamPoints}, Opponent Points: ${game.opponentPoints}`;
        gamesList.appendChild(listItem);
    });
};

document.getElementById('addDataButton').addEventListener('click', () => {
    team.addPlayer('Lionel', 'Messi', 34);
    team.addPlayer('Christiano', 'Ronaldo', 36);
    team.addPlayer('Neymar', 'Santos', 29);

    team.addGame('Leicester City', 44, 49);
    team.addGame('Leeds United', 44, 33);
    team.addGame('Arsenal', 44, 30);

    renderData();
});

renderData();