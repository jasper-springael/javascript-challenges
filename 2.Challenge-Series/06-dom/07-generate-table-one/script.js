


(function() {
document.querySelector("#target")[0];
let tbl = document.createElement("table");
let tblBod = document.createElement("tbody");
for (let i=0;i<10;i++) {
    let row= document.createElement("tr");
    console.log(i.length);
    for(let j=0;j<1;j++) {
        let cell=document.createElement("td");
        let cellText=document.createTextNode("blabla");
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblBod.appendChild(row);
}
tbl.appendChild(tblBod);
target.appendChild(tbl);
tbl.setAttribute("border","1");

})();
