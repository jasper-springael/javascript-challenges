
document.getElementById("run").addEventListener("click", function(){
    let randomColor = "#"+((1<<24)*Math.random()|0).toString(16); /* copy pasted from the internet as one of the shortest solutions, << means "een bit naar links opschuiven*/
    alert(`Your random color is: ${randomColor}`);
    document.body.style.background = randomColor;
})


