var targetFrameRate = 30;

function setup() {
	createCanvas(500, 500);
	frameRate(60);
	rectMode(CENTER);
	noStroke();
}

function draw() {

	var seconds = frameCount/targetFrameRate;
	var secondPart = floor(frameCount/targetFrameRate);
	var framePart = frameCount % targetFrameRate;
	var twoSecondBeat = frameCount % 60;

	if (twoSecondBeat < 3) {
		// strobe for the first 3 frames of every two seconds
		background(150);
	} else {
		background(50);
	}

	fill(200);
	rect(250, 400 - framePart * 10, 100, 100);
}
