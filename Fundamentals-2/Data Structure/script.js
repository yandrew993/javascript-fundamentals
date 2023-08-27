'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (mainMenuIndex, starterMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function ({
    mainMenuIndex = [],
    address,
    starterMenuIndex,
    place,
    time,
  }) {
    console.log(
      `Order received ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time} from ${place}.Thanks for shopping with us`
    );
  },
  ingredients: (ing1, ing2, ing3) => {
    console.log(
      `Here is your delicious Chapati prepared with ${ing1},${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  foodDelivery: function (food, time, doorNumber) {
    console.log(
      `Your order of ${food} has been received .Please wait for delivery latest by ${time} at door number:${doorNumber}`
    );
  },
};
// Calling function for Ingridients in the restaurant Objects
const newIng = [
  // prompt("Let's make chapati ing1"),
  // prompt("Let's make chapati ing2"),
  // prompt("Let's make chapati ing3"),
];
// console.log(newIng);
restaurant.ingredients(...newIng);

// Calling function for foodDelivery in the restaurant Object
// restaurant.foodDelivery(...pay);
// const pay = [
//   prompt('food to be served with?'),
//   prompt('At what time?'),
//   prompt('Door Number?'),
// ];

// Rest pattern in arays
// const [pizza, ...others] = restaurant.mainMenu;
// console.log(pizza, others);

// Reset Pattern in action using function
let sum = 0;
const add = (...numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
};
add(3, 5, 7, 7, 4, 3, 5, 6, 87, 54, 68);
console.log(sum);

// Real world scenario
//

// Objects
const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
const str = 'Jonas';
// console.log(...str, 'S.');
restaurant.orderDelivery({
  time: '2200hrs',
  address: 'yandrew993@gmail',
  place: 'tintoler',
  starterMenuIndex: 2,
  mainMenuIndex: 0,
});
const [pp1, ...arr] = [...restaurant.mainMenu];
console.log(arr, pp1);
const arr1 = [...arr];
console.log(arr1);
const newArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newArr);
const [pitzza, , resotto, ...extra] = newArr;
console.log(pitzza, resotto, extra);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// Destructuring Nested Array
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
//console.log(i, j, k);

//Setting values to a default variable during object destructuring
const {
  name: restaurantName = [],
  openingHours: hours = [],
  menu = [],
} = restaurant;
// console.log(restaurantName, hours, menu);

// Mutating Variables
let a = 119;
let b = 20;
let c = 40;
const obj = { a: 2, b: 7, c: 4 };
({ a, b } = obj);
//console.log(a, b);

//Nested Objects

const {
  sat: { open, close },
} = restaurant.openingHours;
console.log(open, close);

const bookingDetails = {
  name: 'Ena-Coach',
  From: ['Katito', 'Kisumu', 'Kisii', 'Kericho'],
  To: 'Nairobi',
  time: '7:45AM',
  SeatNo: ['B14', 'B13', 'A14', 'A13', 'B15', 'A15'],
  book: function ({
    seatNoIndex = [],
    fromIndex,
    to = [],
    time = [],
    cName = [],
  }) {
    // if ((this.From[fromIndex] = 0)) {
    //   this.time = '7:45AM';
    // } else if ((this.From[fromIndex] = 1)) {
    //   this.time = '6:45AM';    // }
    // console.log(
    //   `Dear ${arrname}, your booking request from ${this.From[fromIndex]} to ${this.To} for seat number:${this.SeatNo[seatNoIndex]} has been received please wait for the bus at the bordering station at ${this.time}. Thank you for travelling with ${this.name} `
    // );
  },
};
// const arrname = prompt('Enter your name');
// bookingDetails.book(...arrname);
bookingDetails.book({
  fromIndex: 0,
  seatNoIndex: 4,
});

//restaurant.foodDelivery && restaurant.foodDelivery('beef', 'ugali', 'beef');

const houseDtails = {
  housename: 'Alabama',
  Owner: 'Peter Kariuki',
  houselevel: ['Bedsitter', 'Single Room'],
  rent: [5000, 3500],
  housenumber: ['B1', 'A1', 'B2', 'A2', 'B3', 'A3'],
  bookNow: function () {
    // console.log(
    //   `Dear ${sname} your housing booking request at ${this.housename} hostel has been received.Please proceed to payment`
    // );
  },
  bookingDetails: function ({ houseLevelIndex, housenumberIndex, rentIndex }) {
    console.log(`House Level: ${this.houselevel[houseLevelIndex]}
    House Number: ${this.housenumber[housenumberIndex]}
    Rent: ${this.rent[rentIndex]} per month
    House Owner: ${this.Owner}`);
  },
};
//const sname = prompt('Please enter your full name as per your calling letter');
houseDtails.bookNow();
houseDtails.bookingDetails({
  houseLevelIndex: 0,
  housenumberIndex: 3,
  rentIndex: 1,
});

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


GOOD LUCK 😀
/*
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  team3: 'Manchester Uniited',
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
    team3: 4,
    x: 3.25,
    team2: 6.5,
    team1: 1.33,
  },
  printGoals: function (...scored) {
    const total = scored.length;
    // for (const players of scored)
    console.log(`Goals ${total} (${[...scored]})`);
    team1 > team2 && console.log(`${this.team1} is more likely to win`);
    team2 > team1 && console.log(`${this.team2} is more likely to win`);
  },
};

const [player1, player2] = game.players;
const [gk, ...feldPlayers] = player1;
//console.log(feldPlayers);
const allPlayers = [...player1, ...player2];
//console.log(allPlayers);
const playersFinal = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(playersFinal);
const { team1, x: draw, team2 } = game.odds;
//console.log(draw, team1, team2);
game.printGoals('Thiago', 'Coutinho', 'Perisic');

// For- of loop in arrays
//const firsteleven = [...player1];
for (const [i, players] of player2.entries())
  console.log(`${i + 1}   ${players}`);

// const dollars = [200, 250, 500, 800, 100, 150];
// const ages = [];
// const calcTip = tips => {
//   for (const tips of dollars) {
//     //const age = 2037 - years;
//     const taxed = tips <= 100 ? 0.05 * tips : 0.1 * tips;
//     const total = tips + taxed;
//     ages.push([tips, taxed, total]);
//   }
//   console.log(ages);
// };
// calcTip();
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const days = ['mon', 'Tue', 'Wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = openingHours[day]?.open ?? 'Closed';
//   console.log(`${day} we open at ${open}`);
// }
const properties = Object.keys(openingHours);
const values = Object.values(openingHours);
const entries = Object.entries(openingHours);
console.log(entries);
console.log(properties);
console.log(values);
console.log(`We are open for the first ${properties.length} days of the week`);
for (const [day, { open, close }] of entries) {
  let openStr = `On`;
  openStr += ` ${day} we open at ${open} and close at ${close}`;
  console.log(openStr);
}

const days = ['mon', 'Tue', 'Wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day} ${open}`);
}

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const scoredPlayers = game.scored;
// console.log(scoredPlayers);
for (const [i, players] of scoredPlayers.entries()) {
  console.log(`Goal  ${i + 1}: ${players}`);
}
const odds = Object.values(game.odds);
console.log(odds);
let sumav = 0;
for (const i of odds) {
  sumav += i;
}
const avarageOdds = sumav / odds.length;
console.log(avarageOdds);
for (const [team, odd] of Object.entries(game.odds)) {
  //console.log(team);
  const teamStr = team === 'x' ? ' draw' : `${game[team]}`;
  console.log(`On victory ${teamStr}: ${odd}`);
  //console.log(game[team]);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
//Set in js
const foodOrder = ['rice', 'beef', 'rice', 'pork', 'andazi', 'beef'];
const uniqueSet = new Set([...foodOrder]);
console.log(uniqueSet.size);
for (const order of uniqueSet) console.log(order);

//Maps
const rest = new Map();
rest
  .set('name', 'tintoler')
  .set('location', 'Ndori')
  .set(true, 'We are open')
  .set(false, 'We are closed')
  .set('open', 5)
  .set('closed', 22);
//console.log(rest);
const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
rest.set(document.querySelector('h1'), 'heading');

const question = new Map([
  ['question', 'What s the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Wrong'],
]);
console.log(question);
console.log(question.get('question'));
//const guess = Number(prompt('Your guess'));
for (const [key, answer] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} ${answer}`);
  console.log(key, answer);
}
// if (guess === 3) {
//   console.log(question.get(true));
// } else console.log(question.get(false));

//console.log(question.get(true));
//console.log(question.get(question.get('correct') === guess));

const myDetails = {
  Name: 'andrew',
  Country: ' Kenya',
  Email: ' andrew@gmail.com',
  activities: {
    morning: 'Playing football',
    evening: 'Attending meetings',
  },
};
const pro = Object.values(myDetails);
//console.log(pro);
for (const [values, keys] of Object.entries(myDetails)) {
  console.log(values, keys);
  // console.log(Object.entries(myDetails));
}
const myactivities = myDetails.activities;
console.log(myactivities);
for (const [day, morning] of Object.entries(myactivities))
  console.log(`Today in the  ${day} i will be ${morning} `);

const { morning, evening } = myactivities;
console.log(evening);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
for (const [key, values] of gameEvents) {
  const time = key <= 45 ? 'First Half' : 'Second Half';
  console.log(`${time}: ${key} ${values}`);
}

const popped = [...gameEvents.keys()].pop() / 10;
console.log(popped);

//Working with strings

const airline = 'TAP Air Portugal';
console.log(airline.slice(-2));
console.log(airline.slice(0));
const checkMiddleSeat = seat => {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got a middle seat😬');
  } else {
    console.log('You are lucky😎');
  }
};
checkMiddleSeat('11B', '15C');
checkMiddleSeat('15C');
checkMiddleSeat('11B', '15C');

const passengerName = 'AnDrEw';
const passengerLower = passengerName.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
const announcement =
  'All passengers to converge at the door 23. The boarding door 23';
const rannouncement = announcement.replace(/door/g, 'gate');
const lannouncement = announcement.replaceAll('door', 'gate');
console.log(rannouncement);
console.log(lannouncement);

const checkEmail = email => {
  const myEmail = 'yandrew@gmail.com';

  email = input.toLowerCase().trim();
  console.log(myEmail === email);
  console.log(email);
};
const input = '    YAndrew@gmail.Com';
checkEmail();

const checkName = (username, lastname, fullname) => {
  username = usersName.toLowerCase();
  lastname = lastsName.toLowerCase();
  const imlastname = lastsName[0].toUpperCase() + lastname.slice(1);
  const imusername = usersName[0].toUpperCase() + username.slice(1);
  fullname = `${imusername}  ${imlastname}`;
  //console.log(fullname);
};
// const usersName = prompt('Enter your name: ');
// const lastsName = prompt('Enter your lastname: ');
//console.log(usersName[0]);
//checkName(usersName, lastsName);

const checkCourse = course => {
  if (admNo.startsWith('PA106') && admNo.endsWith('21')) {
    console.log('Software Engineering Year one');
  } else if (admNo.startsWith('EE100') && admNo.endsWith('21')) {
    console.log('Mechanical Engineering Year one');
  }
};
//const admNo = prompt('Enter your admission');
//checkCourse();
const capitalizeName = name => {
  const names = name.split(' ');
  const nameUpperCase = [];
  for (const n of names) {
    // nameUpperCase.push(n[0].toUpperCase() + n.slice(1));
    const word = n.toLowerCase();
    nameUpperCase.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(nameUpperCase.join(' '));
};
capitalizeName('joseph mark otiEno');
capitalizeName('ann marion xhAvi');
capitalizeName('michael ferdiNand smith');

const muskCreditCard = acnumber => {
  const str = acnumber + '';
  // const first = str.slice(0, 2);
  const last = str.slice(-2);
  console.log(first);
  return last.padStart(str.length, '*');
};
// console.log(muskCreditCard(0734567));
// console.log(muskCreditCard(0734567));
// console.log(muskCreditCard(0734567));

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //console.log(text);
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    //const [first, second] = output.toLowerCase().trim();
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});

const texts = 'andrew_young felix_hendrix';
const myName = texts.split('_');
for (const l of myName) {
  console.log(l);
}
const [initial, final] = myName;
console.log(myName);

//console.log(final);
