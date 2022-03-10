var ground,invisibleGround;
var imagenNubes,clouds;
var trex ,trex_running;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;
var puntuacion=0;
var play=1;
var end=0;
var gameState=play;
var obstaclesGroups; // falta el grupo de las nubes 
var gameOver;
var restart;
// falta esta groundImage
// falta el fondo 


function preload(){
 // te falta el fondo!!  backgroundImg = loadImage("backgroundImg.png") 
obstaculo1=loadImage("obstacle1.png");
obstaculo2=loadImage("obstacle2.png");
obstaculo3=loadImage("obstacle3.png");
obstaculo4=loadImage("obstacle4.png");
obstaculo5=loadImage("obstacle5.png");
obstaculo6=loadImage("obstacle6.png");
gameOver.loadImage(gameOver.png); // aqui falta poner comillas! y hay que quitar el punto es = 
restart.loadImage(restart.png); // aqui falta poner comillas! y hay que quitar el punto es = 
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage=loadImage("ground2.png");
imagenNubes=loadImage("cloud.png");
  // trex_collided = loadAnimation("trex_collided.png"); FALTA ESTE 
}

function setup(){

  createCanvas(600,200) // CAMBIAMOS LOS VALORES POR: windowWidth, windowHeight

console.log("hola"+"jugador");
obstaclesGroups=new Group();
cloudsGroups=new Group();
// hay que agregar el sol! 

  
trex=createSprite(50,160,20,50);
trex.addAnimation("runing",trex_running);
trex.scale=0.5;
trex.x=50;
ground=createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
invisibleGround=createSprite(200,190,400,10);
//var random=Math.round(1,100);
invisibleGround.visible=false;

ground.X=ground.width/2;
restart=createSprite(300,140);
restart.addImage // esta instruccion esta incompleta, hay que poner el nombre de la imagen
gameOver=createSprite(300,140);
gameOver.addImage("gameOver",gameOverImage);  // el nombre de la variable dentro del parentesis no la declaraste
}


function draw(){
  background("white"); // aqui cambiamos el color por la imagen de la variable fondo
text("score"+puntuacion,500,50);

if (gameState===play){
  ground.velocityX=-4;

  puntuacion=puntuacion+Math.round(frameCount/60);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space")&&trex.y>=100) { trex.velocityY = -10; } // esta instrucción esta mal 
  //  if((touches.length > 0 || keyDown("SPACE")) && trex.y  >= height-120) 
   //trex.velocityY = -10;      te falta esta
     //  touches = [];         te falta esta 
  // } cierra corchetes 
  trex.velocityY=trex.velocityY +0.8 ;
  randomNubesaleatorias();
obstaculosRandoms ();
if (obstaclesGroups.isTouching(trex)){
  gameState=end;
}
}


else if (gameState===end){
  ground.velocityX=0;
  //  trex.velocityY = 0; // falta esta instrucción 
obstaclesGroups.setVelocityXEach(0);
cloudsGroups.setVelocityXEach(0);
  // trex.changeAnimation("collided",trex_collided); // falta esta instrucción 
}

trex.collide(invisibleGround);



  drawSprites();

}
function randomNubesaleatorias(){
 
if(frameCount%60===0){
    clouds=createSprite(100,50,25,25);
    clouds.velocityX=5;
    clouds.addImage(imagenNubes);
   clouds.y=Math.round(random(1,60))
  clouds.depth=trex.depth;
  trex.depth=trex.depth+1
  clouds.lifetime=200; 
  cloudsGroups.add(clouds);
  
}

}
function obstaculosRandoms(){
if(frameCount%60===0){
var obstaculos=createSprite (600,165,10,40);
obstaculos.velocityX=-6;
var rand=Math.round(random(1,6));
switch (rand) {
  case 1: obstaculos.addImage(obstaculo1);
    break;
    case 2: obstaculos.addImage(obstaculo2);
    break;
    case 3: obstaculos.addImage(obstaculo3);
    break;
    case 4: obstaculos.addImage(obstaculo4);
    break;
    case 5: obstaculos.addImage(obstaculo5);
    break;
    case 6: obstaculos.addImage(obstaculo6);
    break;
   
  default:
    break;
}
obstaculos.scale=0.50;
obstaculos.lifetime=300;
obstaclesGroups.add(obstaculos);

}




}
