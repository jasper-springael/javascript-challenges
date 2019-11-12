let n=1
function fizzbuzz () {

    for(; n>=1 && n<=100; n++) {
        if(n%3==0)
            console.log("fizz");
        if(n%5==0)
            console.log("buzz");
        if(n%3==0 && n%5==0)
            console.log("fizzbuzz");
        else {
            console.log(n);
        }
    }
};
fizzbuzz();


