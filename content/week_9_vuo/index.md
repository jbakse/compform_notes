---
title: Week 9 - Vuo
toc: show
---

[Player Piano](http://qiao.github.io/euphony/#15)



# Today's Learning Objectives
- Discuss the relationship between physics, computers, and human senses.
- Introduce Vuo

# Assignment

Keep Sketching!

This week explore using Vuo and node-based programming. The focus this week is on the tool rather than the form, so use Vuo to create whatever you like: images, animation, video processors, or interactive experiences.

## Challenge: Synesthesia
Create a Vuo sketch that creates a "music visualization", an animation driven by sound input. In today's lecture we discussed the relationship between computers and our senses of sound and vision. Can you create a visualization that allows us to see something in the music that is difficult to hear?

[Synesthesia](https://en.wikipedia.org/wiki/Synesthesia)


# Computers, Vision and Hearing


## Videos
- [ESD Safety](https://www.youtube.com/watch?v=RtlYi1yLTVQ)
- [Thermal Imaging](https://www.youtube.com/watch?v=1DiqL8iFD8g)
- [UV Imaging](https://www.youtube.com/watch?v=o9BqrSAHbTc)
- [Speaking Piano](https://www.youtube.com/watch?v=muCPjK4nGY4)
- [Richard Feynman on Light](https://www.youtube.com/watch?v=FjHJ7FmV0M4)


## Machines
- A bicycle, crank, chain, wheel.

## Electricity
- [Periodic Table](https://en.wikipedia.org/wiki/Periodic_table)
- [Electron Shells](https://en.wikipedia.org/wiki/Electron_shell) 2, 8, 18, 32, 50, 72
- [Copper](https://en.wikipedia.org/wiki/Copper) 2, 8, 18, 1
- [Carbon](https://en.wikipedia.org/wiki/Carbon) 2, 4
- [Ionization Energy](https://en.wikipedia.org/wiki/Ionization_energy)

- Conductive materials allow electrically charged particles to flow
- Charge particles with the same polarity repel each other
- Those particles can be pushed along by magnets (among other things)
- Those particles push into other particles, pushing them along.
- The pushing propagates very quickly, though the particles may progress slowly.
- The particles may just move a little bit back and forth.
- This all works backwards too, the moving charged particles can push back on magnets.

- Motor to Motor
- Motor to Light
- Motor to Speaker
- Switches

- [Electricity Misconceptions spread by K-6 Textbooks](http://amasci.com/miscon/elect.html)

## Switches + Logic

- Two Switch AND
- Two Switch OR
- Transistors


## Computers

- Computers are (very complex) physical machines.
- We build layers and layer of abstractions on these machines, but at their core they are physically rooted.
- Bits and Atoms are very different in some important ways, but computers are still made out of atoms.
- [Apple IIc](https://en.wikipedia.org/wiki/Apple_IIc) WDC_65C02, 11,500 transistors, 1.023 MHz
- I litterally can't understand the complexity of computers today.
- A modern CPU contains 1,000,000,000+ transistors [Transistor Count](https://en.wikipedia.org/wiki/Transistor_count)
- A GPU may have 10,000,000,000
- Runs at 2,3,4+ GHz
- Squeezed into ~250mm2
- Transistors are ~20 nm
- A hair is about 75 μm wide.
- 3750

## Inputs and Outputs
- All these switches just do the same thing as our physical switches, they allow/block the passage of electric current.
- They can allow current to flow to LED's in your monitor
- They can allow current to flow to the speakers
- They can allow current to flow to ports
- They can allow current to flow into an antenna.
- The switches are controlled by current.
- Current coming from physical switches on your keyboard.
- Sent from other devices like your mouse.
- Stimulated in photo-sensitive sensors in a digital camera.
- By a magnet in your microphone.
- By radio waves hitting an antenna.

## Light


[EM Spectrum](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/EM_Spectrum_Properties_edit.svg/675px-EM_Spectrum_Properties_edit.svg.png)


[Eye Frequency Response](https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cone-fundamentals-with-srgb-spectrum.svg/540px-Cone-fundamentals-with-srgb-spectrum.svg.png)

## Sound




![Spectrum](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/EM_Spectrum_Properties_edit.svg/675px-EM_Spectrum_Properties_edit.svg.png)

![Freq Response](https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Cone-fundamentals-with-srgb-spectrum.svg/540px-Cone-fundamentals-with-srgb-spectrum.svg.png)

## Emissive Color
- [Sunlight](https://en.wikipedia.org/wiki/Sunlight) contains electromagnetic radiation in many wavelengths.
- An LED provides electromagnetic radiation in a very specific wavelength range.
- An LED computer display has LEDs of three colors. It can vary the intensity of those three colors, but can’t provide electromagnetic radiation in the wavelengths between them.
- We perceive the mix of the three colors as a single color.
- Red, green, and blue are used because they correspond with our biology.

## Reflective/Absorptive Color
- A reflective object doesn’t reflect color of single wavelength. Instead it reflects/absorbs all wavelengths at different amounts.
- We perceive the reflections as a single color.
- We can't determine what combination of stimulating frequencies contribute to that color.
- A reflective color cannot be brighter than the lighting in any wavelength.
- We adjust our perceived color of an image based on our understanding of the lighting.
- [The Dress](https://en.wikipedia.org/wiki/The_dress)


## Our Eyes + Visual Processing
- Our eyes have ~120 million rods that detect brightness and ~6.5 million cones that detect color.
- Angular resolution: 1 arcminute or .02° Thats about 250 dpi at one foot away, 3 pixels/mm at 1 meter. Something 6 inches wide about a mile away. We can see things much smaller than this, when they are bright, we just can't understand their shape. For example a bright led would be easily visible a mile away in a dark environment.
- Field of View: ~ 160° x 175° But resolution is very center biased.
- Foviated rendering.
- Able to perceive electromagnetic waves from 390 to 700nm, and can differentiate hues as close as 1-10 nm.
- Have a contrast range something like 1:1000000 (20+ stops). Film cameras are 9-10, high end digital camera  are a little better. A typical screen might have a true contrast ratio of 1:1000.
- In the US more than 3% of of those 40 years and older are either legally blind (20/200 vision or worse, with corrective lenses) or visually impaired (20/40 or worse).
- In the US more 7% of males and .4% of females have some form of color-blindness.
- Depth Perception (Binocular and not)
- Estimation of “True” Color, or Color Under Different Lighting The Dress](https://en.wikipedia.org/wiki/The_dress)
- Pattern Recognition
- We can differentiate a solid light from a flickering one, up to 60+ hz.
]

## Thoughts
Our understanding of color/color theory is informed from the anatomy of our eye and the way our mind processes vision.

We talk about what color something is a single thing: dark blue, pink, vivid green. We don’t think about the color of something as a little bit green, a little bit blue, and a lot red. We definitely don’t think of color as the sum of the many in between wavelengths.

We talk about primary colors, and color wheels.


## Sound

A wave of air pressure and displacement. Something in contact with air vibrates. As that thing pushes forward, it pushes the particles air in front of it forward into the the particles of air in front of them. Making an area of higher pressure. This high pressure area pushes out in all directions, and a wave of pressure begins to propagate though the air.

This pressure wave can push on other things like microphones and our ears. Our ears are able to detect very rapid and subtle changes in this pressure. And we are then able to understand the amplitude, frequency, and even shape of these changes. Because we have two ears, spaced a few inches apart, we can compare what each ear hears to gain spacial information as well.

[How Hearing Works](https://www.youtube.com/watch?v=flIAxGsV1q0)
[Sound](https://en.wikipedia.org/wiki/Sound)

## Our Ears and Auditory Processing

- 16,000-20,000 hairs in a curled up tube, the cochlea. The rods and cones in the eye perceive signals from different locations. The hairs in the cochlea are “tuned” to different frequencies.
- Detect Pressure Changes < 1 billionth of the atmospheric pressure
- We can hear sounds 10 trillion times louder than that, where they start hurting.
- Detect Pitches/Frequencies from 20hz to 20,000hz, and can differentiate frequencies as close as 5 cents (.15hz at Middle C).
- An 88 Key Piano ranges from A0 (27.5 hz) to C8 (4186.01 hz)
- Detect Timbre
- About 20% of Americans have some hearing loss.
- 3D location of sound. We have two sound sensors, and we can detect differences in the amplitude an timing of signal between them. We can turn our head to hear sounds from a different "view point". We can infer information from acoustic context including echoes and spectral attenuation.
- Source differentiation. Listen to one person in noisy room, or to a specific instrument in a symphony.
- Very, very good temporal pattern detection.
- Easily noticed off key notes in a song.

[Our Ears Make Mistakes](https://soundphysics.ius.edu/?page_id=1005)
[Sensitivity of Human Ear](http://hyperphysics.phy-astr.gsu.edu/hbase/Sound/earsens.html)


## Vision VS Hearing
- Our vision prioritizes spacial information over spectral information.
- Our hearing prioritizes spectral information over spacial informational.
- We are pretty good at telling where a sound originates, but **much** better at telling where a light originates.
- We can reduce color to a single value, but we can understand the spectrum of a sound **much** better.

## VR
>> “To give you just one example of how much better visuals can get; in order for Crescent Bay to deliver the same pixel density as a monitor at a normal viewing distance, it would have to have a resolution of about 5K by 5K per eye, something like 20 times as many pixels as it currently has. In order for it to have retinal resolution at a field of view of 180 degrees, it would have to have something on the order of 16K by 16K resolution, roughly 200 times as many pixels.”

— Michael Abrash

Our audio recording and playback capabilities are much closer to saturating the sensitivity of our ears.

Even two perfect microphones, recordings, and speakers can do a pretty good job of fooling you into thinking a recording sound is a real sound. But a recording not enough on its own. We can move our heads, and we can use our understanding of space in interpreting sounds. For VR sound, the computer must process the sound to place sounds three-dimensional, acoustic space.





# Vuo and Node Based Programming
- No syntax errors
- Visually represents data flow
- Allows the system to be naturally restricted in a way that allows underlying system to optimize performance.

- Visually Complex
- Some things feel tedious to build
- Requires shift in perspective
- Doesn't play as well with version control


## Other Node Based Programming Tools
- Houdini
- Substance Painter
- Pure Data
- Max/MSP



# In-Class Study
- Install Vuo
- Open the Vuo manual
- Read Chapter 1: Introduction
- Read the Table of Contents **DO IT**
- Complete Chapter 2: Quick Start
- With your quick start composition open, read every menu item in Vuo **DO THIS TOO**
- Read the name of every example **IT IS WORTH IT**
- Read Section 5.5
- Watch [Protocols: Part 1](https://vuo.org/node/748)
- Watch [Displaying Images](https://vuo.org/node/79)
- Create an Image Generator
- Study These Examples:
  - Image Generator: GenerateCheckerboardImage
  - Image Generator: RippleImageGradients
  - Image Generator: SpinKaleidoscope
  - Image: Display Image
  - Noise: Color Squares Randomly



# Resources
[Vuo Tutorials](https://vuo.org/tutorials)
