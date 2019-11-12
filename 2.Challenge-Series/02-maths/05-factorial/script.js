/* make factorial if statement: can't be negative, multiply each element with element-1*/

document.getElementById("run").addEventListener("click", function(){
    let n= document.getElementById("number").value;
    function factorial(n) {
        if (n<0)
            return "false";
        else if (n==0 || n==1)
            return 1;
        else {
            return n*factorial(n-1);
        }
    }
    document.getElementById("number").value=factorial(n);
});
