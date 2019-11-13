

(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];
    document.addEventListener("click",function(){
        console.log("Is there an apple in the array?:");
        console.log(fruits.includes("apple"));
    })

})();
