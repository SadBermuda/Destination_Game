var bkg;
var rocket;
var platform;
var GRAVITY = 1;

function setup() {
  createCanvas(800, 800);
  bkg = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_00_BKG.png");

  rocket = createSprite(400, 390);
  rocket.addAnimation("start", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_01.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_05.png");
  rocket.addAnimation("flight", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_01.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_03.png");
  rocket.setCollider("rectangle", 0, 0, 400, 390);

  var img_platform = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_Collider.png");
  platform = createSprite(400, 390, 400, 10);


}

function draw() {

  rocket.velocity.y += GRAVITY;
  if(rocket.collide(platform)) {
    rocket.velocity.y = 0;
    rocket.changeAnimation("start");
  }

  drawSprites();
}
