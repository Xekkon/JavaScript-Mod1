'use strict';

const startYear = Number(prompt("Enter the start year:"));
const endYear = Number(prompt("Enter the end year:"));

if (startYear <= endYear && startYear >= 0 && endYear >= 0) {
    let leapYearsHTML = '';

    for (let year = startYear; year <= endYear; year++) {
        if (year % 4 === 0) {
            if (year % 100 !== 0) {
                leapYearsHTML += `<li>${year}</li>`;
            } else if (year % 400 === 0) {
                leapYearsHTML += `<li>${year}</li>`;
            }
        }
    }

    if (leapYearsHTML === '') {
        document.querySelector('#target').innerHTML = "<li>No leap years found in the given range.</li>";
    } else {
        document.querySelector('#target').innerHTML = leapYearsHTML;
    }
} else {
    document.querySelector('#target').innerHTML = "<li>Invalid input. Refresh and try again.</li>";
}