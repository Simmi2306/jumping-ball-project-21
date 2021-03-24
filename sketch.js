var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
    surface1=createSprite(110,560,170,20);
    surface1.shapeColor="yellow";

    surface2=createSprite(300,560,170,20);
    surface2.shapeColor="green";

    surface3=createSprite(490,560,170,20);
    surface3.shapeColor="blue";

    surface4=createSprite(680,560,170,20);
    surface4.shapeColor="red";

    
    //create box sprite and give velocity
    
    ball=createSprite(random(20,750),300,40,40);
    ball.shapeColor="pink";
    ball.velocityX=6;
    ball.velocityY=4;


}

function draw() {
    background("black");
    
    //create edgeSprite

    if(ball.x<0){
        music.stop();
        ball.velocityX=4;
    }
    else if(ball.x>800){
        music.stop();
        ball.velocityX=-6;
    }
    
    createEdgeSprites();

    drawSprites();
    
    //add condition to check if box touching surface and make it box
    
    if(isTouching(ball,surface1)){
        music.play();
        ball.shapeColor="yellow";
        bounceOff(ball,surface1);
    }
    else if(isTouching(ball,surface2)){
        music.stop();
        ball.shapeColor="green";
        bounceOff(ball,surface2);
    }
    else if(isTouching(ball,surface3)){
        music.stop();
        ball.shapeColor="blue";
        bounceOff(ball,surface3);
        ball.velocityX=0;
        ball.velocityY=0;
    }
    else if(isTouching(ball,surface4)){
        music.stop();
        ball.shapeColor="red";
        bounceOff(ball,surface4);
    }
    
    if(ball.y<0){
        music.stop();
        ball.velocityY=4;
    }
    
}

function isTouching(object1,object2){
    if(object1.x -object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y <object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
    }
    else{
      return false;
    }
}


function bounceOff(object1,object2){
    if(object1.x -object2.x < object2.width/2 + object1.width/2
      &&object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX=object1.velocityX*(-1);
        object2.velocityX=object2.velocityX*(-1);
      }
      
    if(object1.y - object2.y <object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }
  }
