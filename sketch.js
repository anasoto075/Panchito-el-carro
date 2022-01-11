var ground;
var panchito;
var groundImg;
var panchitoImg;
var form;
var gameState = 2;
var cloud;
var cloudImage;
var score = 0;
var cloudsGroup;

function preload(){
groundImg = loadImage("track (1).png");
panchitoImg = loadImage("panchito.png");
cloudImage = loadImage("walk-person-png.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-50);
  ground = createSprite(width,height/3);
  ground.addImage("ground",groundImg);
  ground.scale = 1;

  panchito = createSprite(50,359,30,50);
  panchito.addImage("carro",panchitoImg);
  panchito.scale = 0.5;

  form = new Form();
  form.display();

  cloudsGroup = new Group();
 
}

function draw() {
  background(255,255,255); 
 if (gameState == 1){
  score = score + Math.round(getFrameRate()/6);

  ground.velocityX = -(3+score/100);

  if (keyDown(LEFT_ARROW)){
    panchito.y = panchito.y-5;
  }
  if (keyDown(RIGHT_ARROW)){
    panchito.y = panchito.y+5;
  }
  if (ground.x<200){
    ground.x=width/2;
  } 
  spawnClouds();
  if (cloudsGroup.isTouching(panchito)){
    gameState = 0;
  }
  drawSprites();
 }
 if (gameState == 0){
  textSize(60); 
  fill("red");
  text("Game Over",width/2,height/2);

} 
  textSize(40); 
  fill("white");
  text("Score "+score,width-300,50)
}
function spawnClouds() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     cloud = createSprite(width,100,40,10);
     cloud.y = Math.round(random(10,height));
     cloud.addImage(cloudImage);
     cloud.scale = .1;
     cloud.velocityX = -(3+score/100);
    
     //assign lifetime to the variable
     cloud.lifetime = width;
    
    //adjust the depth
     //ground.depth = cloud.depth;
     //cloud.depth = cloud.depth + 1;
    
     //adding cloud to the group
     cloudsGroup.add(cloud);
    }
}