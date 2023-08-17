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
};
// Rest pattern in aarays
const [pizza, ...others] = restaurant.mainMenu;
console.log(pizza, others);
let sum = 0;
const add = (...numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
};
add(3, 5, 7, 7, 4, 3, 5, 6, 87, 54, 68);
console.log(sum);

// Real world scenario
const newIng = [
  // prompt("Let's make chapati ing1"),
  // prompt("Let's make chapati ing2"),
  // prompt("Let's make chapati ing3"),
];
// console.log(newIng);
restaurant.ingredients(...newIng);

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
const arr = restaurant.mainMenu;
//console.log(arr);
const arr1 = [...arr];
// console.log(arr1);
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
    console.log(
      `Dear ${arrname}, your booking request from ${this.From[fromIndex]} to ${this.To} for seat number:${this.SeatNo[seatNoIndex]} has been received please wait for the bus at the bordering station at ${this.time}. Thank you for travelling with ${this.name} `
    );
  },
};

// const arrname = prompt('Enter your name');
// bookingDetails.book(...arrname);
bookingDetails.book({
  fromIndex: 0,
  seatNoIndex: 4,
});
