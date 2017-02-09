var machines = [
	"Planet Generator",
	"Grocery-Shopping bot",
	"Internet Surveillance Front-End",
	"Genetic Pet Builder",
	"Love Potion Mixer",
	"Fake Passport Machine",
];

var users = [
	"A Daily User",
	"A One-time User",
	"A Child",
	"A [machine type] enthusiast",
	"Another machine",
	"You",
];

var i = 0;

function setup() {
	createCanvas(800, 800);
	machines = shuffle(machines);
	users = shuffle(users);
}

function draw() {
	background(50, 25, 25);
	fill(200);

	textAlign(CENTER);

	textSize(20);
	text("Click for Prompt", width * .5, 100);

	noLoop();
}

function mousePressed() {
	prompt();
}
function prompt() {
	background(50);
	fill(200);
	console.log("A " + machines[i] + " for a " + users[i]);

	textAlign(CENTER);

	textSize(20);
	text("A", width * .5, 100);

	textSize(50);
	text(machines[i], width * .5, 175);

	textSize(20);
	text("for", width * .5, 240);

	textSize(50);
	text(users[i], width * .5, 325);

	i = ++i % 6;

}
