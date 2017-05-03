var sprite1;

// art from opengameart.org
// https://opengameart.org/content/a-platformer-in-the-forest

function setup() {
    createCanvas(600, 300);

    var kingImage = loadImage("king.png");

    sprite1 = createSprite(200, 150, 100, 100);
    sprite1.addImage("main", kingImage);
    sprite1.scale = 4;
    sprite1.mouseActive = true;

}


function draw() {
    background(50, 50, 80);

    if(sprite1.mouseIsOver)
        sprite1.rotation = -20;
    else{
        sprite1.rotation = 0;
    }

    noSmooth();
    drawSprites();
}
