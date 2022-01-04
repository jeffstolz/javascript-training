'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, `Thiago`, `Coutino`, `Perisic`];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

gameEvents.delete(64);
console.log(gameEvents.keys());

const array = [...new Set(gameEvents.values())];
console.log(array);

let totalMinutes = 0;
for (let value of gameEvents.keys()) {
  totalMinutes += value;
}
console.log(
  `The average minute an event happened this game was ${
    totalMinutes / gameEvents.size
  }`
);

for (const [key, value] of gameEvents.entries()) {
  key < 45 && console.log(`[FIRST HALF] ${(key, value)}`);
  key > 45 && console.log(`[SECOND HALF] ${(key, value)}`);
}
