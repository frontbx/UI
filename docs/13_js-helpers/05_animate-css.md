### Animate CSS

| link   | Function      | Reference                                                    |
|:---:|---------------|--------------------------------------------------------------|
| <a href="#animate_css" class="js-waypoint-trigger">#</a> | `animate_css` | Animates CSS property using JS key-frames and interpolation. |

Animates any animatable CSS property on an HTML DOM element via CSS transitions<br>Creates an animation effect on CSS property via CSS transitions and returns an Animation Object. Any existing animations under the same property on the element that are currently animating but not completed will be stopped and interrupted prior to starting.</td>

```javascript
animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object
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
animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object
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

**Animation Properties and Values**
Animated properties can be provided both in `camelCase` or `hyphen-case` (e.g `fontSize` or `font-size`).

```JavaScript
animate_css(node, { property: 'background-color', from: '#000' to: '#fff' } );
```

Animated property values should always be provided as a string value e.g `200px`.

In addition to explicit values, properties that support 'auto', 'initial', and 'unset' can also be animated. For example to animate the height of element from **0** to it's native height you can supply options as `{from: '0px', to: 'auto'}`.

```JavaScript
animate_css(node, { property: 'height', from: '0px' to: 'auto' } );
```

**Start Values**
Start values do not need to be provided explicitly. **animate_css** will compute any existing CSS property when not provided. It is however more performant to provide a start value so **animate_css** does not need to calculate the pre-animation rendered style on the element.

```JavaScript
animate_css(node, { property: 'height', to: '300px' } );
```

**Duration**
Animation duration is provided as an integer in milliseconds and default to 500 milliseconds when not provided.

```JavaScript
animate_css(node, { height: '300px', duration: 1000 } );
```

**Callback**
When a callback is provided this function will be called when the animation completes with the target `Element` as the first parameter. When multiple CSS properties are animated under a single animation, the callback will only be called once, when the longest running animation completes.

```JavaScript
animate_css(node, { height: '300px', callback: (node) => console.log('completed') } );
```

In addition to the default callback, `start`, `complete`, `fail` callbacks can be provided. An animation fails when it is either interrupted by another animation or is stopped explicitly. 

```JavaScript
animate_css(node, { 
    height: '300px', 
    start: (node) => console.log('start'),
    complete: (node) => console.log('complete'),
    fail: (node) => console.log('failed'), 
});
```

**Easing**
Easings must be provided in `camelCase`: Below is a full list of supported easing. For details on easing patterns take a look at [easings.net](https://easings.net/).

|            |                                                |
|------------|------------------------------------------------|
| <a href="#linear" class="js-waypoint-trigger">#</a> | **Basic:** | `linear` `ease` `easeIn` `easeOut` `easeInOut` |
| <a href="#easeInQuad" class="js-waypoint-trigger">#</a> | **Quad:**  | `easeInQuad` `easeOutQuad` `easeInOutQuad`     |
| <a href="#easeInCubic" class="js-waypoint-trigger">#</a> | **Cubic:** | `easeInCubic` `easeOutCubic` `easeInOutCubic`  |
| <a href="#easeInQuart" class="js-waypoint-trigger">#</a> | **Quart:** | `easeInQuart` `easeOutQuart` `easeInOutQuart`  |
| <a href="#easeInQuint" class="js-waypoint-trigger">#</a> | **Quint:** | `easeInQuint` `easeOutQuint` `easeInOutQuint`  |
| <a href="#easeInSine" class="js-waypoint-trigger">#</a> | **Sine:**  | `easeInSine` `easeOutSine` `easeInOutSine`     |
| <a href="#easeInExpo" class="js-waypoint-trigger">#</a> | **Expo:**  | `easeInExpo` `easeOutExpo` `easeInOutExpo`     |
| <a href="#easeInCirc" class="js-waypoint-trigger">#</a> | **Circ:**  | `easeInCirc` `easeOutCirc` `easeInOutCirc`     |
| <a href="#easeInBack" class="js-waypoint-trigger">#</a> | **Back:**  | `easeInBack` `easeOutBack` `easeInOutBack`     |


**Transitions**
In rare cases where the CSS property being animated has a CSS transition value applied, this will be overridden while the animation runs. In the edge-case where a transition is applied as an inline style on the element, this will be removed while the animation runs. Once the animation completes, any inline transition properties that were applied will be restored.

Note **animate_css** will only override the transition value of the property being animated, not all transitions - which ensures it doesn't have any adverse effects.

**Return Values**

**animate_css** will always return and `Animation` Object. Which have three available methods: `start`,  `stop`, and  `destroy`.

Calling `Animation.stop` will immediately stop an animation and restore any styling to it's original state. The animation can then be started again using `start`.

```JavaScript
let animation = animate(element, {height: '300px'});

animation.stop();
```

Calling `Animation.destroy` will immediately stop an animation and destroy it so it can't be started again.

```JavaScript
let animation = animate(element, {height: '300px'});

animation.destroy();
```

**Sandbox**
Below is interactive demo to showcase animating various values, click the button to run the animation:

<div class="fbx-snippet-demo">
    <div class="row">
        <div class="center-horizontal bg-pastelteal fill js-animate-css-example" style="width: 300px;">animate me!</div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button type="button" class="btn js-animate-css-trigger">Animate</button>
    </div>
</div>

```JavaScript
animate($('.js-animate-css-example'),
{
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