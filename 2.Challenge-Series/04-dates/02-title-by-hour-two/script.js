    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

function message() {
    let dayMessage = "Hello!";
    let eveningMessage = `Good evening!`;
    let todaysDate = new Date();
    let currentHoursMinutes = todaysDate.getHours() * 100 + todaysDate.getMinutes(); /* if you wanna check if good evening works, dont forget putting in ex. 20*100 instead of 20*/

    if (currentHoursMinutes<1730)
        document.getElementById("target").innerHTML = dayMessage;
    else
        document.getElementById("target").innerHTML = eveningMessage;
}
message();
