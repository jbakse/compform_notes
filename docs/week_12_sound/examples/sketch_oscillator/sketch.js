// makes a terrible noise

var frequency = 220;
var myOscillator;

function setup() {
	createCanvas(400, 400);

	myOscillator = new p5.Oscillator('sine');
	myOscillator.amp(1); // set amplitude
	myOscillator.freq(frequency); // set frequency
	myOscillator.start(); // start oscillating
	frameRate(2);


	// record(5000);


}

function draw() {
	frequency += random(-50, 50); // vary frequency using brownian motion
	frequency = constrain(frequency, 100, 500);

	console.log(frequency);
	myOscillator.freq(frequency);
}


// uses the p5 SoundRecorder and SoundFile classes to record the audio output.
// begins recording when called. records for _length_ time in milliseconds.
function record(length){
	var soundRecorder = new p5.SoundRecorder();
	var soundFile = new p5.SoundFile();
	soundRecorder.record(soundFile);
	setTimeout(function() {
		console.log("Recording Complete");
		soundRecorder.stop();
		save(soundFile, "output.wav");
	}, length);
}
