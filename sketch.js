
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject,roof1;
var rope1,rope2,rope3, rope4,rope5;
var world;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	roofObject=new roof();
	bob1=new bob(125,300);
	bob2=new bob(165,300);
	bob3=new bob(205,300);
	bob4=new bob(245,300);
	bob5=new bob(285,300);

	rope1=new rope(bob1.body,{x:120,y:100});
	rope2=new rope(bob2.body,{x:160,y:100});
	rope3=new rope(bob3.body,{x:200,y:100});
	rope4=new rope(bob4.body,{x:240,y:100});
	rope5=new rope(bob5.body,{x:280,y:100});  
}


function draw() {
 
  background(0);
  roofObject.display();

 bob1.display();
 bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}







