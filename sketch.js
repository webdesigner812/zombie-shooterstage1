var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
 

  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);

   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
 
}

drawSprites();

}
