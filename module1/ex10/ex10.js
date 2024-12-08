let numDice = Number(prompt("How many dice do you want to roll?"));
let targetSum = Number(prompt("What sum are you looking for?"));

let totalRolls = 10000;

let hits = 0;

for (let i = 0; i < totalRolls; i++) {
    let sum = 0;

    for (let j = 0; j < numDice; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === targetSum) {
        hits++;
    }
}

let probability = (hits / totalRolls) * 100;

document.getElementById("target").textContent =
    "Probability to get sum " + targetSum + " with " + numDice +
    " dice is " + probability.toFixed(2) + "%";