---
title: Week 7 - Pixels
toc: show
---

#### Today's Groups

Group 	| Members
---		| ---
A		| Talia, Jane
B		| Dorothy, Sachi
C		| Jonathan, Bateel
D       | Amber, Sanie
E		| Jennifer, Danielle
F       | Kim, Gabriel


# Thoughts

- Render times _are_ long.
- Exploring sketches that take a long time to render is good!
- If you sketches ran in real-time, you didn't ask them to do enough.
- Jonathan + Dorothy ran into a bug.
- Keep your resolutions down. Videos should be < 1280x720. Images should be < 1920 x 1080.

### Study Tips (from me)
- Don't expect to leave a class understanding the topics introduced. Expect to have gaps in your understanding. Learning is mostly a pull process, understanding comes from applying concepts through practice. My primary goal in class is to introduce material and make it clear what you need to learn. You need to learn it in the space between classes.
- Review the class notes one or two days after the lecture.
- In particular, **read** the code. Make sure you understand it fully, line-by-line.
- Start your assignment (make your first sketch) one or two days after the lecture. Look for concepts you don't understand. This will give you more time for both self-study and seeking help.
- Use your first sketches to practice and learn the concepts introduced each week.
- User your later sketches to explore the possibilities of the concepts.
- Team up. I encourage you to team up and work on a sketch in a pair.
- Incorporate your strengths. Do you paint or illustrate? Make music? Love working type? Bring those skills to your work. This will make both *your work* and *your skills* stronger.

### Studty Tips (from you)
- **Plan** What is your goal for the sketch? Name the thing to learn, explore, show. Make a sketch for your sketch. *Dorothy 9:52*
- **Program** Get in, get your hands dirty. *Dorothy 2:20*
- **Polish** Color, Size, Composition, Sound, Background, Overlay, Type, Context *Sachi 1:55, Talia 11:47, Jane 2:34*
- **Test/Reflect** What's good? What's not? What's interesting? What can you take into the next sketch? *Amber 2:24, Sachi 11:26, Talia Maps*
- **Repeat** Build on your successes. Build on your failures.


# Homework Review

1. 😍 🤓 😂
2. Look at the work you and your partner created this week. Choose 1 sketch of your partner's that is interesting and deserves more polish.
    1. Write down the primary strength of the piece. Be specific.
    2. Write down the primary weakness of the piece. Be specific.
    3. Write down 5 suggestions for how to polish the sketch. Be specific and clear.

Be prepared to present your assessment and suggestions to the class. You will have 30 seconds.


# Pixel Processing Examples
[Pixel Processing Examples](http://psam3060-d-s16.github.io/class_notes/week_3/slides.html)




# Today's Learning Objectives
- Plan, Program, Polish, Test/Reflect, Repeat
- How to read and write pixel values (p5)
- Common Applications: Image Generation, Image Processing, Image Inputs
- Pixel Layout (p5) and accessing the `pixel[]` data directly.

# Reading
- Review each sample sketch featured on this site.
- Look up any functions you are not familiar with in the [p5.js reference](http://p5js.org/reference)

# Assignment
Sketch! Explore working with images pixels.

Post *at least one* sketch *for each* of the following:
- Generate an image from scratch: pixel by pixel. Don't call any high level drawing function like `ellipse()` or `rect()`.
- Load an image and process its pixels. Show the result.
- Use an image as an input source to control a drawing. Don't show the original image, just the output.

This week, most of your posts should be still images. You might also consider creating animations. Since p5 pixel access is slow, this technique will pair well with pre-rendering.


## Optional Challenge: Ouroboros
Create code that processes an image. Feed the result back into your code. Repeat. What happens after several generations? Post your source image, the result after one generation, and the result after several generations. Alternately, capture 90 generations as frames and post as a video.


# Writing Pixel Data

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
< 13 in 20 Minutes | You need to put in some extra work to strengthen your programming understanding.
13 in 20 Minutes | Good.
All in 20 Minutes   | Great.
All in 15 Minutes   | Hot Dang!




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


<img src="sketches/world_100.png" style="image-rendering: pixelated;">


# In-class Challenge 2

Explore using p5's pixel manipulation functions by modifying the scripts above. Work through the following challenges in order. Don't skip any.

Time | Comment
--- | ---
< 10 in 20 Minutes | You need to put in some extra work to strengthen your programming understanding.
10 in 20 Minutes | Good.
All in 20 Minutes   | Great.
All in 15 Minutes   | Hot Dang!

## Modify Example 1
1. Colorize the white pixels with a vertical black to red gradient.
2. Colorize the black pixels with a vertical black to green gradient.
3. Feed the program you made above a grayscale or color image (under 100x100). You'll have to do this in your own editor, you'll need a local server.

## Modify Example 2
4. Change the color comparison to `>`.
5. Change the color comparison to `!=`.
6. Change `out_color` to an average of the two color samples.
7. Feed the program you made above the grayscale earth image above.

## Modify Example 3
8. Invert the drawing, so that circles appear where the input pixels are black.
9. Feed the program you made above the grayscale earth image above.
10. Use lightness to drive the circle sizes.

## Challenging Challenges
11. Start with the original Example 2 code, without your changes. Set `out_color` to the average of `this_color` and `below_color`.
12. Change `worldImage.set(x, y, out_color);` to `worldImage.set(x, y+1, out_color);`.
13. Remove the conditional statement (keep its contents).

# The Canvas + Pixel Density
When accessing the pixel data of the canvas itself, you need to consider the pixel density p5 is using. By default p5 will create a 2x resolution canvas when running on a high-dpi (retina) display. You can call `pixelDensity(1)` to disable this feature. If you don't, you'll need to take into account the density when calculating a position in the `pixels[]` array.

The examples on this page work with the pixels of images instead of the canvas to avoid this issue all together.

# Performance

The built-in p5 `someImage.get(x, y)` function gets the RGBA values of a pixel in an image. As noted in the [reference](https://p5js.org/reference/#/p5/get), the get call is slower than accessing the values in the `.pixels` array directly. In fact, `get()` can be 1000s of times slower. You can use the following function to grab the pixel values more quickly.

```javascript
// find the RGBA values of the pixel at x, y in the img.pixels array
// use instead of p5s built in .get(x,y), for much better performance (more than 1000x better in many cases)
// see: http://p5js.org/reference/#/p5/pixels[]
// we don't need to worry about screen pixel density here, because we are not reading from the screen

function getQuick(img, x, y) {

	var i = (y * img.width + x) * 4;
	return [
		testImage.pixels[i],
		testImage.pixels[i+1],
		testImage.pixels[i+2],
		testImage.pixels[i+3],
	];
}
```

Copy the `getQuick()` function above into your sketch. You can then replace a built in p5 `get` call with a call to `getQuick`:

```javascript
c = img.get(x, y);
```

becomes

```javascript
c = getQuick(img, x, y);
```



# Study Example
![cf.png](./sketches/cf.png)
<a href="./sketches/grass.js" class="p5_example show-lab show-lab-link hidden">grass</a>


## Misc Links
[Reaction Diffusion in Photoshop](https://vimeo.com/61154654),
[Factorio](http://store.steampowered.com/app/427520/),
[Icon Machine](http://brianmacintosh.com/iconmachine/)
