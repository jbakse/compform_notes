---
title: Week X - X
toc: show
---

#### Today's Groups

Group 	| Members
---		| ---
A		| ?


# Today's Learning Objectives
- Critically consider the boundaries of games
- Introduce the p5.play library

# Assignment
Keep Sketching!

Make some (micro) games. Explore making games with as little complexity as possible.


## Challenge: Couch Co-op
Cooperative games are games where two or more players work together to achieve a goal. Pandemic, Forbidden Island, and Hanabi are great co-op board games. Portal 2, Lovers in a Dangerous Spacetime, Gauntlet, and Towerfall a great co-op video games.

Couch Co-op games are local multiplayer video games, where two people play together in the same room (on the same couch).

For this challenge create a couch co-op micro-game!


# What is a Game?

Many interactive artifacts fall into the categories of Games, Toys, or Tools. What is the difference?

- Break into teams.
- In teams, list 10 factors common to games.
- Order lists by importance.
- As a class, compare lists.
- Compare factors to list of interactive artifacts.

Legos, Monopoly, Soccer, Photoshop, A Hammer, A Top, Dolls, Chess, Mario Brothers, Pac-man, Telephone,


# Microgames

**Minigames** a small videogames included within a larger video game. These are often included to add variety to the larger game. They may also be included as easter-eggs.

- [Grand Theft Auto, Bowling](https://www.youtube.com/watch?v=jPdqIekEg1U)

**Microgames** are less common. Microgames are tiny games, stripped down to the bare essentials, and playable in a few seconds. The WarioWare series of games from Nintendo creates a frantic experience by stringing together dozens of microgames in rapid succession.

- [Microgames @ Wikipedia](https://en.wikipedia.org/wiki/Wario_(franchise))
- [WarioWare, Inc](https://www.youtube.com/watch?v=zm3cWWH6dAE)


# p5.Play

The [p5.play](http://p5play.molleindustria.org/) library adds functionality to p5.js that supports creating video-games.

- Sprites
- Image sequence animation
- Basic physics
- Basic collision detection
- Basic collision response

Take a look at the [examples](http://p5play.molleindustria.org/examples/index.html) and the [docs](http://p5play.molleindustria.org/docs/classes/Sprite.html).


## Example 1—Sprites
<div class="sketch" style="width: 100%; height: 320px;">
<iframe class="figure" height="300" src="./examples/sprites"></iframe>
</div>

```javascript
var sprite1, sprite2;

// art from opengameart.org

function setup() {
    createCanvas(600, 300);

    var kingImage = loadImage("king.png");
    var guyImage = loadImage("guy.png");


    sprite1 = createSprite(200, 150, 100, 100);
    sprite1.addImage("main", kingImage);
    sprite1.scale = 4;

    sprite2 = createSprite(400, 150, 100, 100);
    sprite2.addImage("main", guyImage);
    sprite2.scale = 4;
    sprite2.addSpeed(1, 180);
}


function draw() {
    background(50, 50, 80);
    noSmooth();
    drawSprites();
}
```

## Example 2—Interaction


<div class="sketch" style="width: 100%; height: 320px;">
<iframe class="figure" height="300" src="./examples/interaction"></iframe>
</div>

```javascript
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
```

# In-Class Challenges

Download the [example files](examples.zip). Complete the following challenges.

## Modify Example 1
- Comment out the `addImage` lines. See what happens. Put them back.
- Change the size parameters on `createSprite`. What happens?
- The kid in green is running backwards. Fix that. Tip: `mirrorX`
- Make the king run to the right.

## Modify Example 2
- Comment out the `mouseActive` line. See what happens. Put it back.
- Make the king spin when the mouse is over him.
- Make the king spin when the mouse is NOT over him.
- Make the king spin when he is clicked, and stop when clicked again.

## Challenging Challenges
- With Example 1: Make the king and the kid in green run towards each other. Make them stop when they collide. Tip: `overlap()`
- With Example 1: Make the king and the kid in green chase the cursor. Make the kid much faster than the king. Optional: use the collision system to prevent the kid and the king from overlapping.
- With Example 2: Remove the king from the scene when he is clicked. Start the scene with 10 kings.
- Start making microgames!
