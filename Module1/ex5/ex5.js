'use strict';

const year = Number(prompt("Please enter any year:"));

let isLeapYear;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        isLeapYear = year % 400 === 0;
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}

const resultText = isLeapYear
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
document.querySelector('#target').innerHTML = resultText;