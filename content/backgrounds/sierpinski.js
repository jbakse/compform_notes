// draw a sirpinski triangle

var oneX, oneY, twoX, twoY, threeX, threeY;
var x, y;


function setup() {
	var canvas = createCanvas(200, 170);
	if($("#canvas-holder").length) {
		canvas.parent("canvas-holder");
	}

	// define the 3 points of the big triangle
	oneX = width / 2;
	oneY = 0;
	twoX = 0;
	twoY = height;
	threeX = width;
	threeY = height;

	// pick a starting position at random
	x = random(width);
	y = random(width);
}

function draw() {

	// choose one of the three points
	// move half way from the current position to the chosen point
	var r = random(3);
	if (r < 1) {
		x = (x + oneX) * 0.5;
		y = (y + oneY) * 0.5;
	} else if ( r < 2) {
		x = (x + twoX) * 0.5;
		y = (y + twoY) * 0.5;
	} else {
		x = (x + threeX) * 0.5;
		y = (y + threeY) * 0.5;
	}

	// draw a single pixel at the new location
	set(int(x), int(y), 0);
	updatePixels();

}
