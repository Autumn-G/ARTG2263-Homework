/*
 * Autumn Gilmore
 * gilmore.au@northeastern.edu
 * ARTG-2262: Prototyping with Code
 * Lab #6
 * Assignment 3: "No Capes!"
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240, 240, 245);
  
  // ---- Responsiveness variables ----
  let cx = width / 2;
  let cy = height * 0.4;
  let scaleUnit = min(width, height) / 600;
  let headRadius = 120 * scaleUnit;

  // ---- Turtleneck ----
  fill(45, 55, 70);
  noStroke();
  
  let bodyTop = cy + headRadius * 0.7;
  let bodyWidth = headRadius * 1.8;
  let bodyHeight = height - bodyTop - 50 * scaleUnit;
  
  beginShape();
// left neck
  vertex(cx - bodyWidth * 0.3, bodyTop + 60 * scaleUnit); 
// left chest
  vertex(cx - bodyWidth * 0.5, bodyTop + bodyHeight); 
// left bottom
  vertex(cx + bodyWidth * 0.5, bodyTop + bodyHeight); 
// right bottom
  vertex(cx + bodyWidth * 0.3, bodyTop + 60 * scaleUnit); 
// right shoulder
  endShape(CLOSE);

  
  // ---- Head ----
  fill(240, 200, 165);
  noStroke();
  ellipse(cx, cy, headRadius * 2, headRadius * 2.1);
  
  
  // ---- Neck ----
  rect(cx - headRadius * 0.3, cy + headRadius * 0.7, headRadius * 0.6, headRadius * 0.5);
  

  // ---- Hair ----
  fill(30, 25, 30);
  noStroke();
  arc(cx, cy - headRadius * 0.3, headRadius * 2.2, headRadius * 2, PI, TWO_PI, CHORD);
  
  // Left side hair
  beginShape();
  vertex(cx - headRadius * 1.1, cy - headRadius * 0.3);
  bezierVertex(
    cx - headRadius * 1.3, cy - headRadius * 0.1,
    cx - headRadius * 1.3, cy + headRadius * 0.3,
    cx - headRadius * 1.1, cy + headRadius * 0.5
  );
  vertex(cx - headRadius * 0.9, cy + headRadius * 0.4);
  bezierVertex(
    cx - headRadius * 0.95, cy + headRadius * 0.2,
    cx - headRadius * 0.95, cy,
    cx - headRadius * 0.9, cy - headRadius * 0.2
  );
  endShape(CLOSE);
  
  // Right side hair
  beginShape();
  vertex(cx + headRadius * 1.1, cy - headRadius * 0.3);
  bezierVertex(
    cx + headRadius * 1.3, cy - headRadius * 0.1,
    cx + headRadius * 1.3, cy + headRadius * 0.3,
    cx + headRadius * 1.1, cy + headRadius * 0.5
  );
  vertex(cx + headRadius * 0.9, cy + headRadius * 0.4);
  bezierVertex(
    cx + headRadius * 0.95, cy + headRadius * 0.2,
    cx + headRadius * 0.95, cy,
    cx + headRadius * 0.9, cy - headRadius * 0.2
  );
  endShape(CLOSE);
  

  // ---- Glasses ----
  let glassesY = cy - headRadius * 0.15;
  let lensRadius = headRadius * 0.45;
  let spacing = headRadius * 0.15;
  
  // Left lens
  fill(240, 200, 165);
  stroke(20, 20, 20);
  strokeWeight(8 * scaleUnit);
  ellipse(cx - lensRadius - spacing, glassesY, lensRadius * 2, lensRadius * 2);
  
  // Right lens
  ellipse(cx + lensRadius + spacing, glassesY, lensRadius * 2, lensRadius * 2);
  
  // Nose Bridge
  strokeWeight(6 * scaleUnit);
  line(cx - spacing, glassesY, cx + spacing, glassesY);
  
  // ---- Text ----
  textAlign(RIGHT, BOTTOM);
  textFont('Adobe Jenson Pro'); 
  textStyle(BOLD);
  textSize(scaleUnit * 20);
  fill(0, 0, 100);
  noStroke ()
  text('"No Capes!"', width - 45, height - 20);
  
}