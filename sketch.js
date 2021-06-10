var mr,fr;
var r1,r2;

function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 90, 30);
  fr=createSprite(200,200,50,80);
  mr.shapeColor="red"
  fr.shapeColor="green"

  r1=createSprite(600, 100, 90, 30);
  r2=createSprite(400,300,50,80);
  r1.shapeColor="blue"
  r2.shapeColor="yellow"
}

function draw() {
  background(0);  
  r1.x=World.mouseX;
  r1.y=World.mouseY;
  if(collision(r1,r2)){
   r1.shapeColor="purple"
  r2.shapeColor="purple"
  }
  else{
  r1.shapeColor="blue"
  r2.shapeColor="yellow"
  }

  drawSprites();
}

