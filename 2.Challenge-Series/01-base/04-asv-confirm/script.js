/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let age= 0;
let gender=0;
let homeTown=0;
let confirmation=0;

let basicInfo = function() {
    age=prompt("Hi, what is your age?");
    gender=prompt("Are you male or female?");
    homeTown=prompt("Where do you live?");
return;
}

do {
    basicInfo();
    console.log(confirmation);
    confirmation= confirm(`Are these correct? Age: ${age}, gender: ${gender}, hometown: ${homeTown}`);
}  while (confirmation==false);











