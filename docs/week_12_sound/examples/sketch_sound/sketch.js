// makes a terrible noise

var frequency = 220;

function setup() {
	createCanvas(400, 400);

	carrier = new p5.Oscillator('sine');
	carrier.amp(1); // set amplitude
	carrier.freq(frequency); // set frequency
	carrier.start(); // start oscillating
	frameRate(4);
}

function draw() {
	frequency += random(0, 50); // vary frequency using brownian motion
	// frequency = constrain(frequency, 100, 500);
	if (frequency > 500) frequency = 100;

	console.log(frequency);
	carrier.freq(frequency);
}
