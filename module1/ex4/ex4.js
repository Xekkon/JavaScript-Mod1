'use strict';

const studentName = prompt("Enter your name:");
const randomValue = Math.floor(Math.random() * 4) + 1;

//Finding the house based on the random number we get
let house;
if (randomValue === 1) {
    house = "Gryffindor";
} else if (randomValue === 2) {
    house = "Slytherin";
} else if (randomValue === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.querySelector('#target').innerHTML = `${studentName}, you are ${house}.`;