// to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

function displayDate() {
    let date= new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    console.log(date);
    document.getElementById("target").innerHTML = date.toLocaleDateString("en-GB",options);

};
displayDate();