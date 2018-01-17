var bkg;

function preload () {
  bkg = loadImage ("assets/Scene_03/HEAD0027_Creative_Coding_Canvas_Animation_00_bkg.png");
}

function setup () {
  createCanvas (800, 800);
  image(bkg,0,0);
}
