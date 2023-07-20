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


const retirementTime = function(age){
    return 60 - age;
}

const calcAge = function(birthYear){
    const actualAge = 2037 - birthYear;
    const remainingTime = retirementTime(actualAge);
    const information = `You have ${remainingTime}years till retirement`;
    if(remainingTime>0){
        return information;
    }else{
        console.log(`You retired`);
        return -1;
    }
    

}
//const age1 = calcAge(1977);
console.log(calcAge(1977));

const housePay = function(salary){
    return 0.03*salary;
}
const calcTax = function(salary){
    const housinglavy = housePay(salary);
    const tax = 0.05*salary;
    const totalPay = tax + housinglavy;
    const information = `You have successfully paid Kshs${totalPay} to the government. Kshs${tax} for paye and Kshs${housinglavy} for house levy`;
    return information;
}
const pay = calcTax(10200);
console.log(calcTax(10200));

*/
//Implementation of Arrow functions
const calcScore = (a,b,c)=>(a+b+c)/3;
const koalasScore = calcScore(2,3,34);
const dolphineScore = calcScore(34,17,38);
const checkWinner = function(avgKoalas, avgdolphine){
    if(avgKoalas>=2*avgdolphine){
        return console.log(`Koalas won the title with ${avgKoalas} vs ${avgdolphine}`);
    }else if(avgdolphine>=2*avgKoalas){
        return console.log(`Dolphine won the title with ${avgdolphine} vs ${avgKoalas}`);
    }else{
        return console.log(`No team won..`);
    }
}
//const score = checkWinner(koalasScore, dolphineScore);
checkWinner(34,69);


