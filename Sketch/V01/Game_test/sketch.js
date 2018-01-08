var rocket_flying;


function preload() {
bkg = loadImage ("Animations/00_bkg/bkg.png");
rocket_flying = loadAnimation("Animations/02_rocket_flying/asterisk_circle0000.png", "Animations/02_rocket_flying/asterisk_circle0000.png");
}

function setup() {
  createCanvas(800, 800);
  background(0,0,0);
  //image(bkg, 0, 0);
}

function draw() {
    background(255, 255, 255);
  animation(rocket_flying, 100, 100);
}
