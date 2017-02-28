var targetFrameRate = 30;

function setup() {
	createCanvas(500, 500);
	frameRate(60);
	rectMode(CENTER);
	noStroke();
	fill(200);
}

function draw() {
	background(50);
	var s = sin(frameCount/targetFrameRate*2*PI);

	fill(200);
	rect(250, 250 + s * 100, 100, 100);
}
