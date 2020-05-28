const name = document.getElementById("name").value;
const lastname = document.getElementById("lastname").value;
const age = document.getElementById("age").value;
const it = document.querySelector(".it").value;
const hos = document.querySelector(".hos").value;
const bro = document.querySelector(".bro").value;
const sell = document.querySelector(".sell").value;
const prof = document.querySelector(".profession").value;


const name_out = document.querySelector(".name_out");
const lastname_out = document.querySelector(".lastname_out");
const age_out = document.querySelector(".age_out");
const prof_out = document.querySelector(".prof_out");

let charLength = 5;

if (name.length > charLength || lastname.length > charLength) {
    name_out.style.color = "green";
    name_out.innerHTML = name;   
} else {
    name_out.style.color = "red";
    name_out.innerHTML = name;
}


switch (prof) {
    case "IT":
    prof_out.style.color = "purple";
    prof_out.innerHTML = it;
    break;
    case "Hospitality":
    prof_out.style.color = "yellow"
    prof_out.innerHTML = hos;
    break;
    case "Broker":
    prof_out.style.color = "pink"
    prof_out.innerHTML = bro;
    break;
    case "Seller":
    prof_out.style.color = "blue"
    prof_out.innerHTML = sell;
    break;
    default:
    prof_out.innerHTML = "UPPSS - An error has occured";  
}
