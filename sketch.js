var hour;
var minute;
var second;
var theta;
var d;
var x;
var y;
var cx;
var cy;

function setup(){
  createCanvas(500,500);
  background(255);
  d = 400;
  x = width/2;
  y = height/2;
  hour = hour();
  minute = minute();
  second = second();
}

function draw(){
  background(255);
  updateTime();
  clockFace();
  timeToAngle(hour,-1,-1);
  drawHand(hour,-1,-1);
  timeToAngle(-1,minute,-1);
  drawHand(-1,minute,-1);
  timeToAngle(-1,-1,second);
  drawHand(-1,-1,second);
}

function timeToAngle(hour, minute, second){
  if(hour>=0){
    theta = (float(hour)*(PI/6.) * -1) + HALF_PI;
  }
  if(minute>=0){
    theta = (float(minute)*(PI/30.) * -1) + HALF_PI;
  }
  if(second>=0){
    theta = (float(second)*(PI/30.) * -1) + HALF_PI;
  }
println(hour);
return theta;
}

function clockFace(){
  var c = 0xE8A1F2;
  stroke(0);
  fill(c);
  circle(x,y,d);
}

function drawHand(hour, minute, second){
  if(hour>=0){
    cx = cos(theta) * ((d/2)*.5) + x;
    cy = sin(-theta) * ((d/2)*.5) + y;
    stroke(0,255,0);
    strokeWeight(4);
    line(x,y,cx,cy);
  }
  if(minute>=0){
    cx = cos(theta) * ((d/2)*.71) + x;
    cy = sin(-theta) * ((d/2)*.71) + y;
    stroke(0,0,255);
    strokeWeight(2);
    line(x,y,cx,cy);
  }
  if(second>=0){
    cx = cos(theta) * ((d/2)*.9) + x;
    cy = sin(-theta) * ((d/2)*.9) + y;
    stroke(255,0,0);
    strokeWeight(1);
    line(x,y,cx,cy);
  }
}

function updateTime(){
  hour = hour();
  minute = minute();
  second = second();
}

function newX(d, x, th){
  return cx = cos(th) * d/2 + x;
}

function newY(d, y, th){
  return cy = sin(-th) * d/2 + y;
}
