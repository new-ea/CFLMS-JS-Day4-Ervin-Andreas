const circle = document.querySelector(".circle");
const output = document.querySelector(".output");

circle.addEventListener("mouseover", function(){
    output.style.backgroundColor = "green";
    output.innerHTML = "<h1>you are in the circle</h1>"
  });

circle.addEventListener("mouseout", function(){
    output.style.backgroundColor = "red";
    output.innerHTML = "<h1>you are outside of the circle</h1>"
  });

circle.addEventListener("click", function(){
    circle.style.backgroundColor = "grey";
  });

circle.addEventListener("dblclick", function(){
    circle.style.backgroundColor = "blue";
  });