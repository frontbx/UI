

### Animate

| link                                                 | Function  | Reference                                                    |
|:----------------------------------------------------:|-----------|--------------------------------------------------------------|
| <a href="#animate" class="js-waypoint-trigger">#</a> | `animate` | Animates CSS property using JS key-frames and interpolation. |

Animates any transform, color, or numeric CSS property on an HTML DOM element via JavaScript keyframes.

Creates an animation effect on CSS property via JavaScript keyframes and returns an Animation Object. Any existing animations under the same property on the element that are currently animating but not completed will be stopped and interrupted prior to starting.

```javascript
animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object</code></pre>
```

Syntax used to animate a single CSS property without explicitly providing a start value. The starting value will be determined by the currently rendered CSS style on the element. In the case that the start value for the property is not explicit set, animate will still be able to calculate the rendered value. Works on all values including those set to `auto`, `initial`, `unset`.

```javascript
animate(node,
{
	height: '300px',
	easing: 'easeInExpo',
	duration: 1000,
	callback: () => console.log('complete')
});
```

```javascript
animate(HTMLElement: element, Object: options[property, from, to, easing, duration, callback]): Object
```
Syntax used to animate a single CSS property while explicitly providing a start value. The starting value will be determined by the currently rendered CSS style on the element. In the case that the start value for the property is not explicit set, animate will still be able to calculate the rendered value. Works on all values including those set to `auto`, `initial`, `unset`.

```javascript
animate(node,
{
	property: 'height',
	from: '10px',
	to: '300px',
	easing: 'easeInExpo',
	duration: 1000,
	callback: () => console.log('complete')
});
```

```javascript
animate(HTMLElement: element, Object: options[...property: [to, from, easing, duration, callback] ]): Object
```

Syntax used to animate multiple CSS properties with independent animation options for each property.

```javascript
animate(node,
{
	height: { from: '0px', to: '100px', duration: 350, easing: 'easeInOutElastic' },

	opacity: { to: '0', duration: 500, easing: 'linear' }
});
```

> When animating multiple CSS properties simultaneously, the provided callbacks will only be called once on the longest running animation once completed.

**Animation Properties and Values**
Animated properties can be provided both in `camelCase` or `hyphen-case` (e.g `fontSize` or `font-size`).

Animated property values should always be provided as a string value. When animating colors, currently only hexidemical colors are supported. Animating CSS `transform` is fully supported the same way any other animation is treated, with the exception of transform `matrix`.

When animating numerical values that require a unit (e.g. `20px`), animate will convert any non **px** units to to **px**, including any existing start values if not provided explicitly. Animate supports all CSS units such as `%`, `em`, `rem` etc...

In addition to style properties, some non-style properties such as `scrollTop` and `scrollLeft` and `scrollto` can be animated.

In addition to explicit values, properties that support 'auto', 'initial', and 'unset' can also be animated. For example to animate the height of element from **0** to it's native height you can supply options as `{from: '0px', to: 'auto'}`.

**Start Values**
Start values do not need to be provided explicitly. animate will compute any existing CSS property when not provided. It is however more performant to provide a start value so animate does not need to calculate the pre-animation rendered style on the element.

**Duration**
Animation duration is provided as an integer in milliseconds and default to 500 milliseconds when not provided.

**Callback**
When a callback is provided this function will be called when the animation completes with the target `Element` as the first parameter. When multiple CSS properties are animated under a single animation, the callback will only be called once, when the longest running animation completes.

In addition to the default callback, `start`, `complete`, `fail` callbacks can be provided. An animation fails when it is either interrupted by another animation or is stopped explicitly. 

**Easings**
Easings must be provided in `camelCase`: Below is a full list of supported easing. For details on easing patterns take a look at [easings.net](https://easings.net/).

|              |                                                     |
|--------------|-----------------------------------------------------|
| **Basic:**   | `linear` `ease` `easeIn` `easeOut` `easeInOut`      |
| **Quad:**    | `easeInQuad` `easeOutQuad` `easeInOutQuad`          |
| **Cubic:**   | `easeInCubic` `easeOutCubic` `easeInOutCubic`       |
| **Quart:**   | `easeInQuart` `easeOutQuart` `easeInOutQuart`       |
| **Quint:**   | `easeInQuint` `easeOutQuint` `easeInOutQuint`       |
| **Sine:**    | `easeInSine` `easeOutSine` `easeInOutSine`          |
| **Expo:**    | `easeInExpo` `easeOutExpo` `easeInOutExpo`          |
| **Circ:**    | `easeInCirc` `easeOutCirc` `easeInOutCirc`          |
| **Back:**    | `easeInBack` `easeOutBack` `easeInOutBack`          |
| **Elastic:** | `easeInElastic` `easeOutElastic` `easeInOutElastic` |
| **Bounce:**  | `easeInBounce` `easeOutBounce` `easeInOutBounce`    |


**Transitions**
In rare cases where the CSS property being animated has a CSS transition value applied, this will be overridden while the animation runs. In the edge-case where a transition is applied as an inline style on the element, this will be removed while the animation runs. Once the animation completes, any inline transition properties that were applied will be restored.

_Note animate will only override the transition value of the property being animated, not all transitions - which ensures it doesn't have any adverse effects._

**Return Values**
Animate will always return and `Animation` Object. Which have two available methods: `start`,  `stop`, and  `destroy`.

Calling `Animation.stop` will immediately stop an animation at the current keyframe. Which can then be started again using `start`.

Calling `Animation.destroy` will immediately stop an animation and destroy any keyframes.

```JavaScript
let animation = animate(element, {height: '300px'});

animation.stop();
```

**Sandbox**
Below is interactive demo to showcase animating various values, click the button to run the animation:

<div class="fbx-snippet-demo">
    <div class="row">
        <div class="center-horizontal bg-pastelteal column-demo js-animate-example" style="width: 300px;">animate me!</div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button type="button" class="btn js-animate-trigger">Animate</button>
    </div>
</div>

```JavaScript
animate(find('.js-animate-example'), {
    width: 
    {
        to : '500px',
        duration: 1000,
    },
    height: 
    {
        to : '200px',
        duration: 1000,
    },
    backgroundColor: 
    {
        to : '#b324ea',
        duration: 2000,
    },
    
});
```