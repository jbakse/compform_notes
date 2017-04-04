---
title: Week 10 - Vector Drawing
toc: show
---

[Today's Plan](plan.html)

# Today's Groups

Group 	| Members
---		| ---
A		| ?
B		| ?
C		| ?
D		| ?
E		| ?


# Homework Review
- A: Spirograph
- B: Paradigm Shift (Turtles)
- C: Node Based Programming
- D: Visualizer Challenge
- E: Animal Challenge

# Today's Learning Objectives

- Vector vs Raster Data
- Intro to [Paper.js](http://paperjs.org/)
- Creating Vector Data w/ Paper.js
- Exporting Vector Data w/ Paper.js

# Assignment

Keep Sketching!

Explore using Paper.js. Focus this week on creating vector-based images. I highly encourage you to use a hybrid workflow this week: starting with code in paper.js but finishing with manual work in Illustrator.

**Required: Choose One**

Option 1: Expand one of your sketches into a poster. Your poster must be printed in color at 24"x24" or greater. Your poster should promote a specific event (of your choosing) and must include a generative vector element and text describing the title, date, and location of the event.

Option 2: Expand one of your sketches into a laser cut artifact. This can be anything you like as along as it combines generative vector data and laser cutting/etching.

For either option, create two sketch posts. The first post will show the vector data created by your code. The second post should show photo documentation of your final poster/laser-cut. **Complete both posts before our next class, and bring your poster/laser-cut to class.**

## Challenge

TBD

# Paper.js

> [Paper.js](http://paperjs.org/) is an open source vector graphics scripting framework that runs on top of the HTML5 Canvas.  It offers a clean Scene Graph / Document Object Model and a lot of powerful functionality to create and work with vector graphics and bezier curves, all neatly wrapped up in a well designed, consistent and clean programming interface.
— [About Paper.js](http://paperjs.org/about/)


- [Paper.js: Features](http://paperjs.org/features/)
- [Paper.js: Examples](http://paperjs.org/examples/)
- [Paper.js: Tutorials](http://paperjs.org/tutorials/)
- [Paper.js on Github](https://github.com/paperjs/paper.js)
- [Download](http://paperjs.org/download/)

PaperScript is an extension of JavaScript with a few added features that make working with Paper.js less verbose. Specifically PaperScript offers *operator overloading* allowing you to use the mathematic operators (`+ - * / %`) on Paper.js `Point` and `Size` objects.

```
var pointA = new Point(5, 10);
var pointB = new Point(15, 20);
var sum;

// legal in PaperScript, not in Javascript
sum = pointA + pointB;

// legal in Javascript
sum = pointA.add(pointB);
```

## Basic Example
<div class="sketch" style="width: 100%; height: 520px;">
<iframe class="figure" height="520" src="./basic_example/index.html"></iframe>
</div>

```javascript
var center = new Point(250, 250);

var path = new Path();
path.strokeColor = 'red';
path.moveTo(center + [-100, -100]);
path.lineTo(center + [100, 100]);

path = new Path(); // what happens if you revove this?
path.strokeColor = 'green'; // what happens if you remove this? what happens if you move it after moveTo/lineTo
path.moveTo(center + [100, -100]);
path.lineTo(center + [-100, 100]);
```

## Basic Example 2
<div class="sketch" style="width: 100%; height: 520px;">
<iframe class="figure" height="520" src="./basic_example_2/index.html"></iframe>
</div>

```javascript
var center = new Point(250, 250);

var rectangle1 = new Rectangle(new Point(100, 100), new Size(300, 300));
var path1 = new Path.Rectangle(rectangle1);
path1.strokeColor = 'red';
path1.rotate(45);

var rectangle2 = new Rectangle(new Point(0, 100), new Size(250, 300));
var path2 = new Path.Rectangle(rectangle2);
path2.strokeColor = 'green';

var comboPath = path1.subtract(path2);
comboPath.style = {
    strokeColor: 'black',
    fillColor: '#ccf',
    strokeWidth: 4,
    dashArray: [10, 4],
    shadowColor: new Color(0, 0, 0, .5),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5),
}
```

## Exporting SVG
[Mike Chambers: Saving an SVG File from Paper.js](http://www.mikechambers.com/blog/2014/07/01/saving-svg-content-from-paper.js/)

```
function downloadAsSVG(fileName) {

   if(!fileName) {
       fileName = "output.svg"
   }

   var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));

   var link = document.createElement("a");
   link.download = fileName;
   link.href = url;
   link.click();
}
```

# In Class Challenge

# In-class Challenge 2

Explore using paper.js by modifying the scripts above. Work through the following challenges in order. Don't skip any.

Start by downloading the files for the examples above.

## Modify Example 1
1. Make both lines 8 pixels wide and blue.
2. Set the `.strokeCap` of the lines to `'round'`
3. Make 50 lines with random start and end points using a for loop.
4. Make the lines 5 pixels wide and green.
5. Give each line a random width and color.

## Modify Example 2
6. Make the green square 500 pixels wide.
7. Change the function that creates comboPath from `subtract` to `unite`
8. Change it again to `intersect`
9. Change the green square to an ellipse.
10. Remove the green and red shape, leaving only the compound shape. Tip: `.remove()`


## Challenging Challenges
11. Starting from scratch, draw a very simple stick figure.
12. Create a compound shape from three shapes using the boolean operations(`unite`, `intersect`, `subtract`, etc). Tip: You'll need to do this in two steps.
13. Create the drawing below.


<div class="sketch" style="width: 100%; height: 520px;">
<iframe class="figure" height="520" src="./challenge/index.html"></iframe>
</div>
