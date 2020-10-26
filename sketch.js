const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const Constraint = Matter.Constraint

var engine, world

var polygon;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23
var ground1,ground2,ground3
var contraint
var score = 0;


function setup() {
  engine = Engine.create();
  world = engine.world;

  var options = {

     restitution:1.5,
    

  }

  createCanvas(400,400);

  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  box1 = new Box(100,300);
  box2 = new Box(120,300);
  box3 = new Box(140,300);
  box4 = new Box(160,300);
  box5 = new Box(180,300);
  
  box6 = new Box(110,270);
  box7 = new Box(130,270);
  box8 = new Box(150,270);
  box9 = new Box(170,270);

  box10= new Box(120,240);
  box11 = new Box(140,240);
  box12 = new Box(160,240);

  box13 = new Box(130,210);
  box14 = new Box(150,210);
  //------------------------------------------------------//

  box15 = new Box(260,210);
  box16 = new Box(280,210);
  box17 = new Box(300,210);
  box18 = new Box(320,210);

  box19= new Box(270,180);
  box20= new Box(290,180);
  box21= new Box(310,180);

  box22 = new Box(280,150);
  box23= new Box(300,150);
//------------------------------------------------------//

ground1 = new Ground(140,350,100,20)
ground2= new Ground(290,240,100,20)
ground3 = new Ground(200,450,400,10)
//------------------------------//

constraint = new SlingShot(polygon,{x:50,y:200});

  

}

function draw() {
  Engine.update(engine)
  background(0);  

  constraint.display();
  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20)
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()

  

  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  
  ground1.display();
  ground2.display();

  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()

  

  box15.score()
  box16.score()
  box17.score()
  box18.score()
  box19.score()
  box20.score()
  box21.score()
  box22.score()
  box23.score()

  drawSprites();
  textSize(15)
  text("Score: "+score,300,50);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  constraint.fly();
 
}

function keyPressed(){
if(keyCode ===32){
  Matter.Body.setPosition(polygon,{x:50,y:200})
  constraint.attach(polygon);
  
console.log("Its a working");
}


}