var RENDER = false;

function setup() {
	createCanvas(1280 / 2, 720 / 2); // dividing by two because retina!
	frameRate(60);
}



function draw() {
	if (!RENDER) {
		// shhow frame 60 as preview
		frameCount = 60;
		noLoop();
	}

	// blendMode(ADD);
	ellipseMode(CENTER);



	blendMode(BLEND);
	background(0);

	blendMode(ADD);
	fill(1);
	var x = width * .5;
	var y = height * .5;

	for (i = 0; i < 5000; i++) {
		var s = sin(frameCount / 90 * PI) * 100;
		var offsetX = (noise(i * .1, frameCount * .01, 0) - .5) * 1000 ;
		var offsetY = (noise(i * .1, frameCount * .01, 10) - .5) * 1000 ;

		ellipse(x+offsetX, y+offsetY, s, s);
	}


	if (RENDER) {
		saveFrame("render", frameCount, "jpg", 90);
	}
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
	// don't save frames once we reach the max
	if (maxFrame && frameNumber > maxFrame) {
		return;
	}

	if (!extension) {
		extension = "png";
	}
	// remove the decimal part (just in case)
	frameNumber = floor(frameNumber);
	// zero-pad the number (e.g. 13 -> 0013);
	var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

	save(name + "_" + paddedNumber + "." + extension);
}
