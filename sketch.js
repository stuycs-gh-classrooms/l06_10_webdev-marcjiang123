var cx;
var cy;
var theta;
var radius;
var centerX;
var centerY;
var cColor;
var c;

function setup(){
  createCanvas(400,400);
  radius = 100;
  centerX = width/2;
  centerY = height/2;
  theta = 0.;
  cColor = 0.;
  c = 0;
  fill(0,0,0);
}

function draw(){
  background(255);
  cx = newX(radius,centerX,theta);
  cy = newY(radius,centerY,theta);
  cColor++;
  if (cColor % 60 == 0){
    c+=10;
    fill(0,c,0);
  }
  if (c > 255){
    c = 0;
    fill(0,c,0);
  }
    
  circle(cx,cy,radius);
  line(centerX,centerY,cx,cy);
  theta++;
  
}
 
function newX(r,x,th){
  return cx = cos(radians(th)) * r + x;
}

function newY(r,y,th){
  return cy = sin(radians(th)) * r + y;
}
