    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

function message() {
    let dayMessage = "Hello!";
    let eveningMessage = `Good evening!`;
    let todaysDate = new Date();
    let hour = todaysDate.getHours();
    if (hour<18)
        document.getElementById("target").innerHTML = dayMessage;
    else document.getElementById("target").innerHTML = eveningMessage;
}
message();

