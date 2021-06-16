// MADE BY SHREYASI THE GREAT

var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;

var box;

var edge1;
var edge2;
var edge3;
var music;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(50,580,100,30);
    surface1.shapeColor = "pink";

    surface2 = createSprite(150,580,100,30);
    surface2.shapeColor = "lavender";
   
    surface3 = createSprite(250,580,100,30);
    surface3.shapeColor = "red";

    surface4 = createSprite(350,580,100,30);
    surface4.shapeColor = "yellow";

    surface5 = createSprite(450,580,100,30);
    surface5.shapeColor = "orange";
    
    surface6 = createSprite(550,580,100,30);
    surface6.shapeColor = "blue";

    surface7 = createSprite(650,580,100,30);
    surface7.shapeColor = "green";

    surface8 = createSprite(750,580,100,30);
    surface8.shapeColor = "purple";

    //create box sprite and give velocity
    box = createSprite(random(20,750),50,50,50);
    box.shapeColor = "white";
  

}

function draw() {
    background("lightblue")

    //create edgeSprite
    edge1 = createSprite(5,400,6,800);
    edge1.shapeColor = "black";
    
    edge2 = createSprite(400,5,800,6);
    edge2.shapeColor = "black";

    edge3 = createSprite(795,300,6,800);
    edge3.shapeColor = "black";

    //edge4 = createSprite(300,795,800,6);
   
   if(edge1.isTouching(box)){
       box.bounceOff(edge1)
    }
   if(edge2.isTouching(box)){
       box.bounceOff(edge2)
    }
   if(edge3.isTouching(box)){
        box.bounceOff(edge3)
    }
    
    
 
 
  drawSprites();

    //add condition to check if box touching surface and make it bounce
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "pink"
         music.play();
       }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "lavender"
        // music.play();
      }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red"
        music.play();
      }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "yellow"
        music.play();
     }
     if(surface5.isTouching(box) && box.bounceOff(surface5)){
        box.shapeColor = "orange"
       // music.play();
     }
     if(surface6.isTouching(box) && box.bounceOff(surface6)){
        box.shapeColor = "blue"
       // music.play();
     }
     if(surface7.isTouching(box) && box.bounceOff(surface7)){
        box.shapeColor = "green"
       // music.play();
     }
     if(surface8.isTouching(box) && box.bounceOff(surface8)){
        box.shapeColor = "purple"
        //music.play();
     }

    if(surface2.isTouching(box)){
    ball.shapeColor = "black"
    ball.velocityX = 0;
    music.stop();
    }

    fill("yellow");
    textSize(25);
    stroke("red")
    text("PRESS DOWN ARROW TO START THIS MIRACULOUS BOX", 10, 20, 300, 300);
}
function keyPressed() {

    if(keyCode === DOWN_ARROW){
   box.velocityX = -29;
   box.velocityY = 29;
        }}
   