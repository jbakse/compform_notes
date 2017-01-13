// a simple p5 sketch that draws an ellipse

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(125, 125, 125);
	fill(225, 150, 150);
	strokeWeight(4);
	ellipse(100, 100, 50, 50);
}
