var wall,wallLeftEdge,thickness;
var bullet,bulletRightEdge,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 150, 50, 40);
  bullet.shapeColor="white";
  wall=createSprite(1200,160,thickness,height/2)
  wall.shapeColor(80,80,80);

  thickness=random(22,83);
  speed=random(232,321);
  weight=random(30,52);
}

function draw() {
  background("black");
  bullet.velocityX=speed;
  
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage = 0.5 * weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    bullet.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    bullet.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else
  {
     return false
  }

}