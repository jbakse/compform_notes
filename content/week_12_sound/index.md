---
title: Week 12 - Sound
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

# Assignment

## Challenge:



<a href="./examples/sketch_sound/sketch.js" class="p5_example show-lab show-lab-link hidden">sketch_sound</a>


# sketch_oscilator

- Change the frame rate to 4 fps
- Change the `random` call to choose from (-50, 50)
- Use an `if/else` statement to make a 50/50 chance of either adding or subtracting 20 hz from the frequency
- Modify the `if/else` above to either multiply or divide the frequency by 1.2.
- Try changing the oscillator type from `sine`, to `triangle`, `sawtooth`, and `square`
- Change the (nearly) last line to `myOscillator.freq(frequency, .1);`

# sketch_modulator

https://p5js.org/examples/sound-frequency-modulation.html

- change the carrier frequency to 440; change it back
- change the modular frequency to 5, then try .1; change it back
- change the modulator amplitude to 10, then try 1000; change it back
- try changing the shape of the carrier oscillator
- try changing the shape of the modulator oscillator


# sketch_loop

- remove one of the loops
- make a loop over just "big trouble"
- make the loop play twice as fast. tip: [rate()](https://p5js.org/reference/#/p5.SoundFile/rate)
- make it play backwards
- make it play when the user clicks.


# challenging chellenges
- make a sketch that plays random chords (where chords are any two tones at the same time)
- make a sketch that plays a series of ascending tones, then starts back at a low tone.
- add a third oscillator to the modulator example. Have the new oscillator change the frequency of the modulator. Basically chain one modulator into another.


# final thought

Look at the sound examples. Consider choosing one to spin off into a sketch.
