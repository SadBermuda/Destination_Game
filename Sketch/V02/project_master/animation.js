var rocket_flying;

function preload () {
  rocket_flying = loadAnimation('../assets/02_rocket_flying_01.png','../assets/02_rocket_flying_02.png');
}

function setup () {
  createCanvas(440,440);
  background(0,0,0);
}

function draw () {
  strokeWeight(4);
  line(2,2,400,2);
  stroke(255);
  strokeWeight(4);
  line(400,0,400,400);
  stroke(255);
  strokeWeight(4);
  line(400,400,0,400);
  stroke(255);
  strokeWeight(4);
  line(0,400,0,0);
  stroke(255);
  animation(rocket_flying,200,200);
}
