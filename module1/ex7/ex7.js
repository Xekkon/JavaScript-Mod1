'use strict';

const numRolls = prompt("How many times would you like to roll the dice?");
const rolls = Number(numRolls);

if (rolls > 0) {
    let sum = 0;

    for (let i = 0; i < rolls; i++) {
        const rollResult = Math.floor(Math.random() * 6) + 1;

        sum += rollResult;
    }

    document.querySelector('#target').innerHTML = "The sum of the dice rolls is: " + sum;
} else {
    document.querySelector('#target').innerHTML = "Please enter a valid number greater than 0.";
}