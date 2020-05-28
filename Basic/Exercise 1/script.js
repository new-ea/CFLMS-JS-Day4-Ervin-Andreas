const name = document.getElementById("name").value;
const lastname = document.getElementById("lastname").value;
const age = document.getElementById("age").value;
const name_out = document.querySelector(".name_out");
const lastname_out = document.querySelector(".lastname_out");
const age_out = document.querySelector(".age_out");

let charLength = 5;

if (name.length > charLength && lastname.length > charLength) {
    name_out.style.color = "green";
    name_out.innerHTML = name;   
} else {
    name_out.style.color = "red";
    name_out.innerHTML = name;
}