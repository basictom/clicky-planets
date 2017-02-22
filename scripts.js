console.log("hello");
var output = document.getElementById("planet-holder");
var button = document.getElementById("show-planets");

button.addEventListener("click", addText);

function addText(){
  output.innerHTML = "This is a string";
}
