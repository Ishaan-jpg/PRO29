const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,slingshot,box;
var stand;
var polygon;
var sling;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);


    ground = new Ground(600,height,1200,20);

    stand = new Ground(600,250,200,10);
    stand1 = new Ground(870,150,200,10);

    polygon = new Ball(200,200,20)

    sling= new SlingShot(polygon.body,{x:200,y:200})

    box1= new Box(520,200,20,30);
    box2= new Box(540,200,20,30);
    box3= new Box(560,200,20,30);
    box4= new Box(580,200,20,30);
    box5= new Box(600,200,20,30);
    box6= new Box(620,200,20,30);
    box7= new Box(640,200,20,30);
    //Layer2
    box8= new Box(540,170,20,30);
    box9= new Box(560,170,20,30);
    box10= new Box(580,170,20,30);
    box11= new Box(600,170,20,30);
    box12= new Box(620,170,20,30);
    //Layer3
    box13= new Box(560,140,20,30);
    box14= new Box(580,140,20,30);
    box15= new Box(600,140,20,30);
    //Layer4
    box16= new Box(580,110,20,30); 
        //Stand1 layer1
    box17 = new Box(800,120,20,30);
    box18 = new Box(820,120,20,30);
    box19 = new Box(840,120,20,30);
    box20 = new Box(860,120,20,30);
    box21 = new Box(880,120,20,30);
    // Stand 1 layer2
    box22 = new Box(820,90,20,30)
    box23 = new Box(840,90,20,30)
    box24 = new Box(860,90,20,30)

    box25 = new Box(840,50,20,30)




}
function draw(){
    background("#3C2E2E")
    Engine.update(engine);
    ground.display();
    

    stand.display();
    stand1.display();

    polygon.display();

    fill ("#67D1EA");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //Layer2
    fill ("#FFBEC4")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    //Layer3
    fill ("#00E4D0")
    box13.display();
    box14.display();
    box15.display();
    //Layer4
    fill ("#807D78")
    box16.display();
    //Stand1 layer1
    fill ("#67D1EA");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    //stand1 layer2
    fill ("#00E4D0")
    box22.display();
    box23.display();
    box24.display();
    fill ("#FFBEC4")
    box25.display();

    sling.display();

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    sling.fly();
  }
