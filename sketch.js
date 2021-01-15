var dog
var happyDog
var database
var foodS
var foodStock


function preload()
{

  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
}


function draw() {  
  if (keywentDown (UP_ARROW)) {
    writeStock(foodS);
    dog.addImage (dogHappy);
    
  }
  drawSprites();

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



