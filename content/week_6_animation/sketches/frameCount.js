// uses millis() to demonstrate realtime timekeeping

var ellipse_color;
var oldTime = 0;

function setup() {
	createCanvas(640, 640);
	ellipse_color = color(random(255), random(255), random(255));
	ellipseMode(CENTER);
	stroke(200, 200, 200);
	strokeWeight(4);

	frameRate(100);
}

function draw() {

	var newTime = floor(frameCount / 30);
	if (newTime !== oldTime) {
		oldTime = newTime;
		ellipse_color = color(random(255), random(255), random(255));
	}

	background(50);
	fill(ellipse_color);

	ellipse(320, 320 + sin(frameCount * .1) * 10, 500, 500);
}
