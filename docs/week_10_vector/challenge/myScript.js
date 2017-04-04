// A very basic paper.js example

var center = new Point(250, 250);

for (i = 0; i < 25; i++) {
    var w = 50 + i * 10;
    var rectangle1 = new Rectangle(center - new Point(w, w), new Size(w*2, w*2));
    var path1 = new Path.Rectangle(rectangle1);
    path1.strokeColor = new Color(1, 0, 0);
    path1.rotate(i * 4);
}
