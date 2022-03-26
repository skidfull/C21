var ball
var Twall,Rwall,Dwall,Lwall
var btn1, btn2

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
//creating a fuction setup
function setup() {
  createCanvas(400,400);//defining canvas area by 400 by 400
engine = Engine.create();
world = engine.world;
 ball = new Ball()
 Twall = new Wall(200,10,400,20)
 Rwall = new Wall(390,200,20,400)
 Dwall = new Wall(200,390,400,20)
 Lwall = new Wall(10,200,20,400)

 btn1 = createImg('right.png'); 
 btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

 btn2 = createImg('up.png');
  btn2.position(20,30); 
 btn2.size(50,50);
  btn2.mouseClicked(vForce);

 

 

}

//creating function draw
function draw() 
{
  background(30);//setting background
  Engine.update(engine)
ball.show()
  Twall.show()
  Rwall.show()
  Dwall.show()
  Lwall.show()

}

function hForce() { Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); }
function vForce() { Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); }


