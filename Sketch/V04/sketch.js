/**
 * CODE DEPENDENCY: P5.Play Library
 */
var bkg;
var ship;

function preload(){
  bkg = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_00_BKG.png");
}

function setup() {
  createCanvas(800, 800);
  image(bkg, 0, 0);
  ship = createSprite(400,400,400,400);
  var shipAnimation = ship.addAnimation("none", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_00_fusee_start.png");
  ship.addAnimation("start", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_01.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_05.png");
  ship.addAnimation("launch", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_01.png", "HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_03.png");
}

function draw() {
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well

  if(keyCode === UP_ARROW) {
    ship.changeAnimation("start");
    ship.velocity.y = 2;
  }
  else(){
    ship.changeAnimation("none");
  }
}
