var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var position = 0;

function setup() {

	createCanvas(windowWidth, windowHeight);
	noLoop();

	noStroke();
	fill(255, 255, 255);

    values = shuffle(values);
}

function draw() {



	background(200,200,210);
    fill(100);

    let x = 0;
    for (x = 0; x < windowWidth; x+=20) {

        let buildingHeight = floor(pickHeight()) * 10;
        rect(x, windowHeight * .5 - buildingHeight, 20, buildingHeight);
    }

    fill(150);
    rect(0, windowHeight*.5, windowWidth, windowHeight*.5);
}

function pickHeight() {
    // even
    return random(0, 10);

    // low
    // return min(
    //     random(0, 10),
    //     random(0, 10),
    //     random(0, 10),
    //     random(0, 10)
    // );

    // high
    // return max(
    //     random(0, 10),
    //     random(0, 10),
    //     random(0, 10),
    //     random(0, 10)
    // );

    // normal
    // return (
    //     random(0, 10)+
    //     random(0, 10)+
    //     random(0, 10)+
    //     random(0, 10)
    // ) * .25;

    // return valueFromDeck();
}




function valueFromDeck() {
	// find the value at the current position in the deck
	var v = values[position];

	// change the position for next time
	position++;

	// if we run out of "cards", shuffle and start over from the top
	if (position > 9) {
		values = shuffle(values);
		position = 0;
	}

	// return the value
	return v;
}
