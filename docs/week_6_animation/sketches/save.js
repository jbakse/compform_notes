// basic template sketch showing how to use the Turtle class
var myTurtle;
var TURN_ANGLE = 1;

function setup() {
	createCanvas(640, 640);
	// pixelDensity(1); // disable high-res mode on retina displays
	frameRate(10);
	myTurtle = new Turtle();
}



function draw() {
	myTurtle.moveTo(320 - 150, 320);
	myTurtle.turnTo(0);

	background(0);
	stroke(255);
	TURN_ANGLE = frameCount;
	// TURN_ANGLE = TURN_ANGLE * .2;

	for (var i = 0; i < 10; i++) {
		myTurtle.moveForward(300);
		myTurtle.turnLeft(TURN_ANGLE);
	}



	if (frameCount < 150) {
		//saveFrame("frame", frameCount);
	} else {
		noLoop();
	}
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
function saveFrame(name, frameNumber) {
	// remove the decimal part (just in case)
	frameNumber = floor(frameNumber);
	// zero-pad the number (e.g. 13 -> 0013);
	var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

	save(name + "_" + paddedNumber);
}
