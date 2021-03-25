//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var doggie 

function preload()
{
	dog = loadImage("images/dogImg.png");
  doggie = loadImage("images/dogImg1.png");
}

function setup() {
	database = firebase.database();
  createCanvas(500, 500);
  happyDog = createSprite(250,250)
  happyDog.addImage("dog",dog)
  happyDog.scale=0.15
  foodStock= database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  happyDog.addImage("dog1",doggie);
}
textSize(22);
fill("white");
text("Note: Press UP_ARROW key to feed dog milk!", 10, 22);
text("Food amount: "+foodS, 175,175)
  drawSprites();
  //add styles here
  
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1
}

  database.ref('/').update({
  foodS:x
})
}

