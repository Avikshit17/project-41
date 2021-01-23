const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var d
var ray=[]

var man
var thunder1Image,thunder2Image,thunder3Image,thunder4Image
var thunder,walkingImage
var myWorld,myEngine
function preload(){
 thunder1Image=loadImage("1.png")
 thunder2Image=loadImage("2.png")
 thunder3Image=loadImage("3.png")
 thunder4Image=loadImage("4.png")  
 walkingImage=loadImage("walking_1.png") 
}

function setup(){
createCanvas(400,400)   
 myEngine=Engine.create()
 myWorld=myEngine.world;
man=new Man()

}

function draw(){
background("black")
Engine.update(myEngine)
man.display()
for(var i=1;i<=100;i=i+1)
{
  d=new Droplet(random(0,400),0)
  ray.push(d)
}
for(var i=0;i<ray.length;i=i+1)
{
    ray[i].display()
} 
spawnThunders()
drawSprites()    
}   
function spawnThunders()
{
    if(frameCount % 40==0)
    {
 thunder=createSprite(100,0,50,50)
 thunder.x=random(10,400)
 var c=Math.round(random(1,4))
 switch(c)
 {
     case 1:thunder.addImage(thunder1Image)
     break;
     case 2:thunder.addImage(thunder2Image)
     break;
     case 3:thunder.addImage(thunder3Image)
     break;
     case 4:thunder.addImage(thunder4Image)
     break;
 }
 thunder.lifetime=5
 thunder.scale=0.5
}
}
