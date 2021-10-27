var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var Fairy, FairyImg,FairyAnimation,FairyVoice;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	FairyAnimation=loadAnimation("images/fairyImage1.png","images/fairyimage2.png");
	FairyImg=loadImage("images/fairy.png");
 FairyVoice=loadSound("sound/JoyMusic.mp3");

}
function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	

	//crea el sprite del hada, y agrega la animación para el hada
Fairy=createSprite(100,510,50,50);
Fairy.addAnimation("fairy.png", FairyAnimation);
Fairy.scale=0.1;

star = createSprite(650,30);
star.addImage(starImg);
star.scale = 0.2;

Fairy.debug=true;
Fairy.setCollider("rectangle",0,150,1000,500);


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
	FairyVoice.play();
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 


  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);

	
	Fairy.velocityX=0;
}
  drawSprites();

 
  
}


function keyPressed() {

	if (keyCode==RIGHT_ARROW){
		FairyVoice.play();
		Fairy.velocityX=5;
	 }
	
	 if(keyCode==LEFT_ARROW){
		FairyVoice.play();
		 Fairy.velocityX=-5;
	 }
	
	 if(keyCode==DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	
	 }
	 
	
	}

