

function alertBirthday() {

    document.getElementById("run").addEventListener("click",function(){
        
        let birthDay = (document.getElementById("dob-day").value)*1; /*outputs were a string*/
        console.log(birthDay);
        let birthMonth = (document.getElementById("dob-month").value)*1;
        console.log(birthMonth);
        let birthYear = (document.getElementById("dob-year").value)*1;
        console.log(birthYear);
        let current = new Date();
        let currentDay = current.getDay();
        console.log(currentDay);
        let currentMonth = current.getMonth()+1;
        console.log(currentMonth);
        let currentYear = current.getFullYear();
        console.log(currentYear);
        let age1 = currentYear-birthYear-1;
        console.log(age1);
        let age2 = currentYear-birthYear;
        console.log(age2);
        
        if (currentMonth*100+currentDay < birthMonth*100+birthDay)
            alert(`This is your age: ${age1}`);
        else {
            alert(`This is your age: ${age2}`);
        }
    });
};
alertBirthday();

