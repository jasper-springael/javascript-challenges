

(function() {
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
    document.addEventListener("click",function(){
        let numbers=[];
        
        for(let i=0;i<10;i++) {
            numbers.push(randomNumber(1,100));
            
        }
        
        console.log(numbers);
        
        let arrayMin= Math.min(...numbers);
        let arrayMax= Math.max(...numbers);
        let arraySumCalc = number => number.reduce((a,b) => a+b,0);
        let arraySum = arraySumCalc(numbers);
        let arrayAvgCalc = numbers => numbers.reduce((a,b) => a+b,0)/numbers.length;
        let arrayAvg = arrayAvgCalc(numbers);

        document.getElementById("n-1").innerHTML = numbers[0];
        document.getElementById("n-2").innerHTML = numbers[1];
        document.getElementById("n-3").innerHTML = numbers[2];
        document.getElementById("n-4").innerHTML = numbers[3];
        document.getElementById("n-5").innerHTML = numbers[4];
        document.getElementById("n-6").innerHTML = numbers[5];
        document.getElementById("n-7").innerHTML = numbers[6];
        document.getElementById("n-8").innerHTML = numbers[7];
        document.getElementById("n-9").innerHTML = numbers[8];
        document.getElementById("n-10").innerHTML = numbers[9];
        
        document.getElementById("min").innerHTML = arrayMin;
        document.getElementById("max").innerHTML = arrayMax;
        document.getElementById("sum").innerHTML = arraySum;
        document.getElementById("average").innerHTML = arrayAvg;
    });

})();
