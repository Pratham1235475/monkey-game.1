nana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Score,survivalTime
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
monkey.debug =true;
  
ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
console.log(ground.x);
  
bananaGroup = createGroup();
obstacleGroup = createGroup();

  
SurvivalTime = 0
Score = 0;
  
}


function draw() {
background("white");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground); 
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
    
  
  
  //if(bananaGroup.isTouching(monkey)){
  //Score = Score+1;
//}
  
stroke("black")
textSize(20)
text("Score: "+Score,500,50);
  

  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityX = 0;
    ground.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
     }
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 200,150);



  spawnBananas();
  spawnObstacles();
  
  
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(800,320,10,40);
   obstacle.addImage("obstacle",obstacleImage)
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstacle.velocityX = -3
   obstacle.scale = 0.1
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}

function spawnBananas() {
  //write code here to spawn the banana
  if (frameCount % 100 === 0) {
     var banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(100,180))
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    banana.scale = 0.1
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}






