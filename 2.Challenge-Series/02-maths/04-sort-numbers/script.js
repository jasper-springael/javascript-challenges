/*  -make an array with the inputs from the html file.
    -sort the array.
    -display the sorted array in the input box.
    -cheer 
*/

// to get the value of an input: document.getElementById("element-id").value

// 
(function() {

    let array= document.getElementById("numbers").value.split(", ");

    // array.sort(function(a,b) {
    // return a-b;
    // });
    array.sort((a,b) => a-b,);
    console.log(array);

    document.getElementById("run").addEventListener("click", function() {
        document.getElementById("numbers").value=array;

});

})();
