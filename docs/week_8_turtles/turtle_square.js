// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(500, 500);

    noFill();
	stroke(255);
	background(50);

	myTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveTo(250, 250);

    // put the pen down to draw
    myTurtle.penDown();

    myTurtle.forward(100);



    noLoop();


}
