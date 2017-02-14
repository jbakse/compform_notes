---
title: Week 4 - Noise
toc: show
---


# Homework Review

- Random vs Parameters
- Did anyone use the idea of tiles or modularity?
- Who had the widest "apparent" parameter space?
- Challenge Winner?

<!-- #### Today's Groups -->


<!-- #### Parameter Recap -->

# Today's Learning Objectives
- What the `noise()` function does.
- When and how to use `noise()`
- Qualities of Noise (Frequency, Amplitude, Smoothing, Layering, Dimensions)

# Noise

![blue square](images/square.png)

Consider the code you would write to draw a colored square. Your code would require several values: horizontal position, vertical position, width, height, the RGB values.

Where do those values come from?

Source          | Purpose
---             | ---
Hard Coded      | You want specific control of the value.
Parameters      | You want to be able to control the value from a larger context.
`random()`      | You want random variation.
`noise(x)`      | You want controlled variation.

Often you use these in combination:
`width = 100 + random(-10, 10);`

Using `random()` is a good way to add variation to a value. The `noise(x)` can often offer variation with greater control and consistency.

#### Random()

<div class="sketch" style="width: 100%; height: 300px;">
<iframe class="figure"  src="./sketches/sketch_random/index.html"></iframe>
</div>


#### Noise(x)

<div class="sketch" style="width: 100%; height: 300px;">
<iframe class="figure"  src="./sketches/sketch_noise/index.html"></iframe>
</div>

## Benefits of Noise

### Noise is Coherent
The `noise(x)` function returns values sampled from Perlin Noise. Perlin Noise provides random values that are aesthetically arranged ([band limited and visually isotropic](https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch05.html)) in space. These values are a useful basis for many applications that require natural-feeling variation.

### Noise is Repeatable
Repeated variation is easy with `noise(x)`: every time you call `noise(x)` with a particular argument, you get the same value back. This is often very useful. For example, in an animation you often need variation to be consistent from frame to frame.

- `random()` requires no arguments and returns a different random value every time
- `noise(x)` requires an argument and returns the same random value every time
- This difference takes some getting used to, and learning what to pass in for `x` takes some practice.
- This difference is a core reason why `noise(x)` is so useful.

### Noise is Controllable
By controlling what you pass to `noise(x)`, you can control the frequency of the random values returned. This can be used to control how quickly values vary in space and time. Like `random()` values, you can scale and shift the values from `noise(x)` to the range you need. You can also adjust the character of `noise(x)` using `noiseDetail()`.


# 1D Noise

<div class="sketch" style="width: 100%; height: 300px;">
<iframe class="figure" height="300" src="./sketches/sketch_1D_noise/index.html"></iframe>
</div>

## Activity: Building 1D Noise
- Review the Linear Congruential Generator worksheet.
- Complete the Linear Congruential Generator (Noise) worksheet.
- Graph the results on the 1D Noise Worksheet.

# 2D + 3D Noise

`noise(x)`
![noise_1d](images/noise_1d.png)

`noise(x, y)`
![noise_2d](images/noise_2d.png)

`noise(x, y, z)`
![noise_3d](images/noise_3d.png)

# Qualities of Noise
- Smoothing
- Layering/Octaves/Detail
- Frequency
- Dimensions


# Working with Noise

## Calling the Noise Function

When you call `noise(x)` you have to pass in an `x` value. This x value is the location in the Perlin Noise of the value to return. Choose `x` based on how you want the value to vary. You can pass in `frameCount` or `millis()` to get values that change over time.
`noise()` actually takes up to three parameters: `noise(x,y,z)` allowing you to receive values arranged in three dimensions (see below).

## Controlling the Frequency
You can control how quickly returned values will vary over time and space by scaling the value you pass in for `x`.

```
n = noise(frameCount); // get a value that changes over time
n = noise(frameCount * .1); // get a value that changes over time slowly
n = noise(frameCount * 10); // get a value that changes over time quickly
```

## Controlling the Amplitude and Range
The `noise(x)` function returns values in the range of 0 to 1. Use multiplication and addition to shift this range to the range you need.

```
n = noise(frameCount) * 10 + 10; // values between 10 and 20;
```

You could also use `map()`:

```
n = noise(frameCount); // 0 -> 1
n = map(n, 0, 1, 10, 20);  // map to 10 -> 20
```

## Controlling the Detail

The `noiseDetail()`  function allows you to control the "roughness" or "detail" of the noise returned. See: [p5 reference](https://p5js.org/reference/#/p5/noiseDetail)

## Controlling the Seed
By default, every time you restart your sketch the noise pattern will be different. The `noiseSeed()` allows you to manually set the noise pattern seed. See: [p5 reference](https://p5js.org/reference/#/p5/noiseSeed)

<a href="./skyline.js" class="p5_example show-lab show-lab-link hidden">Skyline</a>

## Activity: Coding Challenge

TBD




# Noise Applications

## Tron
![Tron](https://www.csee.umbc.edu/~olano/s2001c24/imgs/lightcycles.jpeg)
[Ken Perlin on Procedural Textures](https://www.csee.umbc.edu/~olano/s2001c24/ch02.html)

## Procedural Textures
![Fireball](https://www.clicktorelease.com/blog/vertex-displacement-webgl-glsl-perlin-noise-three-js/add-some-colour-movement.jpg)
[clicktorelease.com: Fireball](https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js)
![Wood](http://3.bp.blogspot.com/-aROavndlrvw/T5JZl_-fMwI/AAAAAAAAAgQ/AdJp5pJP5dI/s320/rend6.png)
[Shiny Dynamics: Blender Wood](http://shiny-dynamics.blogspot.com/2012/04/blender-wood-texture-part-2.html)
![Marble](http://modo.docs.thefoundry.co.uk/modo/701/help/images/shade_render/EmodoTex/marble_noise.png)
[Modo: Marble](http://modo.docs.thefoundry.co.uk/modo/701/help/images/shade_render/EmodoTex/marble_noise.png)


## Procedural Shapes
![Clouds](http://www.thinkboxsoftware.com/storage/krakatoa-support-images/krakatoa15_cloudsmodeling_kcm_density1_render.png)
[Clouds](http://www.thinkboxsoftware.com/krak-clouds-modelling/)

![Terrain](http://www.redblobgames.com/maps/terrain-from-noise/images/topdemo-3d.png)
[Displacement Terrain](http://www.redblobgames.com/maps/terrain-from-noise/)

<div class="sketch" style="width: 100%; height: 500px; position: relative;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/jB0vBmiTr6o" frameborder="0" allowfullscreen></iframe>
</div>

[Elevated 4K!](https://www.youtube.com/watch?v=jB0vBmiTr6o&t=131s)
## Forces
<div class="sketch" style="width: 100%; height: 500px; position: relative;">
<iframe src="https://player.vimeo.com/video/29074357" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/29074357">OpenCL Perlin Particles</a> from <a href="https://vimeo.com/eddietree">Eddie Lee</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</div>

[Open CL Perlin Particles](https://vimeo.com/29074357)

<!-- # Noise Examples -->

# Assignment
Keep Sketching! This week, focus on using the `noise()` function. Feel free to mix in concepts from early weeks as well.

## Special Assignment
Don't forget to sign up for orientations for the Laser Cutter and 3D printer.

## Challenge
Treasure Map
