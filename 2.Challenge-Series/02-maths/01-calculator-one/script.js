/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    // to get the value of an input: document.getElementById("element-id").value
    
    let x;
    let y;


    document.getElementById("addition").addEventListener("click", function(x,y) {
        x = 1 * document.getElementById("op-one").value;
        y = 1 * document.getElementById("op-two").value;
        let resultAdd = x+y;
        console.log(resultAdd);   
    });

    document.getElementById("substraction").addEventListener("click", function() {
        x = 1 * document.getElementById("op-one").value;
        y = 1 * document.getElementById("op-two").value;
        let resultSub = x-y;
        console.log(resultSub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        x = 1 * document.getElementById("op-one").value;
        y = 1 * document.getElementById("op-two").value;
        let resultMult= x*y;
        console.log(resultMult);
    });

    document.getElementById("division").addEventListener("click", function() {
        x = 1 * document.getElementById("op-one").value;
        y = 1 * document.getElementById("op-two").value;
        let resultDiv= x/y;
        console.log(resultDiv);
    });
})();
