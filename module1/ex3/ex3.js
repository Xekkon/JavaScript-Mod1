'use strict';
const num1Str = prompt("Enter the first number")
const num2Str = prompt("Enter another number")
const num3Str = prompt("Enter the last number")
const num1 = Number(num1Str);
const num2 = Number(num2Str);
const num3 = Number(num3Str);
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average =  sum / 3;
document.querySelector('#target').innerHTML = 'Here is the sum ' + sum + ', product ' + product + ', and the average ' + average + ' for the numbers you have provided';

/* Just realised I could've just done it like this but I spent too much time on the code above so I'll submit that one.
Smarter/more readable Code below:

'use strict';
const num1 = Number(prompt("Enter the first number"))
const num2 = Number(prompt("Enter another number"))
const num3 = Number(prompt("Enter the last number"))
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average =  sum / 3;
document.querySelector('#target').innerHTML = 'Here is the sum ' + sum + ', product ' + product + ', and the average ' + average + ' for the numbers you have provided';
 */