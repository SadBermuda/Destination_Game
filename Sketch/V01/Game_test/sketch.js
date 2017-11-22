var rocket_flying;


function preload() {
rocket_flying = loadAnimation("Animations/02_rocket_flying/02_rocket_flying_01.png", "Animations/02_rocket_flying/02_rocket_flying_02.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  animation(rocket_flying, 200, 200);
}
