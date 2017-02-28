---
title: Week 3 - Parameters
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
- Real-time vs Pre-rendered
- Time sources for Real-time and Pre-rendered animations
- Periodic Functions + Time + Keeping a Beat
- Exporting and Stitching frames

# Assignment

## Challenge: Three Second Comp Form Bumper

# Real-time vs Pre-rendered

When talking about rendering animation:
- Real-time **doesn’t** mean fast.
- Real-time **does** mean created at the time it is used.
- Real-time has multiple meanings. So, fine, sometimes it does mean fast.

The most important aspect of real-time animation is that the frames displayed are generated as they are being displayed. For animation to appear smooth, frame rates must be relatively high. Typical animation frame rates are 24 or 30 fps. To achieve those rates, each frame of animation must be draw in about 30-40 milliseconds. VR applications target 90 fps, leaving only about 10 milliseconds to draw the scene.

In exchange for limiting how much time can be spent rendering each frame, we gain a huge benefit. Real-time animation can to information—including user input—not known ahead of time. This allows animation to be interactive.

However, limiting the time spent rendering each frame often means compromising on the quality or complexity of the animation. Pre-rendering provides its own huge benefit: pre-rendered animations can take as long as they need to render things. This allows for frames with very high quality and complexity.




# Miscellaneous Links
