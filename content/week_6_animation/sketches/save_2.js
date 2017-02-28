// basic template sketch showing how to use the Turtle class
var myTurtle;
var TURN_ANGLE = 1;

function setup() {
	createCanvas(640, 640);
	frameRate(5);

	myTurtle = new Turtle();
}



function draw() {


	background(0);
	stroke(255, 255, 255, 50);

	// drawIt();


	if (frameCount < 150) {
		//saveFrame("frame", frameCount);
	}
	else {
		noLoop();
	}
}

function drawIt() {
	TURN_ANGLE = frameCount + 90;
	// TURN_ANGLE = TURN_ANGLE * .2;

	for (var l = 0; l < 500; l++) {
		myTurtle.moveTo(320 - 150, 320);
		myTurtle.turnTo(0);

		for (var i = 0; i < 10; i++) {
			myTurtle.moveForward(300);
			myTurtle.turnLeft(TURN_ANGLE + l * 0.02);
		}
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
