/*
 * Autumn Gilmore
 * gilmore.au@northeastern.edu
 * ARTG-2262: Prototyping with Code
 * Lab #6
 * Assignment 6: Bubble Brush
 
 Instructions:
 - To draw bubbles drag mouse
 - To change brush size press up and down arrows
 - Toggle inbetween draw and selective erasing by pressing E/e
 - Press C to clear canvas
 - Press S to save drawing as PNG
 */
  

let bubbles = [];
let brushSize = 30;
let eraseMode = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  
}

function draw() {
  background(210, 60, 10);
  bubblesDrawn();
  drawUI();
}

function bubbleFeatures(){
  for (let a = 0; a < 2; a++){
    bubbles.push({
      x: mouseX + random (-brushSize, brushSize),
      y: mouseY + random (-brushSize, brushSize),
      size: random(brushSize * 0.4, brushSize*1.1),
      hue: random(190,240),
      saturation: random(40, 70),
      brightness: random(75, 100),
      alpha: random(55,85),
      speed: random(0.3, 0.5) 
    });
  }
}

function bubblesDrawn(){
  for (let i = bubbles.length - 1; i >= 0; i --){
    let b = bubbles[i];
  b.y -= b.speed;
  b.alpha -= 0.18;
    if (b.alpha <= 0) { bubbles.splice(i, 1); continue; }
    fill(b.hue, b.saturation, b.brightness, b.alpha);
    circle(b.x, b.y, b.size);
  }
}

function mousePressed(){
  if (!eraseMode) bubbleFeatures();
}

function mouseDragged(){
  if (!eraseMode) bubbleFeatures();
  else bubbles = bubbles.filter(b => dist(b.x, b.y, mouseX, mouseY) > brushSize * 1.25);
}

function keyPressed(){
  if (key === 'e' || key === 'E') eraseMode = !eraseMode;
  if (key === 'c' || key === 'C') bubbles = [];
  if (key === 's' || key === 'S') saveCanvas('Bubble-Brush', 'png');
  if (keyCode === UP_ARROW)   brushSize = min(brushSize + 5, 120);
  if (keyCode === DOWN_ARROW) brushSize = max(brushSize - 5, 5); 
}

function drawUI(){
  colorMode(RGB)
  
  // instructions panel
  fill(0, 0, 0, 150);
  rect(16, 56, 265, 150, 10);
  fill(180, 220, 255);
  textAlign(LEFT, TOP);
  textSize(12.5);
  text("Drag Mouse = Draw Bubbles", 28, 68);
  text("Up↑/Down↓ = Brush Size", 28, 93);
  text("Toggle E = Selective Erasing/Draw Again", 28, 118);
  text("C = Clear Canvas", 28, 143);
  text("S = Save Drawing", 28, 168);

  // brush preview
  noFill();
  stroke(255, 255, 255, 60);
  strokeWeight(1);
  circle(mouseX, mouseY, brushSize);
  noStroke();

  colorMode(HSB, 360, 100, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}