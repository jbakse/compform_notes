



function setup() {
	createCanvas(600, 200);
	ellipseMode(CENTER);
	fill(200, 50, 100);
	noStroke();
}


function draw() {
	background(255);
	let n;

	stroke(0,0,0,50);

	for (var x = 15; x < width - 15; x += 1.5) {
		var offsetX = 0;
		var offsetY = 0;



		// lean (mid frequency, static)
		n = noise(x * .1);
		offsetX += n * 20 - 10;

		// height (very high frequency becomes fully random due to aliasing)
		offsetY += noise(x*100) * 20;


		// wind( low frequency, timed)
		n = noise(x * .01 + millis() * -.001);
		offsetX += n * 40;


		line(x, 190, x + offsetX, 100 + offsetY);

	}



}
