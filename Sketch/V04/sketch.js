var bkg;
var rocket;
var platform;

function setup() {
  createCanvas(800, 800);
  bkg = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_00_BKG.png");

  rocket = createSprite(400, 390);
  rocket.addAnimation("start", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_0001.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_01_fusee_demarrage_0005.png");
  rocket.addAnimation("flight", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_0001.png", "assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_02_fusee_launch_0003.png");
  rocket.setCollider("rectangle", 0, 0, 400, 390);

  var img_platform = loadImage("assets/Scene_01/HEAD0027_Creative_Coding_Canvas_Animation_Collider.png");
  platform = createSprite(400, 390,);
  platform.addImage(img_platform);


}

function draw() {
  image(bkg, 0,0);

  if(rocket.collide(platform)) {
    rocket.velocity.y = 0;
    rocket.changeAnimation("start");
  }

  if(keyIsPressed) {
    rocket.changeAnimation("flight");
    rocket.velocity.y = 2;
  }

  if (rocket.position.y > 1000) {
    delay = 800;
    window.location.href = "phase_02.html";
  }

  drawSprites();
}
