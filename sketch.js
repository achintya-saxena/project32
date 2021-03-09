const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes=[];
var ground;


function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
    world = engine.world;
mouseDragged();
ground=new Ground(800,700,1600,65)



}

function draw() {
  background("black");  
  Engine.update(engine);

  for(var i=0; i<boxes.length;i++) {
    boxes[i].display();
  }
ground.display();





  drawSprites();
textSize(30);
fill("white");
textStyle("bold")
  text("Drag the mouse on any part of the black screen and get rectangles of different sizes and colours!!",50,30)

}
function mouseDragged() {
  boxes.push(new Box(mouseX,mouseY,random(10,40),(random(10,40))));
  
  }
