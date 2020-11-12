
var monkey , monkey_running
var ground, groundImg
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
groundImg = loadImage("ground.png")
 
}



function setup() {
  ground=createSprite(200,390,800,10)
  ground.addImage(groundImg)
  ground.scale=1
ground.velocityX=-4
  
  monkey = createSprite(80,290)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15
  
  inviGround = createSprite(200,350,400,40);
  inviGround.visible = false;

  
  console.log(ground.x)
  
  
}


function draw() {
background("skyblue")
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")&& monkey.y >= 280) {
        monkey.velocityY = -12;
    }
    
  
    monkey.velocityY = monkey.velocityY + 0.5
 
  
 monkey.collide(inviGround);
  
  
  drawSprites()
  food()
  obstacles()
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ survivalTime,100,50)
}

function food(){
  if(frameCount%80==0){
    banana=createSprite(400,Math.round(random(120,200)))
    banana.addImage(bananaImage)
    banana.scale=0.15
    banana.velocityX=-5
    banana.lifetime=140
    banana.depth=monkey.depth
    monkey.depth=monkey.depth+1
  }
}
function obstacles(){
  if(frameCount%300==0){
    obstacle=createSprite(400,290)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.15
    obstacle.velocityX=-5
    obstacle.lifetime=140
}
}




