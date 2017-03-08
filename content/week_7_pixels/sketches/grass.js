// draws some grass


var testImage;

function preload() {
	testImage = loadImage("week_7_pixels/sketches/cf.png");
	noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(640, 320);

	// load up the pixel[] array so we can read colors out of it later
	testImage.loadPixels();
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	stroke(255, 0, 0);
	fill(255, 255, 255);


	// image(testImage, 0, 0);
	stroke(0, 200, 100, 80);

	// loop over every x,y pixel coordinate in the image
	for (x = 0; x < 640; x++) {
		for (y = 0; y < 320; y++) {
			// find the red value of the pixel at x, y in the .pixels array
			// see: http://p5js.org/reference/#/p5/pixels[]
			// we don't need to worry about screen pixel density here, because we are not reading from the screen
			// var pixelRed = testImage.pixels[(y * 640 + x) * 4];

            var pixelRed = red(testImage.get(x, y));

			// pick a random value and compare it pixelRed
			// if pixelRed is 0, we'll never draw
			// if pixelRed is 255, we'll always draw
			// if pixelRed is 127, we'll draw 50% of the time
			if (random(255) < pixelRed) {
				grass(x, y);
			}
		}
	}
}

function grass(x, y) {

	var bladeHeight = min(random(1, 20), random(1, 20), random(1, 20),
		random(1, 20), random(1, 20), random(1, 20));
	bladeHeight = bladeHeight * 3;

	var bladeLean = random(-1, 1);
	bladeLean = bladeLean * .3;
	bladeLean *= bladeHeight;

	line(x, y, x + bladeLean, y - bladeHeight);

}
