var grid = 50;
var width = 1366;
var carGroup1, logGroup1;
var height = 100;
var gameState = "play";
//var carAnimation, logAnimation, playerAnimation;
var road;
var car ;
var garden , garden1 ; 
var player ; 


function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();

   garden = createSprite (0 , 220 , 2050 , 110 ) ; 
   garden.shapeColor = " green " 

   garden1 = createSprite (0 , 600 , 2050 , 110 ) ;
   garden1.shapeColor = " green " 

   road = createSprite (0 ,410 ,2050 ,270 )  ;
   road.shapeColor = " black " ;
   
  carGroup1= new Car ();
  logGroup1= new Log ();
  player1 = new Player ( width/2 , height-25);

  //logGroup1.shapeColor = " brown " ;

  displayCountX = 0; 

  for (var i = 0 ; i < 15 ; i++){
   car = new Car  (displayCountX , this.y , this.width , this.height );  
  
  }
 
  for (var i = 0 ; i < 10 ; i++){
    log = new Log  (displayCountX , this.y , this.width , this.height );  
   
   }
  
  
   
 }

function draw() {
  background("skyblue");
  if (keyDown ("up")){
    player.jump();
  }

  if (keyDown ("right")){
    player.moveright();
    }

    if (keyDown ("left")){
      player.moveleft();
    }
 

  drawSprites();
}

