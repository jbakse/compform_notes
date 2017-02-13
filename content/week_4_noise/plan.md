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


# Introduction: Random vs Noise

Blue Square: Horizontal Position, Vertical, Width, Height, Color (RGB)
When you use code draw this square you have to provide values.
Where do those values come from?
- Hard Coded
- Random
- Parameters (From Globals or UI)
Often in combination: width = 100 + random(-10, 10);
Random is useful when you want to add some variation.
![random() ellipse changing size over time, ellipse changing size over position]

A new (often better) option: Noise.
Noise is great when you want to add variation over a dimension.
![noise() ellipse changing size over time, ellipse changing size over position]

Noise is better:
- it is [coherent: logically or aesthetically ordered](https://www.merriam-webster.com/dictionary/coherent)
- it is controllable
    - frequency
    - complexity
- it is repeatable

- Band Limited + Visually Isotropic

# What Noise Is
Noise is a collection of random values.

1DNoise
![A graph of 1DNoise]
![a stripe of B+W pixels]
2DNoise
![An image of B+W 2DNoise]

3DNoise
![An image of a stack of B+W 2D Noises]

# What Sampling Is
Notes



# What Noise Is
Its a source of stable, deterministic, coherent "random" variation.
Show `random()` driven ellipse (size/time).
Show `noise()` driven ellipse (size/time).
Show `random()` driven ellipse (size/place).
Show `noise()` driven ellipse (size/place).
Use low octives for these demos. Show control over frequency.

Procedural


 # Noise Examples
- Perlin Noise
- Fractal Perlin Noise
- 2D Terrain
- 3D Terrain with Mesh Displacement
- [Fireball](https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js)
- [Wood](http://lodev.org/cgtutor/randomnoise.html)
- Marble
https://vimeo.com/29074357
[Alex Wolfe: Procedural Portraits](http://alexkwolfe.com/swoon/)

That Demo with the flashing search lights.



Building 1D Noise
- LCG Review
- LCG Worksheet 2
- 1D Noise Worksheet

Applying 1D Noise
- Size over time
- A mountain range

Perlin Noise
- Brief History

Noise as Raw Material
Photoshop Demos
Noise -> Clouds
Noise -> Wood
Noise -> Terrain
Noise -> Rough Edges


Noise In Photoshop
-

Image Noise


Noise Examples

Links

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
3:50    | ?
