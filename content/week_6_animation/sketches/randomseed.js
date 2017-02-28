// uses randomSeed to demonstrate a parametric + deterministic rendering

var SPREAD = 200;

function setup() {
	createCanvas(640, 640);
	
}

function draw() {
	background(255);
	randomSeed(1);
	//SPREAD = frameCount;
	for (var i = 0; i < 100; i++) {
		var x = width / 2;
		var y = height / 2;
		x += random(-SPREAD, SPREAD);
		y += random(-SPREAD, SPREAD);
		
		ellipse(x, y, 10, 10);
	}
}
