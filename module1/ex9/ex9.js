'use strict';
const number = prompt("Enter a number to check if it's a prime number:");

const num = Number(number);

if (num <= 1) {
    document.querySelector('#target').innerHTML = num + " is not a prime number.";
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.querySelector('#target').innerHTML = num + " is a prime number.";
    } else {
        document.querySelector('#target').innerHTML = num + " is not a prime number.";
    }
}