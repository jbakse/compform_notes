---
title: Week 11 - Text
toc: show
---
[Forgot About Dre](https://www.youtube.com/watch?v=QFcv5Ma8u8k)

<div style="font-size: 200px;">Open Your Javascript Console!</div>


# Today's Groups
<a href="./pairs.js" class="p5_example show-lab show-lab-link hidden">pairs</a>


# Homework Review
Choose one of your partner's sketches.

- Describe the sketch as to someone who hasn't seen it.
- Discuss the most successful feature of the sketch.
- Discuss the weakest feature.
- Suggest a "polishing move."


# Today's Learning Objectives
- Briefly introduce jQuery and underscore
- Discuss applications of dynamically generated text
- Implementing a "Mad Lib" template
- Generating text with Markov Chains

# Assignment

Keep Sketching!

This week you are posting text! Focus on the words themselves, but also consider how the presentation of the words will impact meaning.

## Challenge:
[TBD]


# Examples of Comp Text
- [Subreddit Simulator](https://www.reddit.com/r/SubredditSimulator/)
- [NYT: The little girl/boy who lost her/his name.](https://www.nytimes.com/2015/12/23/business/media/personalizing-books-via-robot.html?_r=0)
- [NYT: The Best and Worst Places to Grow Up](https://www.nytimes.com/interactive/2015/05/03/upshot/the-best-and-worst-places-to-grow-up-how-your-area-compares.html)
- [More Animal Fun...](https://www.reddit.com/r/proceduralgeneration/comments/4bhohq/more_animal_fun/)
- [Mad Libs](http://www.madlibs.com/)
- [NaNoGenMo 2016](https://github.com/NaNoGenMo/2016)
- [Indie Game Generator](http://orteil.dashnet.org/gamegen)
- [Another Indie Game Generator](https://applepinegames.com/tech/steam-game-generator)
- [Pentametron](https://twitter.com/pentametron?lang=en), [GreatArtBot](https://twitter.com/greatartbot), [ThinkPieceBot](http://barrl.net/2748)
- [Don't Forget about Tay](https://en.wikipedia.org/wiki/Tay_(bot)), [Tay](http://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist)
- [Cheap Bots Done Quick](http://cheapbotsdonequick.com/)
- [Interactive Journalism](https://github.com/wbkd/awesome-interactive-journalism)

# Mad Libs
[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)

Activity: TBD

# Markov Chains
[Markov Chains](https://en.wikipedia.org/wiki/Markov_chain)

Activity: TBD


# jQuery

> [jQuery](http://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

jQuery is great for finding and manipulating elements in HTML.

## Using jQuery
The main function in jQuery is, wait for it... `jQuery()`. This function can also be accessed using the abbreviated name `$()`.

This function actually does a few different things depending on what you pass it. One of the most important things it does is "select" elements in your HTML document.

To select items, pass `jQuery()` a css selector that describes what you want:

```javascript
target = jQuery("body");
target = jQuery("div.fancy");
target = jQuery("#author");
target = $("#author");
```

Once selected, you can use jQuery to manipulate your selected item(s):

```javascript
target.text("hello");
target.append( "<p>Test</p>" );
target.remove();
target.addClass("fancy");
```

Often you might do everything in one line:

```javascript
$( "p" ).addClass("fancy");
```

The line above will find every `p` element in the document and add the `fancy` class to each of them.

# Underscore

> [Underscore](http://underscorejs.org/#sample) is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.

Underscore is great for working with data in a clean, [functional](https://en.wikipedia.org/wiki/Functional_programming) way.



## \_.shuffle()

> Shuffle a collection, using the modern version of the
> [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).


```javascript
_.shuffle = function(obj) {
  var set = isArrayLike(obj) ? obj : _.values(obj);
  var length = set.length;
  var shuffled = Array(length);
  for (var index = 0, rand; index < length; index++) {
    rand = _.random(0, index);
    if (rand !== index) shuffled[index] = shuffled[rand];
    shuffled[rand] = set[index];
  }
  return shuffled;
};
```

You can use it like this:
```
var items = ["a", "b", "c", "d", "e"];
var shuffledItems = _.shuffle(items);
// ["b", "d", "c", "a", "e"]
```

## \_.sample()

> Sample **n** random values from a collection.
> If **n** is not specified, returns a single random element.
> The internal `guard` argument allows it to work with `map`.

```javascript
_.sample = function(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    return obj[_.random(obj.length - 1)];
  }
  return _.shuffle(obj).slice(0, Math.max(0, n));
};
```

You can use it like this:

```javascript
var items = ["a", "b", "c", "d", "e"];
item = _.sample(items);
// "d"
items = _.sample(items, 2);
// ["c", "b"]
```


# Study Examples


## Study Example 1: Title Generator
This example generates a book title and subtitle using a template and randomly chosen words from lists. The title and subtitle are styled with HTML/CSS. It generates ideas.

It is written in pure Javascript, without the p5.js library or jQuery.

- [Title Generator](madness)


## Study Example 2: Life Expectancy

This example modifies its content to suit input provided by the user. It helps you understand [this table]([https://www.ssa.gov/OACT/STATS/table4c6.html]).

It is written in Javascript, using the jQuery library.

- [Life Expectancy](death)


# In-class Challenge

1. Study the examples above.
2. Create a new script that generates a fortune using the following template.

> You will [verb] a [noun] on [day of week].


## Study Example 3: Markov Chain
<a href="./markov.js" class="p5_example show-lab show-lab-link hidden">pairs</a>

> Congress shall enjoy the right to the Militia, when in a Grand Jury, except in a witness against unreasonable searches and unusual punishments inflicted.

- [Markov](markov)



# Related Links
- [devdocs.io](http://devdocs.io/)
