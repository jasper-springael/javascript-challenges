
(function() {
    function thirteenthFridays(years){
        // let m;
        let monthArray = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];
        for(let m=0;m<12;m++){
            let date = new Date(years,m,13);
            if(date.getDay()==5) {
                alert(monthArray[m]);
            }   
        }
    }

    document.getElementById("run").addEventListener("click",function(){
    let year = document.getElementById("year").value;
    thirteenthFridays(year);
    }); 
})();




