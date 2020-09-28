
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var fruit
var obstacle

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(150,200);
  monkey.scale = 0.15
  monkey.addAnimation("monkey", monkey_running);
  
  ground = createSprite(250,450,500,20);

  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);
  
  console.log(monkey.y);
  
  if (keyDown("space") && monkey.y >= 393) {
    monkey.velocityY = -12
    
  }            
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  spawnfruits();
  spawnobstacles();
  drawSprites();
}

function spawnfruits() {
  if (World.frameCount%100===0) {
    fruit = createSprite(500,200)
    fruit.addImage(bananaImage);
    fruit.scale = 0.1
    fruit.velocityX = -5
    fruit.y = random(200,280)
  }
}

function spawnobstacles() {
  if (World.frameCount%100===0) {
    obstacle = createSprite(500,430)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -6
  }
}  



