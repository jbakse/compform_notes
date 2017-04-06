// Draws a path with paper.js, exports as svg for further work in illustrator.
var p = new Point(250, 250);

var path = new Path();
path.strokeColor = 'black';
path.moveTo(p);


for (var i = 0; i < 200; i++) {
    var dX = 1;
    var dY = 1;
    if (Math.random() < .5) {
        dX = -1;
    }
    if (Math.random() < .5) {
        dY = -1;
    }
    // if (p.x > 480) {
    //     dX = -1;
    // }
    // if (p.x < 20) {
    //     dX = 1;
    // }
    // if (p.y > 480) {
    //     dY = -1;
    // }
    // if (p.y < 20) {
    //     dY = 1;
    // }
    p = p + [dX * 20, dY * 20];
    path.lineTo(p);
}

// downloadAsSVG();


// downloadAsSVG from
// http://www.mikechambers.com/blog/2014/07/01/saving-svg-content-from-paper.js/
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
