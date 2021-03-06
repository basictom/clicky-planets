var output = document.getElementById("planet-holder");
var button = document.getElementById("show-planets");
// var planetBoxes = document.getElementsByClassName('planet-box');
var planets = [

  {
    name:"mercury",
    url:"http://i.dailymail.co.uk/i/pix/2013/02/15/article-2279059-17997B92000005DC-373_634x519.jpg"
  },
  {
    name:"venus",
    url:"https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
  },
  {
    name:"earth",
    url:"https://www.sron.nl/images/sliders/full_slider/slider03.jpg"
  },
  {
    name:"mars",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg"
  },
  {
    name:"jupiter",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
  },
  {
    name:"saturn",
    url:"http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn_false.jpg"
  },
  {
    name:"uranus",
    url:"http://nineplanets.org/images/uranus.jpg"
  },
  {
    name:"neptune",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg"
  }];


function addText(){
  output.innerHTML = "";
  for (var i=0; i<planets.length; i++){
    var newPlanet = "";
    newPlanet += `<div class="planet-box" id="planet-box-${i}">`
    newPlanet += `<div class="planet-holder hidden"> ${planets[i].name} </div>`;
    newPlanet += `<img class="planet-image" src="${planets[i].url}">`
    newPlanet += `</div>`
    output.innerHTML += newPlanet;
  }
}

function showMeTheMoney(event){
  if(event.target.className === 'planet-image'){
    console.log("event worked", event);
    console.log("unique ID", event.target.parentNode.id);
    console.log("previous sibling", event.target.previousSibling);
    event.target.previousSibling.classList.toggle('hidden');
  }
}

// button.addEventListener("click", addText);
button.addEventListener("mouseenter", addText);
document.body.addEventListener("click", showMeTheMoney);

// button.addEventListener("mouseleave"), addText);
