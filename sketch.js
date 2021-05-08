
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1= new mango(random(400,800),random(0,400), radius(15,15))
	mango2= new mango(random(400,800),random(0,400), radius(15,15))
	mango3= new mango(random(400,800),random(0,400), radius(15,15))
	mango4= new mango(random(400,800),random(0,400), radius(15,15))
	mango5= new mango(random(400,800),random(0,400), radius(15,15))
	mango6= new mango(random(400,800),random(0,400), radius(15,15))
	mango7= new mango(random(400,800),random(0,400), radius(15,15))
	mango8= new mango(random(400,800),random(0,400), radius(15,15))
	mango9= new mango(random(400,800),random(0,400), radius(15,15))
	mango10= new mango(random(400,800),random(0,400), radius(15,15))

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



