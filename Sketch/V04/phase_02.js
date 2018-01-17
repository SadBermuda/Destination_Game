var bkg;
var rocket;

function setup () {
  createCanvas (800, 792);
  bkg = loadImage("assets/Scene_02/HEAD0027_Creative_Coding_Canvas_Animation_00_bkg.png");
  rocket = loadImage("assets/Scene_02/HEAD0027_Creative_Coding_Canvas_Animation_01_rocket.png");
  bkgSprite = createSprite(400,150);
  bkgSprite.addImage(bkg);
}

function draw() {
  bkgSprite.velocity.y = 2;

  if(bkgSprite.position.y > 600) {
    window.location.href = "phase_03.html";
  }
  drawSprites();
  image(rocket,0,0);
}
