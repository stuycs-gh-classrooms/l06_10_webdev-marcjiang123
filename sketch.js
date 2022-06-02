var hourCount;
var minuteCount;
var secondCount;
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
  hourCount = hour();
  minuteCount = minute();
  secondCount = second();
}

function draw(){
  background(255);
  updateTime();
  clockFace();
  timeToAngle(hourCount,-1,-1);
  drawHand(hourCount,-1,-1);
  timeToAngle(-1,minuteCount,-1);
  drawHand(-1,minuteCount,-1);
  timeToAngle(-1,-1,secondCount);
  drawHand(-1,-1,secondCount);
}

function timeToAngle(hour, minute, second){
  if(hourCount>=0){
    theta = (float(hourCount)*(PI/6.) * -1) + HALF_PI;
  }
  if(minuteCount>=0){
    theta = (float(minuteCount)*(PI/30.) * -1) + HALF_PI;
  }
  if(secondCount>=0){
    theta = (float(secondCount)*(PI/30.) * -1) + HALF_PI;
  }
println(hourCount);
return theta;
}

function clockFace(){
  var c = 0xE8A1F2;
  stroke(0);
  fill(c);
  circle(x,y,d);
}

function drawHand(hourCount, minuteCount, secondCount){
  if(hourCount>=0){
    cx = cos(theta) * ((d/2)*.5) + x;
    cy = sin(-theta) * ((d/2)*.5) + y;
    stroke(0,255,0);
    strokeWeight(4);
    line(x,y,cx,cy);
  }
  if(minuteCount>=0){
    cx = cos(theta) * ((d/2)*.71) + x;
    cy = sin(-theta) * ((d/2)*.71) + y;
    stroke(0,0,255);
    strokeWeight(2);
    line(x,y,cx,cy);
  }
  if(secondCount>=0){
    cx = cos(theta) * ((d/2)*.9) + x;
    cy = sin(-theta) * ((d/2)*.9) + y;
    stroke(255,0,0);
    strokeWeight(1);
    line(x,y,cx,cy);
  }
}

function updateTime(){
  hourCount = hour();
  minuteCount = minute();
  secondCount = second();
}

function newX(d, x, th){
  return cx = cos(th) * d/2 + x;
}

function newY(d, y, th){
  return cy = sin(-th) * d/2 + y;
}
