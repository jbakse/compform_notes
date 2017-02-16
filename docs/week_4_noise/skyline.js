var amplitude = 200;
var frequency = .02;

function setup() {
	createCanvas(600, 200);
	noStroke();

	noiseSeed(1);

	// uncomment next line for simpler/less detailed noise
	// noiseDetail(1, 0);

}

function draw() {
	background(200, 200, 210);
	fill(100);



	var x = 0;
	for (x = 0; x < width; x += 20) {
		var buildingHeight = noise(x * frequency) * amplitude;

		rect(x, height * .9 - buildingHeight, 20, buildingHeight);
	}

	fill(150);
	rect(0, height * .9, width, height * .5);

}


// Note: what happens if you change the noise call above to this: 
// var buildingHeight = noise(x * frequency, frameCount * frequency) * amplitude;
