/*
 * Autumn Gilmore
 * gilmore.au@northeastern.edu
 * ARTG-2262: Prototyping with Code
 * Lab #6
 * Assignment 5: Orbital Rings
 */
  
let cx, cy;
let radii;
let circleSize;
let n = 15;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
  radii = [width * 0.15, width * 0.25, width * 0.35];
  circleSize = width * 0.065;
  noStroke();
  
for (let g = 0; g < n; g++){
  colors.push([random(130,255), random(130, 255), random(130,255)]);
}
}

function draw() {
  background(0, 80, 80);

  let t = frameCount * 0.012; 
  
  for (let r = 0; r < radii.length; r++) {
    let radius = radii[r];

  for (let i = 0; i < n; i++) {
    let angle = t + i * TWO_PI / n;

    let x = cx + cos(angle) * radius;
    let y = cy + sin(angle) * radius;
  
    let red =   colors[i][0] + 80 * sin(t * 1.5);
    let green = colors[i][1] + 80 * cos(t * 1.5);
    let blue =  colors[i][2] + 80 * sin(t * 1.5);

    fill(red, green, blue);
    let size = circleSize * (0.8 + 0.4 * sin(t * 2 + i));
    circle(x, y, size);
  }
  }
   
  drawClock();
}

function drawClock() {
  fill(255, 220);
  textSize(50);
  textAlign(CENTER,CENTER);

  let timeStr = nf(hour(), 2) + ":" + nf(minute(), 2) + ":" + nf(second(), 2);

  text(timeStr, cx, cy+10);
}