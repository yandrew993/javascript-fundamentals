"use strict"
/*
//Starting with functions
function logger(){
    console.log("Andrew Young")
}
logger(); //calling/running/invoking function


function fruitProcessor(apples, oranges){
    const juice = `juice with ${apples}apples and ${oranges}oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const cutPieces = function(fruit){
    return fruit*4;
}
const fruitProcessor = function(apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces}apples and ${orangePieces}oranges`;
    return juice;
}
const age1 = fruitProcessor(5,0);
console.log(fruitProcessor(5,0));
*/
const retirementTime = function(age){
    return 60 - age;
}

const calcAge = function(birthYear){
    const actualAge = 2037 - birthYear;
    const remainingTime = retirementTime(actualAge);
    const information = `You have ${remainingTime}years till retirement`;
    return information;

}
const age1 = calcAge(1998);
console.log(calcAge(1998));
