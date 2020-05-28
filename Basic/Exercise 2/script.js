const name = document.getElementById("name").value;
const lastname = document.getElementById("lastname").value;
const age = document.getElementById("age").value;
const it = document.getElementsByClassName("it")[0];
const hos = document.getElementsByClassName("hos")[1];
const bro = document.getElementsByClassName("bro")[2];


const name_out = document.querySelector(".name_out");
const lastname_out = document.querySelector(".lastname_out");
const age_out = document.querySelector(".age_out");
const prof_out = document.querySelector(".prof_out");

//prof_out.innerHTML="test";
//console.log("it")


let charLength = 5;

if (name.length > charLength || lastname.length > charLength) {
    name_out.style.color = "green";
    name_out.innerHTML = name;   
} else {
    name_out.style.color = "red";
    name_out.innerHTML = name;
}

console.log(it)
console.log(hos)
console.log(bro)

if (it) {
    prof_out.style.color = "purple";
    prof_out.innerHTML = it.value;//code
    
}
else if (hos) {
    prof.out.style.color = "yellow"
    prof_out.innerHTML = hos.value;
    //code
}
else{
    prof.out.style.color = "pink"
    prof_out.innerHTML = bro.value;
}