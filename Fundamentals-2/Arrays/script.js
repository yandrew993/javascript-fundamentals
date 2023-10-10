'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const printDisplay = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements">
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const printDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance;
};

const displaySumIn = function (movement) {
  // const USD = 1.1;
  const income = movement
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = income;
};

const displaySumOut = function (movement) {
  const out = movement
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;
};

const displayInterest = function (acc) {
  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate)
    .reduce((accu, cur) => accu + cur, 0);
  labelSumInterest.textContent = intrest;
};
const updateUI = function () {
  printDisplayBalance(currentAc);
  printDisplay(currentAc.movements);
  displaySumIn(currentAc.movements);
  displaySumOut(currentAc.movements);
  displayInterest(currentAc);
};

// Computing Usernames

const createUsernames = function (accts) {
  accts.forEach(function (acct) {
    acct.username = acct.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);
let currentAc;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAc = accounts.find(acc => acc.username === inputLoginUsername.value);
  //console.log(currentAc);
  if (currentAc?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAc.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAc.balance >= amount &&
    receiverAcc?.username !== currentAc.username
  ) {
    currentAc.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAc);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAc.movements.some(mov => mov >= 0.1 * amount)) {
    currentAc.movements.push(amount);
    updateUI();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAc.username &&
    Number(inputClosePin.value) === currentAc.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAc.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorter = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  printDisplay(currentAc.movements, !sorter);
  sorter = !sorter;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.forEach(function (movement, i) {
  if (movement > 0) {
    //console.log(`You deposited ${movement} at the ${i + 1} place`);
  } else {
    // console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

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

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  // dogsJulia.splice(0, 1);
  //  dogsJulia.splice(-2);
  const dogsJuliaCorrected = dogsJulia.slice(1, 3);
  // console.log(dogsJuliaCorrected);
  const dogsAll = dogsKate.concat(dogsJuliaCorrected);
  dogsAll.forEach((dog, i) => {
    dog < 3 &&
      console.log(
        `Dog number ${i + 1} is still a puppy and is ${dog} years old`
      );
    dog > 3 &&
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
  });
};
checkDogs(Julia, Kate);

const checkAcount = movements.map(currency => {
  return currency * 1.1;
});

//console.log(checkAcount);

// Filter
const deposits = movements.filter(mov => mov < 0);
console.log(deposits);

//Reduce
const balance = movements.reduce((accum, cur) => accum + cur, 0);
console.log(balance);

const maximum = movements.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, movements[0]);
console.log(maximum);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const testData = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  console.log(humanAges);
  const AboveAges = humanAges.filter(age => age >= 18);
  console.log(AboveAges);
  const avarage = humanAges.reduce(
    (acc, curr) => acc + curr,
    0 / humanAges.length
  );
  console.log(avarage);
  console.log(humanAges.length);
};
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const aboveAge = testData.filter(age => age >= 18);
// console.log(aboveAge);

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allaccounts = accountMovements.flat();
const totalSum = allaccounts.reduce((acc, cur) => acc + cur, 0);
console.log(totalSum);

//Flat Method
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(overalBalance);

// flatMap

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalBalance2);

console.log(movements);
const sorted = movements.sort((a, b) => b - a);
console.log(sorted);
