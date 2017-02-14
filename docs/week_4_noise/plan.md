# Welcome Music

# Materials
Team Generator, 1D Noise Worksheet

# Learning Objectives
- What a noise function is.
- Why noise is useful.
- Noise vs. Random
- Historical and Current Importance of (Perlin) Noise in Procedural Generation
- Qualities of Noise (Smoothing, Layering, Frequency, Energy, Dimensions)
- How to use noise in projects. (Sampling, Input Scaling, Output Scaling)


# Introduction


Blue Square: Horizontal Position, Vertical, Width, Height, Color (RGB)
When you use code draw this square you have to provide values.
Where do those values come from?
- Hard Coded
- Random
- Parameters (From Globals or UI)
Often in combination: width = 100 + random(-10, 10);
Random is useful when you want to add some variation.
![random() ellipse changing size over time, ellipse changing size over position, slider for amplitude]

A new (often better) option: Noise.
Noise is great when you want to add variation over a dimension.
![noise() ellipse changing size over time, ellipse changing size over position, with sliders for amplitude, frequency, layers]

Noise is better:
- it is [coherent: logically or aesthetically ordered](https://www.merriam-webster.com/dictionary/coherent)
- it is controllable
    - frequency
    - complexity
- it is repeatable/stable/deterministic
    - `random()` is repeatable with `randomSeed()` but this is fragile
    - `noise(x)` does't care about how many times you call it, order, etc.

- Band Limited + Visually Isotropic

# Random() vs Noise(x)
look at the specific call itself. a fundemental wierd (not hard) thing too get used to is that `random()` give you different random numbers every time. `noise(x)` gives you the same 'random' number every time.

# What 1D noise is
![Show Graph of 1D Noise]

# Building 1D Noise
- LCG Review
- LCG Worksheet 2
- 1D Noise Worksheet

# Qualities of Noise (Smoothing, Layering, Frequency, Energy, Dimensions)


# Working with 1D Noise
- Size over time
- A mountain range
- sampling input scaling, output scaling



# What Higher Dimension Noise Is
Noise is a set of random values arranged in space. The `Noise()` function returns the value at a specific location.

1DNoise
![A graph of 1DNoise]
![a stripe of B+W pixels]
2DNoise
![An image of B+W 2DNoise]

3DNoise
![An image of a stack of B+W 2D Noises]



# What Noise Looks Like

Ken Perlin
 # Noise Examples
- Perlin Noise
- Fractal Perlin Noise

Shapes
- 2D Terrain
- 3D Terrain with Mesh Displacement
- 3D Terrain with Marching Cubes
- Wobbled Teapot or something

Image Textures
- [Fireball](https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js)
- [Wood](http://lodev.org/cgtutor/randomnoise.html)
- Marble
- Clouds

Rough Edges + Texture

Forces
-[Open CL Perlin Particles](https://vimeo.com/29074357)

[Alex Wolfe: Procedural Portraits](http://alexkwolfe.com/swoon/)

That Demo with the flashing search lights.


# Noise in Photoshop


# Code Examples using Noise()
- waveform that changes over time
- dot pattern with varied size




# Links

[Pinterest](https://in.pinterest.com/explore/perlin-noise/)
[Novastructura](http://www.novastructura.net/)
[Book of Shaders: Noise](https://thebookofshaders.com/11/)
[Shiffman 2DNoise](https://www.youtube.com/watch?v=ikwNrFvnL3g)
[Dev.mag How to use Perlin Noise in your Games](http://devmag.org.za/2009/04/25/perlin-noise/)
[Perlin on his Award](http://mrl.nyu.edu/~perlin/doc/oscar.html)
[Inear](http://www.inear.se/2010/04/ridged-perlin-noise/)
[Shiffman 2DNoise](https://www.youtube.com/watch?v=ikwNrFvnL3g)
[Simplex Noise](https://cmaher.github.io/posts/working-with-simplex-noise/)
[Book of Shaders: Noise](https://thebookofshaders.com/11/)
[GPU Gems Improved Perlin Noise](http://http.developer.nvidia.com/GPUGems/gpugems_ch05.html)


# Activities
Open: 1D Noise Worksheet

# Schedule

Time    | Activity
---     | ---
3:50    | Homework Review
4:10    | Noise Introduction
        | Random() vs Noise(x)
        | 1D Noise
4:30    | Activity: Building 1D Noise
4:50    | Qualities of Noise (Smoothing, Layering, Frequency, Energy, Dimensions)
5:10    | Break

5:20    | Working with 1D Noise
5:30    | Coding Challenge?
5:50    | 2D + 3D Noise
6:10    | Noise Applications
        | Noise Examples
