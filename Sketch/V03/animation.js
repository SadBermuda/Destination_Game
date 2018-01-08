var asset_test;

function preload() {
  asset_test = loadAnimation("assets/screen_001/asterisk_circle0000.png");
}

function setup() {
  createCanvas(440, 440);
}

function draw() {
  background(255,255,255);
  animation(asset_test, 200, 200);
}
