'use strict';
/*
//Recap on Primitives and Refference data types
//Primitives
let myName = 'Andrew ';
const oldName = myName;
myName = 'Young';
console.log(myName);
console.log(oldName);

//Refference data types
const jenifer = {
  firstName: 'jenifer',
  lastName: 'hendrix',
  Age: 28,
};
const jeniferMarried = jenifer;
jeniferMarried.lastName = 'Alisson';
console.log(jenifer);
console.log(jeniferMarried);

// Copying Object
const sarah = {
  firstName: 'sarah',
  lastName: 'crystal',
  Age: 28,
};
const sarahMarried = Object.assign({}, sarah);
sarahMarried.lastName = 'Castor';
console.log('Before Marriege:', sarah);
console.log('After Marriege:', sarahMarried);
//Deep cloning of Objects to be covered in the later sections
*/

const bookings = [];
const createBooking = function (
  flightNumber,
  numberOfPass = 1,
  price = 199 * numberOfPass
) {
  const booking = {
    flightNumber,
    numberOfPass,
    price,
  };
  bookings.push(booking);
  console.log(numberOfPass);
};
createBooking('A20', 3);
createBooking('A20', 2);

console.log(bookings);

const flight = 'A3429';
const jonas = {
  passportNumber: 39424241,
  fullName: 'Jonas Schmedttman',
};
const checkIn = function (flightNumber, passenger) {
  flightNumber = 'A4337';
  passenger.fullName = 'Mr. ' + passenger.fullName;
  if (passenger.passportNumber === '39424241') console.log('Checked In');
  else console.log('Wrong Passport');
};

checkIn(flight, jonas);
console.log(jonas);
console.log(flight);

const changePassport = function (person) {
  person.passportNumber = Math.trunc(Math.random() * 10000000);
  console.log(person.passportNumber);
};
changePassport(jonas);

checkIn(flight, jonas);
console.log(jonas.passportNumber);

const oneWord = function (str, fn) {
  return str.replace(/ /g, '');
};
const upperCase = function (str) {
  const [first, ...second] = str.split(' ');
  return [first.toUpperCase(), ...second].join(' ');
};
const transformStr = function (str, fn) {
  console.log(fn(str));
};
// transformStr('javaScript is the best challenge!', upperCase);
transformStr('javaScript        is the best challenge!', oneWord);

const checkEmail = function (email) {
  const newEmail = email.toLowerCase().replace(/ /g, '');
  //console.log(newEmail);
  return newEmail;
};
checkEmail('YANDREW99            3@gmail.com');
const signUp = function (email, fn) {
  if (email.includes('@' && '.com')) {
    console.log(fn(email));
  } else {
    console.log('Wrong Email');
  }
};
signUp('HENRIKYOUNG@GMAIL.COM', checkEmail);
const signIn = function (email, fn) {
  console.log(fn(email));
};
signIn('ANDREWYOUNG@GMAIL.COM', checkEmail);
// const resto = {
//   name: 'classico italiano',
//   menu: {
//     ugali: 100,
//     pizza: 500,
//     beans: 30,
//     chapati: 10,
//     rice: 50,
//   },
// };
// console.log(resto.menu);

const foodList = [
  'ugali',
  'meat',
  'rice',
  'mandazi',
  'chapati',
  'dengu',
  'rice',
  'meat',
  'ugali',
];

const foodSet = [...new Set(foodList)];

console.log(foodSet.includes('meat'));

const translator = function (food) {
  newFood = food.toLowerCase().replace(/ /g, '');
  return newFood;
};
const checkOrder = function (...food) {
  for (const i of food) {
    const newFood = i.toLowerCase();
    if (foodSet.includes(newFood)) {
      //console.log('Order received please wait for the delivery');
    } else {
      alert(
        `${newFood} oredred is currently unavailable.Please check out our menu`
      );
    }
  }
};
checkOrder('ugali', 'MEAT', 'rice');

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Andrew');

const restos = {
  name: 'classico italiano',
  menu: {
    ugali: 100,
    pizza: 500,
    beans: 30,
    chapati: 10,
    rice: 50,
  },
};

const mealOrdered = function (n, ...meal) {
  if (restos.menu.hasOwnProperty(meal)) {
    return console.log(`The cost of ${meal} is ${restos.menu[meal] * n}`);
  } else {
    return console.log(`Not found`);
  }
};
mealOrdered(4, 'pizza', 'rice');

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  booking: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNumber}`
    );
    this.booking.push({ flight: `${this.iatacode}${flightNumber}`, name });
    console.log(this.booking);
  },
};
//lufthansa.book('Andrew', 1254);
lufthansa.book(1355, 'Jacob');

const EuroWings = {
  airline: 'eurowings',
  iatacode: 'EW',
  booking: [],
};
const book = lufthansa.book;
book.call(EuroWings, 'jane', 1456);
//book('jane', 1456);
const bookEW = book.bind(EuroWings);
const bookLH = book.bind(lufthansa);

bookEW(45, 'Cooper');
bookLH(48, 'Jonas');

const bookLH23 = book.bind(EuroWings, 23);
bookLH23('simoh');

lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.15);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.15);
console.log(addVAT2(100));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResult.call({ answers: [5, 2, 3] });

(function () {
  console.log('This is a one time function');
})();

const studentYear = function () {
  let currentYear = 1;
  return function () {
    console.dir(currentYear);
    currentYear++;
    console.log(currentYear);
  };
};
const checkYear = studentYear();
checkYear();
/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
