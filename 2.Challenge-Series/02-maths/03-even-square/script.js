/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.






let x=0;
let array=[];

document.getElementById("run").addEventListener("click", function() {
    for(x=1;x**2<21;x++) {
        let result = 0;
        result = x**2;
        array.push(result);
    }
});
console.log(array);
