
(function() {
let body=document.querySelector("#target")[0];
let tbl=document.createElement("table");
let tblBody=document.createElement("tbody");
for(i=0;i<10;i++) {
    let row = document.createElement("tr");
    for(j=0;j<10;j++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode("");
    cell.appendChild(cellText);
    row.appendChild(cell);
    };
    tblBody.appendChild(row);
};
tbl.appendChild(tblBody);
body.appendChild(tbl);
tbl.setAttribute("border","1");

})();
