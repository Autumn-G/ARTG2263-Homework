/*
 * Autumn Gilmore
 * gilmore.au@northeastern.edu
 * ARTG-2262: Prototyping with Code
 * Lab #6
 * Assignment 4: Polka Dot Circus
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(130, 10, 30);

  let colSpacing = windowWidth / 110;
  let rowSpacing1 = windowHeight / 20;
  let rowSpacing2 = windowHeight / 25;

  // Section 1 (cols 0–21)
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 22; col++) {
      let x = 20 + col * colSpacing;
      let y = 20 + row * rowSpacing1;
      if ((row + col) % 2 === 0) {
        fill(0);
        square(x - 10, y - 10, 20);
      } else {
        fill(250, 10, 70);
      }
      circle(x, y, 20);
    }
  }

  // Section 2 (cols 28–49)
  for (let row = 0; row < 25; row++) {
    for (let col = 28; col < 50; col++) {
      let x = 20 + col * colSpacing;
      let y = 20 + row * rowSpacing2;
      if ((row + col) % 2 === 0) {
        fill(0);
      } else {
        fill(250, 110, 150);
      }
      circle(x, y, 20);
    }
  }

  // Section 3 (cols 56–77)
  for (let row = 0; row < 20; row++) {
    for (let col = 56; col < 78; col++) {
      let x = 20 + col * colSpacing;
      let y = 20 + row * rowSpacing1;
      if ((row + col) % 2 === 0) {
        fill(0);
        square(x - 10, y - 10, 20);
      } else {
        fill(250, 110, 70);
      }
      circle(x, y, 20);
    }
  }

  // Section 4 (cols 84–105)
  for (let row = 0; row < 25; row++) {
    for (let col = 84; col < 106; col++) {
      let x = 20 + col * colSpacing;
      let y = 20 + row * rowSpacing2;
      if ((row + col) % 2 === 0) {
        fill(0);
      } else {
        fill(250, 210, 130);
      }
      circle(x, y, 20);
    }
  }
}

function keyPressed() {
  if (key == 'S' || key == 's') {
    saveCanvas('assignment[4]_pattern_gilmore_autumn.png');
  }
}