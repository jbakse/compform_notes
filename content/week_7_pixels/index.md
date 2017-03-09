---
title: Week 7 - Pixels
toc: show
---

[Today's Plan](plan.html)

#### Today's Groups

Group 	| Members
---		| ---
A		| ?


# Homework Review
- A: Choose a common theme that has appeared in several pieces. Discuss the theme and one example sketch.
- B: Choose a work that you 1) like and 2) are unsure how it was made. Describe what you see.

# Today's Learning Objectives
- How to read and write pixel values (p5)
- Common Applications: Image Generation, Image Processing, Image Inputs
- Pixel Layout (p5) and accessing the `pixel[]` data directly.

# Reading
- Review each sample sketch featured on this site.
- Look up any functions you are not familiar with in the [p5.js reference](http://p5js.org/reference

# Assignment
Sketch! Explore working with images pixels.

Post at least one sketch for each of the following:
- Generate an image from scratch: pixel by pixel. Don't call any high level drawing function like `ellipse()` or `rect()`.
- Load an image and process its pixels.
- Use an image as an input source to control a drawing.

This week, most of your posts should be still images. You might also consider creating animations. Since p5 pixel access is slow, this technique will pair well with pre-rendering.


## Optional Challenge: Ouroboros
Create code that processes an image. Feed the result back into your code. Repeat. What happens after several generations? Post your source image, the result after one generation, and the result after several generations.


# Working With Pixel Data in p5

## A Basic Example

<a href="./sketches/basic_pixels.js" class="p5_example show-lab show-lab-link hidden">basic_pixels</a>

Let's look at the example above in depth:

**Line 8** uses `createImage()` to create a new, empty image in memory. We can draw this image just like an image lowed from a `.jpg` or `.gif`.

**Line 9** uses `loadPixels()` to tell p5 that we want to access the pixels of the image for reading or writing. You must call `loadPixels()` before using `set()`, `get()`, or the `pixels[]` array.

**Lines 11 + 12** sets up a nested loop. The inner content of the loop will be run once for every pixel.

**Line 13** uses the `color()` function to create a color value, which is assigned to `c`. Color values hold the R, G, B, and A values of a color. The color function takes into account the current `colorMode()`.

**Line 14** uses `set()` to set the color of the pixel at `x, y`.

**Line 18** uses `updatePixels()` to tell p5 we are done accessing the pixels of the image.

**Line 20** uses `noSmooth()` to tells p5 not to try to smooth the image when we scale it. This is like telling photoshop to use 'nearest neighbor' when scaling an image.

**Line 21** draws the image, filling the canvas so we can clearly see each pixel.


## A Gradient Example

<a href="./sketches/basic_pixels_2.js" class="p5_example show-lab show-lab-link hidden">basic_pixels_2</a>

This example has the same structure as the first one, but draws a gradient pixel-by-pixel.


## A Third Example

<a href="./sketches/basic_pixels_3.js" class="p5_example show-lab show-lab-link hidden">basic_pixels_3</a>

The first two examples use a nested loop to set a value for every pixel in the image. This pattern often used in pixel generating and processing scripts, but not always. This example places red pixels at random places on the image.


# In-class Challenges

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order.

# Modify the Basic Example
- Change the image resolution to `20x20`
- Change the image resolution to `500x500`
- Change the image resolution back to `10x10`
- Make each pixel a random shade of blue.
- Make each pixel a random shade of gray.

# Modify the Gradient Example
- Make a horizontal black to blue gradient.
- Make a vertical black to green gradient.
- Make a horizontal white to blue gradient.
- Make a vertical rainbow gradient. Tip: `colorMode()`
- Create an inset square with a gradient, surrounded by randomly colored pixels.

# Modify the Third Example
- Change the image resolution to `50x50`
- Instead of drawing single pixels, draw little `+` marks at random locations.
- Make each `+` a random color.

# Challenging Challenges
- Color each pixel with `noise()` to visualize its values.
- Make a radial gradient from black to red.
- Create a diagonal gradient.
- Use `sin()` to create a repeating black to red to black color wave.
- Create a `128x128` image and set the blue value of each pixel to `(y&x) * 16`


## The Canvas + Pixel Density
When accessing the pixel data of the canvas itself, you need to consider the pixel density p5 is using. By default p5 will create a 2x resolution canvas when running on a high-dpi (retina) display. You can call `pixelDensity(1)` to disable this feature. If you don't, you'll need to take into account the density when calculating a position in the `pixels[]` array.

The examples on this page work with the pixels of images instead of the canvas to avoid this issue all together.








## Helper functions

`getRed(img, x, y)`
`getGreen(img, x, y)`
`getBlue(img, x, y)`
`getAlpha(img, x, y)`
`getColor(img, x, y)`

`setRed(img, x, y)`
`setGreen(img, x, y)`
`setBlue(img, x, y)`
`setAlpha(img, x, y)`
`setColor(img, x, y)`


## Misc Links
[Reaction Diffusion in Photoshop](https://vimeo.com/61154654)
[Factorio](http://store.steampowered.com/app/427520/)
