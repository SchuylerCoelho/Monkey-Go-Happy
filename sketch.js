var Ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvivalTime = 0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  Ground = createSprite(200,370,600,20)
  monkey = createSprite(70,330)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  Ground.velocityX = -2
  
  
}


function draw() {
background("white");
  text("SurvivalTime"+SurvivalTime,300,20)
  SurvivalTime = SurvivalTime + Math.round((getFrameRate())/frameCount)
  
  if(Ground.x < 100){
    Ground.x = Ground.width / 2
  }
  if(keyDown ("space")&& monkey.y >250 ){
    monkey.velocityY = -6
  }
  monkey.velocityY = monkey.velocityY +0.5
  monkey.collide(Ground)
 spawnfruits(); 
  spawnObstacle();
 drawSprites(); 
  
  
}
function spawnfruits(){
  if(frameCount % 100 === 0 ){
    banana = createSprite(400,Math.round(random(200,300)))
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.scale = 0.1
  }
}
function spawnObstacle(){
  if(frameCount % 180 === 0){
    obstacle = createSprite(300,325)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -2
    obstacle.scale = 0.2
  }
}





