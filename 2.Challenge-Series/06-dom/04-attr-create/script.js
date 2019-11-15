

(function() {

let picVal = document.querySelector("#source");
let attrib = picVal.getAttribute("data-image");
console.log(attrib);
let pictureEl = document.createElement("img");
pictureEl.src = attrib;
document.querySelector("#target").appendChild(pictureEl);

})();

