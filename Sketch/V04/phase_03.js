var bkg;
var rocket;
var GRAVITY = .5;

function setup () {
  createCanvas (800, 800);
  bkg = loadImage ("assets/Scene_03/HEAD0027_Creative_Coding_Canvas_Animation_00_bkg.png");
  rocket = loadImage ("assets/Scene_03/HEAD0027_Creative_Coding_Canvas_Animation_01_rocket.png");
  rocketSprite = createSprite(400,-200);
  rocketSprite.addImage(rocket);
}

function draw () {
  image(bkg,0,0);

  rocketSprite.velocity.y = 2;

  if (keyIsPressed) {
  rocketSprite.velocity.y= GRAVITY;
  }

  if (rocketSprite.position.y > 400) {
  rocketSprite.velocity.y= 0;
  }
  drawSprites();
}
