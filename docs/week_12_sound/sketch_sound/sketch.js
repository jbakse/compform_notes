// makes a terrible noise

var frequency = 220;

function setup() {
	createCanvas(windowWidth, 360);

	carrier = new p5.Oscillator('sine');
	carrier.amp(1); // set amplitude
	carrier.freq(frequency); // set frequency
	carrier.start(); // start oscillating
	frameRate(30);
}

function draw() {
	frequency += random(-10, 10); // vary frequency using brownian motion
	frequency = constrain(frequency, 100, 500);
	console.log(frequency);
	carrier.freq(frequency);
}
