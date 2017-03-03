---
title: Week 6 - Animation
toc: show
---

[Today's Plan](plan.html)

#### Today's Groups

Group 	| Members
---		| ---
A		| Bateel, Jonathan, Enayet, Sanie
B		| Danielle, Jane, Kim
C		| Sachi, Dorothy, Gabriel
D		| Jennifer, Amber, Talia

# Homework Review

- A: Choose your favorite take on the dot or line challenge. Discuss.
- B: Choose a 😍. Discuss.
- C: Choose a 🤓. Discuss.
- D: Choose a work that you 1) like and 2) are unsure how it was made. Describe what you see.

# Today's Learning Objectives
- Real-time vs Pre-rendered
- Time sources for Real-time and Pre-rendered animations
- Periodic Functions + Time + Keeping a Beat
- Exporting and Stitching frames
- 🔥**Bonus**🔥 The Transformation Stack

# Assignment

Keep Sketching!

Post 5 sketches that explore using code to create smooth, pre-rendered animations.

You may work on one idea over multiple sketches, but: post work-in-progress as you go and don't work on at least three different ideas this week.

## Challenge: Three Second Comp Form Bumper

Create a three second bumper for Computational Form.

- Should be exactly 3 seconds. 90 frames @ 30fps
- Should have a clear progression: beginning, middle, end.
- Should feature either the text "Compform" or "Computational Form"
- Consider including the three-triangle Sierpinski icon
- Consider including music or sound
- Consider submitting multiple takes on this challenge

Reference:
[My MTV](https://vimeo.com/51716890)
[MTV Fantastic Four](https://vimeo.com/151623595)
[Pub](https://vimeo.com/91392344)
[Much](https://vimeo.com/17663706)
[Nick](https://vimeo.com/71789191)


# Quick Gallery

- [Two Minute Papers: Digital Creatures](https://www.youtube.com/watch?v=LmYKfU5O_NA)
- [Fluctuating Rocks](https://www.youtube.com/watch?v=fDyreCOa5co)
- [Houdini Customer Reel](https://vimeo.com/175730831)
- [Marcin Ignac](https://vimeo.com/marcinignac)
- [Bagatelle I](https://vimeo.com/20239515)

# Real-time vs Pre-rendered

When talking about rendering animation:
- Real-time **doesn’t** mean fast.
- Real-time **does** mean created at the time it is used.
- Real-time has multiple meanings. So, fine, sometimes it does mean fast.

The most important aspect of real-time animation is that the frames displayed are generated as they are being displayed. For animation to appear smooth, frame rates must be relatively high. Typical animation frame rates are 24 or 30 fps. To achieve those rates, each frame of animation must be draw in about 30-40 milliseconds. VR applications target 90 fps, leaving only about 10 milliseconds to draw the scene.

In exchange for limiting how much time can be spent rendering each frame, we gain a huge benefit. Real-time animation can to information—including user input—not known ahead of time. This allows animation to be interactive.

However, limiting the time spent rendering each frame often means compromising on the quality or complexity of the animation. Pre-rendering provides its own huge benefit: pre-rendered animations can take as long as they need to render things. This allows for frames with very high quality and complexity.


# Clocks for Real-time vs Pre-rendered

## Using `millis()`

In real-time rendering it is common that the time between frames might vary. Some frames are simple and render faster, some are more complex and render relatively slowly. Some systems will simply wait a bit before showing a simple frame, to ensure that frames are displayed at an even rate. This doesn't always work out. Sometimes a frame take too long, misses the deadline, and leads to dropping frames.

Because you can not count of the frame rate being steady, it is best to measure time using a real-time clock source. The `millis()` function returns the number of milliseconds since the sketch started. [p5 reference](https://p5js.org/reference/#/p5/millis)

<a href="./sketches/millis.js" class="p5_example show-lab show-lab-link hidden">Millis</a>

Try changing the frame rate in the example above to 5 or 10. The animation becomes far less smooth, but the rate at which the ellipse bobs and changes color is unchanged.


## Using `frameCount`

If you are pre-rendering your animation, you don't care how long each frame takes. You know that the frames will be played back at a steady pace. For pre-rendered animation base time on the current frame. The `frameCount` variable holds the current frame being drawn. [p5 reference](https://p5js.org/reference/#/p5/frameRate)

<a href="./sketches/frameCount.js" class="p5_example show-lab show-lab-link hidden">Millis</a>

Try changing the frame rate in the example above to 5 or 10. The ellipse bobs and changes colors much more slowly now, but every frame needed for smooth playback is rendered.

# Deterministic Variation

If you use `random()` to create variation and you want that variation to be consistent between frames, you will need to use `random()` seed or switch to another strategy to create variation like using `noise()`.

# Keeping a Beat

When pre-rendering your animation you will often want to be able to convert the current frame number to the playback time. You can use `floor()` and modulo `%` for this.

## Using Modulo `%`

```
var targetFrameRate = 30;
var secondPart = floor(frameCount/targetFrameRate);
var framePart = frameCount % targetFrameRate;
```

You can also use Modulo to keep track of other rhythms.

```
// for a 30fps animation, beat will be 0 every 2 seconds.
var beat = frameCount % 60;
```

<a href="./sketches/modulo.js" class="p5_example show-lab show-lab-link hidden">Modulo</a>

Also note that the times above are related to the expected playback speed, even though p5 is rendering the animation faster than that.

## Using Sine `sin()`

The `sin()` function will give you a nice, periodic function that sweeps from -1 to 1 and back down. It is useful for *so many things*. For example, it is great at creating smooth changes over time.

```
// generate a sine wave with a period of one second
var s = sin(frameCount/targetFrameRate*2*PI);
```

<a href="./sketches/sin.js" class="p5_example show-lab show-lab-link hidden">Sine</a>


# Exporting Frames from p5
The `save()` function will create and download an image of the current frame of the sketch. This will trigger an avalanche of downloads. **It is a good idea to empty out your downloads folder** to make things easier to manage.

<a href="./sketches/save_frames.js" class="p5_example show-lab show-lab-link hidden">Save Frames</a>

# Stitching Frames
There are many applications that can take a sequence of frames and stitch them into a movie. [Quicktime 7](https://support.apple.com/kb/DL923?locale=en_US) works well. [FFmpeg](https://www.ffmpeg.org/) is a powerful command line utility for this and other video tasks. FFmpeg is a good choice for automated/back-end workflows. After Effects is a good choice if you are going to use the animation as part of a larger animated composition.

You can even do it with photoshop:
1. Open Photoshop.
2. Choose `File` > `Open`.
3. Click on the first file of your sequence.
4. Check `Image Sequence`.
5. From the Timeline dropdown menu choose `Render Video...`.
6. Adjust export settings.
7. Click `Render`

<video src="videos/render.mp4" poster="videos/render_0030.jpg" controls></video>
<video src="videos/render_color.mp4" poster="videos/render_color_0030.jpg" controls></video>
