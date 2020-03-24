const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var barrier;
var castletop;
var pillar1 , pillar2,pillar3,pillar4;
var doorknob;
var base , base2;
var wall,wall2;
var flagpole , flag;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;
  barrier = new Barrier(600,630,120,300);
  castletop = new Castletop(600,430,228,100);
  pillar1 = new Pillar(515,630,53,300);
  pillar2 = new Pillar2(685,630,53,300);
  doorknob = new Doorknob(600,600,20,20);
  base = new Base(363,755,240,50);
  base2 = new Base2(837,755,240,50);
  pillar3 = new Pillar3(269,550,50,360);
  pillar4 = new Pillar4(934,550,50,360)
  wall = new Wall(391,578,180,300);
  wall2 = new Wall2(810,578,180,300);
  flagpole = new Flagpole(600,340,10,90);
  flag = new Flag(620,310,50,30);

}

function draw() {
  background(255); 
  Engine.update(engine); 
  barrier.display();
  castletop.display();
  pillar1.display();
  pillar2.display();
  doorknob.display();
  base.display();
  base2.display();
  pillar3.display();
  pillar4.display();
  wall.display();
  wall2.display();
  flagpole.display();
  flag.display();
  drawSprites();
}