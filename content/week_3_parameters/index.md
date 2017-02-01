---
title: Week 3 - Parameters
toc: show
---

# Homework Review

- ?


# Slides

Parameterized Tools
http://www.metaflop.com/modulator/font/pQkUOJOPk8

http://www.plastaq.com/elsy/

Photoshop: Gaussian Blur vs Custom

Substance Painter Cairn Rocks

[gregschomburg.com: gregfont](http://gregschomburg.com/gregfont/)

[Kuva.io: Hair](https://www.kuva.io/hair-simulation/)
[edankwan.com: The Spirit](http://edankwan.com/experiments/the-spirit/)

[Wildflowers Generator](https://jasfar.github.io/wildflowers/)
[Threejs.org: Teapot](https://threejs.org/examples/#webgl_geometry_teapot)
[Threejs.org: Ocean 2](https://threejs.org/examples/#webgl_shaders_ocean2)

[Today's Plan](plan.html)


architect

### Parametric Design
Parametric Design is a method of design where form is considered as a system which can be influenced by provided parameters. For example a parametric bicycle design might consider the rider's height to provide a customized frame.





# Parameters and Interface Design

## Interfaces
An **interface** is the common boundary between two systems. Two of the most important interfaces of software systems are **user interfaces**  (UIs) and **application programming interfaces** (APIs).

- A UI is the part of a software system that a person uses to control it. The UI accepts user input and provides feedback. The UI is the primary interface in most *applications*.

- An API is the part of a software system that is used by programmers to connect the software with other software systems. The API is the primary interface in most *libraries*.

- It is common for software to have both a UI and an API. For example twitter provides a user interface for making and reading tweets and an API for integrating twitter into existing systems.

- Abstraction, subway
## Parameters
In a software system, parameters are values that control what the system does. Exposing parameters is the core concern of software interface design.

### What to Expose
- Which parameters should be exposed?
- Which values should be accepted for each parameter?
- Which parameters are required, which are optional?

#### Balance
- Exposing **more** gives your user more control.
- Exposing **less** gives you more control.
- Exposing **more** makes your interface harder to understand.
- Exposing **less** makes your interface easier to understand.
- Exposing **more** allows your users to do more good things.
- Exposing **less** prevents your users from doing bad things.

### Presenting your Interface
Once you have decided on what to expose via your interface, you must consider how to communicate your interface options to your users.

- What UI controls will you use for each parameter?
- What will you label each control?
- How will you group and order the UI controls?
- How will you explain the purpose of each parameter?

### Feedback
Feedback shows users the impact their actions have on the system. Without feedback, systems are very hard to learn and use.

In simple cases, showing users the end result of their choices is often enough. In more complex situations, it is often helpful to provide intermediate feedback. For example, if a system will react slowly to user actions, providing immediate confirmation of user input is important.


### Keep Your User in Mind
The way that you think about your software system is often very different from the way your users think about it.
- Who will be using your software?
- Why will they be using it? What will they be trying to do?
- Do they understand how your software works under the hood? Should they?


# Activity: Interface Design

List required parameters, list optional parameters, list values for each parameter.
Narrow down to top 3 params.
Carefully name and describe each param and possible value.

Machine Types:
- A car
- Planet generator
- Grocery-shopping bot
- Internet surveillance system
- Genetic pet builder
- Love Potion

Users:
- Daily user
- One-time user
- A child
- An [machine type] enthusiast
- Another machine



# Globals as Interfaces
A quick-and-dirty way to make your comp form sketches "tweakable" is to use global variables for your parameters and group them at the top of the script.

- This is very easy to set up.
- Works particularly well for small one-off sketches that only you will ever use.
- Choose clear variable names that explain the purpose of each parameter.
- Use comments to explain the parameter in more detail, document legal value ranges, and suggest good values.
- Yes, globals are evil. That is part the "dirty" part.

<a href="./slider_square.js" class="p5_example show-lab show-lab-link hidden">random</a>



# p5.js Dom Interfaces

The [p5 Dom Library](https://p5js.org/reference/#/libraries/p5.dom) provides functions that allow you create html elements and user interface controls. This is a much better choice if you want anyone else to adjust your parameters.

- This is more complicated to set up, but still pretty quick.
- This is a better choice if you want to quickly explore your parameter-space.
- Label your inputs clearly. Consider your interface carefully.
- Your controls can also be made in HTML, used in p5 via `select()`
- You can style your interface with CSS.




```javascript
var pos_x_slider, pos_y_slider, size_slider;

function setup() {
	createCanvas(640, 360);
	fill(100);
	noStroke();
	rectMode(CENTER);

	createP('Horizontal Position');
	pos_x_slider = createSlider(0, width, width * .5);
	createP('Vertical Position');
	pos_y_slider = createSlider(0, height, height * .5);
	createP('Size');
	size_slider = createSlider(10, 200, 100);
}


function draw() {
	background(250);

	var pos_x = pos_x_slider.value();
	var pos_y = pos_y_slider.value();
	var size = size_slider.value();

	rect(pos_x, pos_y, size, size);
}
```


# Assignment

Keep Sketching! Continue experimenting with procedurally generated images, this time focusing on parametric systems.

# Challenge




# Related Links

- [Inner Platform Effect](https://en.wikipedia.org/wiki/Inner-platform_effect)
