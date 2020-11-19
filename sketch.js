var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(232,321);
  weight=random(30,52);
  
  bullet=createSprite(50, 150, 50, 20);
  bullet.shapeColor=color(255);
  wall=createSprite(1200,160,thickness,height/2)
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);
  bullet.velocityX=speed;
  
 if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge = Lbullet.x +Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
    return false
};