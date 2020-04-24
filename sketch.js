const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, tanker;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     tanker = new Tanker(100,380,40,40,PI/7);
     ground = new Ground(600,height,1200,20);
}

function draw(){
    background(221,233,255);
    Engine.update(engine);

    tanker.display();
    ground.display();
}

function keyReleased() {
    // Call the shoot method for the cannon.
}