"use strict"
// const areaCircle = function(radius){
//     const pi = 3.142;
//     let area = pi*radius**2;
//     return area;
// }

// const inputValue = calcArea(4);
// console.log(inputValue);


// function calcArea(radius){
//         const pi = 3.142;
//         let area = pi*radius**2;
//         return area;
//     }


const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const andrew = new Person("Andrew", 1998);
const james = new Person("James", 1996);
// console.log(andrew,james);


Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

andrew.calcAge();