// makes a terrible noise


var carrier, modulator;

function setup() {
	createCanvas(400, 400);

	carrier = new p5.Oscillator('sine');
	carrier.amp(1); // set amplitude
	carrier.freq(440); // set frequency
	carrier.start(); // start oscillating

	modulator = new p5.Oscillator('sine');
	modulator.amp(100); // set amplitude
	modulator.freq(1); // set frequency
	modulator.start(); // start oscillating
	modulator.disconnect();

	carrier.freq(modulator);

	// reverb = new p5.Reverb();
	// reverb.process(carrier, 3, 2);

}

function draw() {


}
