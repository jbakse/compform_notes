// A very basic paper.js example

var center = new Point(250, 250);

var path = new Path();
path.strokeColor = 'red';
path.moveTo(center + [-100, -100]);
path.lineTo(center + [100, 100]);

path = new Path(); // what happens if you revove this?
path.strokeColor = 'green'; // what happens if you remove this? what happens if you move it after moveTo/lineTo
path.moveTo(center + [100, -100]);
path.lineTo(center + [-100, 100]);
