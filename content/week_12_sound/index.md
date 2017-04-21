---
title: Week 12 - Sound
toc: show
---

[Sketch Music](http://psam3060-d-s16.github.io/class_notes/week_9/sketch_music/)

# Today's Groups
<a href="./pairs.js" class="p5_example show-lab show-lab-link hidden">pairs</a>


# Homework Review
Choose one of your partner's sketches.

- Describe the sketch.
- Identify a successful feature of the sketch, explain why you chose it.
- Identify a weak feature, explain why you chose it.
- Suggest a "polishing move."


# Today's Learning Objectives
- Introduce the p5.js sound library.
- Show how to use the oscillator class to generate a tone.
- Show how to chain oscillators to create more complex sounds.
- Show how to interactively control an oscillator.
- Show how to play a pre-recored sound.
- Show how to capture sound output.

# For Example: Steve Reich
<div class="ratio-16-9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RaYvMwQd3cs" frameborder="0" allowfullscreen></iframe>
</div>

- [Steve Reich - Six Marimbas](https://www.youtube.com/watch?v=mLZelvSvh3A)
- [Steve Reich - Come Out](https://www.youtube.com/watch?v=g0WVh1D0N50)
- [Steve Reich - Its Gonna Rain](https://www.youtube.com/watch?v=vugqRAX7xQE)

# For Example: Yoko Ono
![Scream](https://s-media-cache-ak0.pinimg.com/736x/76/fd/4a/76fd4ae694014ee601970e9cde9b45f9.jpg)

# Assignment

Sketch!

This week explore the p5 sound library.
- Begin by completing today's challenges.
- Create some sketches using oscillators and sound file playback.
- Look at **all** of the [p5 sound examples](https://p5js.org/examples/) to get a sense of what is possible with the library.
- Consider digging deeper into the library (.FFT, .Amplitude, .AudioIn would all be good to explore with a sketch)


## Challenge: Comp Score

Find a ~30 second video clip, perhaps a commercial or movie scene. Use p5.js to create a sound track to play over the video clip. Consider muting your video or choosing a scene with dialog but no music.

# Study Examples and Challenges

[Download Example Sketches](./examples.zip)

## Example 1: sketch_oscilator

- Change the frame rate to 4 fps.
- Change the `random` call to choose from (-50, 50).
- Use an `if/else` statement to make a 50/50 chance of either adding or subtracting 20 hz from the frequency.
- Modify the `if/else` above to either multiply or divide the frequency by 1.2.
- Try changing the oscillator type from `sine`, to `triangle`, `sawtooth`, and `square`.
- Change the (nearly) last line to `myOscillator.freq(frequency, .1);`. Can you hear the difference?
- Instead of choosing frequencies at random, try feeding the position of the mouse into `.freq`

## Example 2: sketch_modulator

- Change the carrier frequency to 440; change it back.
- Change the modular frequency to 5, then try .1; change it back.
- change the modulator amplitude to 10, then try 1000; change it back.
- Try changing the shape of the carrier oscillator.
- Try changing the shape of the modulator oscillator.


## Example 3: sketch_loop

- Remove one of the loops.
- Make the sound loop over just the words "big trouble"
- Make the loop play twice as fast. Tip: [rate()](https://p5js.org/reference/#/p5.SoundFile/rate)
- Make it play backwards.
- Make it play when the user clicks.


## Challenging Challenges
- Make a sketch that plays random chords (where chords are any two tones at the same time)
- Make a sketch that plays a series of ascending tones, then starts back at a low tone.
- Make an instrument: something that accepts user input to control sound.
- Add a third oscillator to the modulator example. Have the new oscillator change the frequency of the modulator. Basically chain one modulator into another.


# Recording Sound Output


``` javascript
// uses the p5 SoundRecorder and SoundFile classes to record the audio output.
// begins recording when called. records for _length_ time in milliseconds.
function record(length){
	var soundRecorder = new p5.SoundRecorder();
	var soundFile = new p5.SoundFile();
	soundRecorder.record(soundFile);
	setTimeout(function() {
		console.log("Recording Complete");
		soundRecorder.stop();
		save(soundFile, "output.wav");
	}, length);
}
```


# Links
- [Duchamp - Erratum Musical](https://www.youtube.com/watch?v=Ok4aQ98kzNs), [Open Culture Article](http://www.openculture.com/2016/04/hear-marcel-duchamps-radically-conceptual-musical-compositions-1912-1915.html)

- [Zorn - Cobra](https://www.youtube.com/watch?v=UdNdSJUf_8I)

- [Algorithmic Music Generation with Recurrent Neural Networks](https://www.youtube.com/watch?v=0VTI1BBLydE)
- [Aleatoric Music](https://en.wikipedia.org/wiki/Aleatoric_music)
- [2 Minute Papers: RNN Writes Music and Shakespeare](https://www.youtube.com/watch?v=Jkkjy7dVdaY)
- [2 Minute Papers: RNN Writes About Images](https://www.youtube.com/watch?v=e-WB4lfg30M)
