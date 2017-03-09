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
- Look up any functions you are not familiar with in the [p5.js reference](http://p5js.org/reference)

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


# In-class Challenge

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. Don't skip any.

Time | Comment
--- | ---
First 13 in 20 Minutes | Good
All in 20 Minutes   | Great
All in 15 Minutes   | Tops!
All in 10 Minutes | Hot Dang!



## Modify the Basic Example
1. Change the image resolution to `20x20`
2. Change the image resolution to `500x500`
3. Change the image resolution back to `10x10`
4. Make each pixel a random shade of blue.
5. Make each pixel a random shade of gray.

## Modify the Gradient Example
6. Make a horizontal black to blue gradient.
7. Make a vertical green to black gradient.
8. Make a horizontal white to blue gradient.
9. Make a vertical rainbow gradient. Tip: `colorMode()`
10. Create an inset square with a gradient, surrounded by randomly colored pixels.

## Modify the Third Example
11. Change the image resolution to `50x50`, adjust scatter to fill.
12. Instead of drawing single pixels, draw little `+` marks at random locations.
13. Make each `+` a random color.

## Challenging Challenges
14. Color each pixel with `noise()` to visualize its values.
15. Make a radial gradient from black to red. Tip: `dist()`
16. Create a diagonal gradient.
17. Use `sin()` to create a repeating black to red to black color wave.
18. Create a `128x128` image and set the blue value of each pixel to `(y&x) * 16`


# Reading Pixel Data

<img src="sketches/world.png" style="image-rendering: pixelated;">

## Read Pixels Example 1
<a href="./sketches/read_pixels.js" class="p5_example show-lab show-lab-link hidden">read_pixels</a>



Let's look at the example above in depth:

First we need to load an image to read pixel data from.

**Line 3** declares a variable to hold our image.

**Line 5** begins the `preload()` function. Use this function to load assets.

**Line 6** loads the image.

With our image in hand we can process the pixels.

**Lines 18 + 19** sets up a loop like in the writing examples above.

**Line 20** uses `get()` to load the color data of the current pixel. `get()` returns an array like `[255, 0, 0, 255]`. That would be a red, fully alpha'd color.

**Lines 22, 23, 24** accesses the red, blue, and green parts of the color.

**Line 25** codereates the new color for the pixel by multiplying the current color values with a random 0-1 value.

**Line 27** updates the pixel in the image data.

**Line 28** uses `updatePixels()` to tell the image there has been an update. We didn't need to do this in every pass through the loop when we were just setting pixels, but here we mix set and get and it appears this is now needed. This **might** be a bug in p5.js.


## Read Pixels Example 2
<a href="./sketches/read_pixels_2.js" class="p5_example show-lab show-lab-link hidden">read_pixels_2</a>

## Image as Input Example
<a href="./sketches/read_pixels_3.js" class="p5_example show-lab show-lab-link hidden">read_pixels_3</a>


# In-class Challenge 2

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. Don't skip any.

Time | Comment
--- | ---
First 12 in 20 Minutes | Good
All in 20 Minutes   | Great
All in 15 Minutes   | Tops!
All in 10 Minutes | Hot Dang!

## Modify Example 1
1. Colorize the white pixels with a vertical black to red gradient.
2. Colorize the black pixels with a vertical black to green gradient.
3. Feed the program you made above a grayscale or color image (under 100x100). You'll have to do this in your own editor, you'll need a local server.

## Modify Example 2
4. Change the color comparison to `>`.
5. Change the color comparison to `!=`.
6. Change `out_color` to an average of the two color samples.
7. Feed the program you made above a grayscale or color image (under 100x100).

## Modify Example 3
8. Invert the drawing, so that circles appear where the input pixels are black.
9. Feed the program you made above a grayscale or color image (under 100x100).
10. Make the circles scale in proporiton to the ligtness

## Challenging Challenges
13. Color each pixel with `noise()` to visualize its values.
14. Make a radial gradient from black to red. Tip: `dist()`
15. Create a diagonal gradient.
16. Use `sin()` to create a repeating black to red to black color wave.
17. Create a `128x128` image and set the blue value of each pixel to `(y&x) * 16`


# The Canvas + Pixel Density
When accessing the pixel data of the canvas itself, you need to consider the pixel density p5 is using. By default p5 will create a 2x resolution canvas when running on a high-dpi (retina) display. You can call `pixelDensity(1)` to disable this feature. If you don't, you'll need to take into account the density when calculating a position in the `pixels[]` array.

The examples on this page work with the pixels of images instead of the canvas to avoid this issue all together.

# Performance





# Study Example
![cf.png](./sketches/cf.png)
<a href="./sketches/grass.js" class="p5_example show-lab show-lab-link hidden">grass</a>


## Misc Links
[Reaction Diffusion in Photoshop](https://vimeo.com/61154654)
[Factorio](http://store.steampowered.com/app/427520/)
