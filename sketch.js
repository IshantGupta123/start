var PLAY = 1;
var END=0;
var gameState = 1;
var alien,end,sword,sword2,enemyGroup;
var fruitGroup,fruit1,fruit2,fruit,fruit4,egame,csound;
var score;

function preload(){
  alien=loadImage("alien1.png");
  sword=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  alien=loadImage("alien1.png");
  end=loadImage("gameover.png")
  egame=loadSound("gameover.mp3");
  csound=loadSound("knifeSwooshSound.mp3");
  
  
 
}
  function setup() {
  createCanvas(600, 500);
    sword1=createSprite(40,200,20,20);
    sword1.addImage(sword);
    sword1.velocityX=1;
    sword1.scale=0.7;
   sword1.setCollider("rectangle",0,0,40,40);
     score=0  
    
    
    fruitGroup=createGroup();
    enemyGroup=createGroup();
    
    
  
    
  }
function draw(){
  background(100);
   
if(sword1.isTouching(fruitGroup)){
   fruitGroup.destroyEach();
  score=score+2;
  
csound.play();
}
  
  
  if(gameState===PLAY){
    
    
    
    sword1.y=World.mouseY;
    sword1.x=World.mouseX;
     if(sword1.isTouching(enemyGroup)){
  gameState = END;
       egame.play();
  }
    fruits();
  Enemy();
  }
  
  else if (gameState===END){
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  fruitGroup.veloctyX=0;
  enemyGroup.veloctyX=0;
  sword1.addImage(end);
  sword1.x=200;
  sword1.y=200;
  }
   
  
  drawSprites();
  text("score "+score ,500,50);
}
function fruits(){
 if (frameCount % 80 === 0){
    fruit = createSprite(400,165,10,40);
   fruit.velocityX = -7;
   fruit.scale=0.2;
   r=Math.round(random(1,4));
   if(r == 1){
     fruit.addImage(fruit1);
   }
   if(r == 2){
     fruit.addImage(fruit2);
   }
   if(r == 3){
     fruit.addImage(fruit3);
   }
   else{
     fruit.addImage(fruit4);
   }
   fruit.y=Math.round(random(50,340));
   fruit.setLifetime=100;
   fruitGroup.add(fruit);
 }
  
}
function Enemy(){
 if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addImage("moving",alien);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-6;
    monster.setLifetime=50;
      

    enemyGroup.add(monster);
}
}