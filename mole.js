let currMoleTile;
let currPlantTile;

window.onload = function(){
  setGame();
}

function setGame(){
// set up the grid for the game board in html

for(let i=0; i<9; i++){

  let tile = document.createElement("div");
  tile.id = i.toString();
  document.getElementById("board").appendChild(tile);
}

setInterval(setMole, 2000);
  
}


function setMole(){

  if(currMoleTile != null){
    currMoleTile.removeChild(currMoleTile.firstChild);
  }

  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function getRandomTile(){
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setPlant(){
if(currPlantTile != null){
    currPlantTile.removeChild(currPlantTile.firstChild);
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";
}