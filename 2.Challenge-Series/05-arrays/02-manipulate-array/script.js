
(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.addEventListener("click",function(){
        fruits.shift();
        fruits.pop();
        fruits.unshift('Banana');
        fruits.push('kiwi');
        console.log(fruits);
        
    });
})();
