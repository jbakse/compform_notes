// draws a rectangle, where you tell it to!

var freq_slider;
var amplitude_slider;
var octive_slider;

function setup() {
	createCanvas(640, 360);

	fill(240);
	noStroke();
	rectMode(CENTER);

	createP('Frequency');
	freq_slider = createSlider(0, 100, 50);
	createP('Amplitude');
	amplitude_slider = createSlider(0, 20000, 10000);
	createP('Octaves');
	octive_slider = createSlider(1, 8, 1);

}


function draw() {
	background(50);
	ellipseMode(CENTER);
	var frequency = freq_slider.value() / 1000;
	var amplitude = amplitude_slider.value() / 100;
	noiseDetail(octive_slider.value(), .5);


	var y = height * .75;
	for (var x = 0; x < width; x += 2) {
		let n = noise(x * frequency);
		n = n * amplitude;
		ellipse(x, y - n, 3, 3);
	}

	let w = noise(frameCount * frequency);
	w = w * amplitude;
	
	ellipse(width * .5, height * .5, w, w);

}
