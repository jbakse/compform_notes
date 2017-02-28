function setup() {
	createCanvas(640, 640);
}

function draw() {
	background(0);
	fill(255);
	noStroke();

	for (var x = 0; x < width; x++) {

		var y;

		if (x % 40 < 10) {
			y = 0;
		} else {
			y = 100;
		}

		y = height * 0.5 - y;
		rect(x, y, 1, 1);
	}
	
	if (frameCount % 40 < 10) {
		fill(255);
	} else {
		fill(255, 0, 0);
	}
	
	rect(10, 10, 100, 100);
}
