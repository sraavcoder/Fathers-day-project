//space for variables

var start;
var dad;
var t = true;

var dadX = 450;
var child1;
var child2;

var photo1;
var photo2;

var y1 = 450;
var y2 = 390;

var teju = true;
var sravan = true;

var p1 = 240;
var p2 = 150;

var x1 = 50;
var x2 = 1100;

var p3 = 1100;
var p4 = 100;

var ximage = 550;

var dadY = -5;

var cx = 1500;
var cy = 750;

var ty = 680;

function preload() {
  start = loadImage(
    "images/172-1720261_father-s-day-logo-clip-art-fathers-day.png"
  );

  dad = loadImage("images/superman-clipart-png-8.png");

  child1 = loadImage(
    "images/524-5240424_omniverse-ben-tennyson-gwen-tennyson-ben-10-000.png"
  );
  child2 = loadImage("images/Rick_Morales_Charmcaster.png");

  photo1 = loadImage("images/1.JPG");
  photo2 = loadImage("images/2.jpg");
}
function setup() {
  canvas = createCanvas(cx, cy);
  canvas.parent("canvascontainer");
}
function draw() {
  background("#99d9ea");

  if (t == true) {
    dadX += 5;
  }

  if (dadX > 930) {
    t = false;
  }
  if (t == false) {
    dadX = dadX - 5;
  }
  if (dadX < 490) {
    t = true;
  }

  if (y1 > 420) {
    sravan = true;
  }

  if (sravan == true) {
    y1 = y1 - 3;
    p1 = p1 - 3;
  }
  if (p1 < 150) {
    sravan = false;
  }
  if (sravan == false) {
    y1 = y1 + 3;
    p1 = p1 + 3;
  }

  if (y2 > 400) {
    teju = true;
  }

  if (teju == true) {
    y2 = y2 - 3;
    p2 = p2 - 3;
  }
  if (p2 < 100) {
    teju = false;
  }
  if (teju == false) {
    y2 = y2 + 3;
    p2 = p2 + 3;
  }

  image(dad, dadX, dadY, 130, 200);
  image(start, ximage, 180, 400, 420);

  image(photo1, x1, p1, 400, 225);
  image(photo2, x2, p2, 350, 250);

  image(child2, p3, y2, 230, 340);
  image(child1, p4, y1, 210, 290);
}
