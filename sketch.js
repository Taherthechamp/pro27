
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(200,300,20)
bob2 = new Bob(240,300,20)
bob3 = new Bob(280,300,20)
bob4 = new Bob(320,300,20)
bob5 = new Bob(360,300,20)
roof = new Roof(280,100,300,20)
rope1 = new Rope(bob3.body,{x:280,y:100})
rope2 = new Rope(bob2.body,{x:240,y:100})
rope3 = new Rope(bob1.body,{x:200,y:100})
rope4 = new Rope(bob4.body,{x:320,y:100})
rope5 = new Rope(bob5.body,{x:360,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
  if (keyCode===LEFT_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100})
  }
}


