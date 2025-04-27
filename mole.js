let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let moleInterval = 1000; // 1 second
let plantInterval = 2000; // 0.7 seconds

window.onload = function(){
  setGame();
}

function intervalDecrease(){
  if(moleInterval > 600){
    if(score>50){
      moleInterval-=500;
      console.log("Mole Interval: "+moleInterval.toString());
    }
    }
  if(plantInterval > 600){
    if(score>50){
      plantInterval-=500;
      console.log("Plant Interval: "+plantInterval.toString());
    }
  }
}

function setGame(){
// set up the grid for the game board in html

for(let i=0; i<9; i++){

  let tile = document.createElement("div");
  tile.id = i.toString();
  tile.addEventListener("click", selectTile);
  document.getElementById("board").appendChild(tile);
}

setInterval(setMole, moleInterval);
setInterval(setPlant, plantInterval);

  
}


function setMole(){
  if(gameOver){
    return;
  }
  if(currMoleTile != null){
    currMoleTile.removeChild(currMoleTile.firstChild);
  }

  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";

  let num = getRandomTile();
  if(currPlantTile && num == currPlantTile.id){
    num = getRandomTile();
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function getRandomTile(){
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setPlant(){
  if(gameOver){
    return;
  }
if(currPlantTile != null){
    currPlantTile.removeChild(currPlantTile.firstChild);
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png";
  let num = getRandomTile();
  if(currMoleTile && num == currMoleTile.id){
    num = getRandomTile();
  }
  // make sure the plant and mole are not in the same tile
// if they are, get a new random tile for the plant
  // if they are not, set the plant in the tile
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile(){
  intervalDecrease();
  
  if(this === currMoleTile){
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }
  if(this === currPlantTile){
    score -= 10;
    document.getElementById("score").innerText = "Game Over Hal "+score.toString();
    gameOver = true;
    if(gameOver){
      alert("Game Over Hal Your Score: "+score.toString());
      return;
    }
  }
}