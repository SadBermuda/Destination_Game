/**
 * CODE DEPENDENCY: P5.Play Library
 */
var bkg;
var ship_none;
var ship_launch, ship_fly;
var animatedSprite;

function preload(){
  bkg = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_00_BKG.png");
  ship_none = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_00_fusee_start.png");
  ship_launch = loadAnimation("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_0001.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_0005.png");
  ship_fly = loadAnimation("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_0001.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_0003.png");

  animatedSprite = createSprite(400, 400, 400, 400);
  animatedSprite.addAnimation("launch", ship_launch);
}

function setup() {
  createCanvas(800, 800);
  image(bkg, 0, 0);
}

function draw() {
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  image(ship_none, 400, 400);

  if(mouseIsPressed)
    animatedSprite.ship_launch.play();
  else
    animatedSprite.ship_launch.stop();

  animation(ship_fly, 400, 400);
}
