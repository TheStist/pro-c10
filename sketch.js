var ship,ship1;
var sea,sea1;

function preload(){
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea1 = loadAnimation("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200);
  sea.addAnimation("running",sea1);
  sea.scale = 0.4;
  sea.velocityX = -2;
  ship = createSprite(150,200,20,50);
  ship.addAnimation("running",ship1);
  createEdgeSprites();
  ship.scale = 0.4;
}
function draw() {
  //background("blue");
  sea.velocityX = -2;
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  drawSprites();
  
}