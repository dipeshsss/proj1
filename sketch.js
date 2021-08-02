var square,pg;
pg='yellow';
function setup() {

  createCanvas(400,400);
square=createSprite(200,200,100,100);

}

function draw() 
{
  background(pg);
  square.shapeColor='black';

if (keyIsDown(DOWN_ARROW) ){
  pg='red';
}
drawSprites();
}



