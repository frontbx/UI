# Utils

FrontBx's JS Utility Component is used throughout the library and provides a consistent API for common JavaScript functions

---

*	[Access](#access)
*	[Event listeners](#event-listeners)
*	[Dom Utilities](#dom-utilities)
*	[Animate](#animate)
*	[Animate css](#animate-css)
*	[Array](#array)
*	[Object](#object)
*	[String](#string)
*	[Validation](#validation)
*	[Misc](#misc)

---

FrontBx comes with a handy JavaScript utility library to help speed up production. The library is similar to something like jQuery, but with less bloat. This documentation provides a simple API reference, however for more in-depth detail you can view the library's source code which is well documented.

The documentation below is broken down into logical groupings.

### Access

FrontBx's Utility Component can be accessed globally via the Inversion container through the `_` key.

```javascript
const utils = frontbx._();
```

You can also `import` and cache specific functions from the utility library, which reduces memory and is more performant. For example:


```javascript
const [add_class, remove_class] = frontbx.import(['add_class', 'remove_class']).from('_');
```

---

### Event Listeners

| Function                | Reference                                                            |
|-------------------------|----------------------------------------------------------------------|
| `on`                    | Adds a removable event listener to any HTMLElement.                  |
| `off`                   | Removes an event listener from any HTMLElement.                      |
| `clear_event_listeners` | Removes all event listeners from an element and all it's children.   |
| `collect_garbage`       | Removes all event listeners from elements no longer in the live DOM. |
| `event_listeners`       | Returns an array of all attached event listeners on element.         |


<br>

#### on

Adds a removable event listener to any HTMLElement.

```javascript
on(HTMLElement: element, String: event, Function: callback, ?Array|Mixed: args): Void
```

```javascript
// Anonymous function
on(element, 'click', (event, element) => console.log(event, element));

// Multiple event can also be added
on(element, 'click, touchstart', (event, element) => console.log(event, element));

// Regular function
on(element, 'click', function(event, element)
{
	console.log(event, element, this);
});

// Function with "this" applied
on(element, 'click', function(event, element)
{
	console.log(event, element, this);

}, 'foo');

// Function with "this" applied and arguements
on(element, 'click', function(event, element, one, two)
{
	// this -> 'foo'
	console.log(event, element, this);
	
}, ['foo', 'one', 'two']);

```

<br>

#### off

Removes an event listener from any HTMLElement.

```javascript
off(HTMLElement: element, String: event, Function: callback, ?Array|Mixed: args): Void
```

```javascript
// Add the event listener
let func = (event, element) => console.log(event, element);
on(element, 'click', func);

// Removes specific event listener
off(element, 'click', func);

// Removes all 'click' listeners
off(element, 'click');

// Removes all event listeners
off(element);

```

<br>

#### clear_event_listeners

Removes all event listeners from an element and all it's children.

```javascript
clear_event_listeners(HTMLElement: element, Boolean: onlyChildren = false): Void
```

```javascript
// Removes all listeners including on any children
clear_event_listeners(element);

// Removes all listeners from children but not parent
clear_event_listeners(element, true);

```

<br>

#### collect_garbage

Removes all event listeners from elements no longer in the live DOM.

```javascript
collect_garbage(): Void
```

<br>

#### event_listeners

Returns an array of all attached event listeners on element.

```javascript
event_listeners(HTMLElement|String: element, ?String: eventName): array
```

```javascript
// [ { el: details.element, callback: details.callback, type: type } ]

// Returns all event listeners
let events = event_listeners();

// Returns all 'click' event listeners
let events = event_listeners('click');

// Returns all event listeners on element
let events = event_listeners(element);

// Returns all 'click' event listeners on element
let events = event_listeners(element, 'click');
```

---


### Dom Utilities

| Function                | Reference                                                                                                                                                                                                                                                                                                                              |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `find`                  | Finds first single element by CSS selector and returns it.                                                                                                                                                                                                                                                                             |
| `find_all`              | Finds all elements by CSS selector and returns array.                                                                                                                                                                                                                                                                                  |
| `add_class`             | Adds class(es) to HTMLElement(s).                                                                                                                                                                                                                                                                                                      |
| `remove_class`          | Removes class(es) to HTMLElement(s).                                                                                                                                                                                                                                                                                                   |
| `has_class`             | Checks if an HTMLElement(s) have a class or classes.                                                                                                                                                                                                                                                                                   |
| `toggle_class`          | Adds OR removes class(es) to HTMLElement(s).                                                                                                                                                                                                                                                                                           |
| `attr`                  | Sets, gets or removes any attribute on an HTMLElement.                                                                                                                                                                                                                                                                                 |
| `css`                   | Set, get or remove CSS value(s) on element. Note that this will only return inline styles, use `rendered_style` for currently displayed styles.                                                                                                                                                                                        |
| `rendered_style`        | Returns currently rendered style attribute of an element.                                                                                                                                                                                                                                                                              |
| `height`                | Returns height in pixels of an element.                                                                                                                                                                                                                                                                                                |
| `width`                 | Returns element width in pixels.                                                                                                                                                                                                                                                                                                       |
| `closest`               | Traverses up DOM tree to first parent by class name OR tag type and returns element if matched.                                                                                                                                                                                                                                        |
| `closest_class`         | Traverses up DOM tree to first parent by class name and returns element if matched.                                                                                                                                                                                                                                                    |
| `coordinates`           | Returns an object of absolute coordinates of element relative to page.                                                                                                                                                                                                                                                                 |
| `dom_element`           | Creates and returns an HTMLElement via an object of attributes. Attributes can be any HTML attribute to apply to the elem. Passing `on[Event]` will add an event listener to the element.                                                                                                                                              |
| `first_children`        | Returns immediate first children of element.                                                                                                                                                                                                                                                                                           |
| `form_inputs`           | Returns all inputs, textarea and select elements of a form element.                                                                                                                                                                                                                                                                    |
| `form_values`           | Returns an key/value object of all form input, textarea and select element values.<br>Values are sanitized and are converted to `String` `Integer` `Float` where appropriate. Form inputs with a name `name[]` will be concatenated into an `Array`. Accepts radio and checkbox elements also.                                         |
| `hide_aria`             | Sets aria-hidden to true.                                                                                                                                                                                                                                                                                                              |
| `in_viewport`           | Returns true if element is in viewport.                                                                                                                                                                                                                                                                                                |
| `inner_HTML`            | Sets innerHTML of an element and clears any old event listeners.                                                                                                                                                                                                                                                                       |
| `input_value`           | Returns input value of an input, textarea or select element.<br>Values are sanitized and are converted to `String` `Integer` `Float` where appropriate.<br>Radio elements will return the input value when checked. Checkbox elements will return a boolean.<br>File inputs will return a file object or array when `multiple` is set. |
| `next`                  | Traverses forwards through siblings to first element by class name OR tag type and returns element if matched.                                                                                                                                                                                                                         |
| `next_untill_class`     | Traverses forwards through siblings to first element by class name and returns element if matched.                                                                                                                                                                                                                                     |
| `nth_child`             | Returns nth direct child element of parent element if it exists.                                                                                                                                                                                                                                                                       |
| `nth_siblings`          | Returns index of element relative to it's siblings. For example if the element is the second                                                                                                                                                                                                                                           |
| `preapend`              | Appends HTMLElement as first child to an element.                                                                                                                                                                                                                                                                                      |
| `previous`              | Traverses backwards through siblings to first element by class name OR tag type and returns element if matched.                                                                                                                                                                                                                        |
| `previous_untill_class` | Traverses backwards through siblings to first element by class name and returns element if matched.                                                                                                                                                                                                                                    |
| `remove_from_dom`       | Removes element from DOM and clears any event listeners attached to it.                                                                                                                                                                                                                                                                |
| `scroll_pos`            | Returns scroll position of any element or viewport.                                                                                                                                                                                                                                                                                    |
| `show_aria`             | Sets aria-hidden to true                                                                                                                                                                                                                                                                                                               |
| `traverse_up`           | Traverses up DOM tree and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                  |
| `traverse_down`         | Traverses down DOM tree and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                |
| `traverse_next`         | Traverses next siblings and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                |
| `traverse_prev`         | Traverses next siblings and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                |
| `trigger_event`         | Triggers a custom or native DOM event on an element. Custom events are nestable with a colon value.                                                                                                                                                                                                                                    |


```javascript
find(HTMLElement: element, ?HTMLElement: context = window): HTMLElement|Undefined
```

```javascript
let div = find('div');

let id = find('#foo');

let clas = find('.foo.bar');

let child = find('.foo', div);
```

<br>

#### find_all

```javascript
find_all(HTMLElement: element, ?HTMLElement: context = window): Array
```


```javascript
let divs = find_all('div');

let classes = find_all('.foo.bar');

let children = find_all('.foo', divs[0]);
```

<br>

#### add_class

```javascript
add_class(HTMLElement|Array: element, String|Array: className): Void
```

```javascript

add_class(element, 'foo');

add_class(element, 'foo, bar');

add_class(element, '.foo.bar');

add_class([element1, element2], ['foo', 'bar']);
```

<br>

#### remove_class

```javascript
remove_class(HTMLElement|Array: element, String|Array: className): Void
```

```javascript
remove_class(element, 'foo');

remove_class(element, 'foo, bar');

remove_class(element, 'foo.bar');

remove_class([element1, element2], ['foo', 'bar']);
```

<br>

#### has_class

```javascript
has_class(HTMLElement: element, String|Array: className): Boolean
```

```javascript
// Has class 'foo' or 'bar'
if (has_class(element, 'foo, bar')) { }

// Has class 'foo' or 'bar'
if (has_class(element, ['foo', 'bar'])) { }

// Has class foo and bar
if (has_class(element, '.foo.bar')) { }
```

<br>

#### toggle_class

```javascript
toggle_class(HTMLElement|Array: element, String|Array: className): Void
```

```javascript
toggle_class(element, 'foo');

toggle_class(element, 'foo, bar');

toggle_class(element, '.foo.bar');

toggle_class([element1, element2], ['foo', 'bar']);
```

<br>

#### attr

```javascript
attr(HTMLElement: element, ?String|Object: nameOrObect, ?Mixed: value): Mixed
```

```javascript
// Get values
let id      = attr(element, 'id');
let checked = attr(element, 'checked');
let data    = attr(element, 'data-foo-bar');
let aria    = attr(element, 'aria-hidden');
let styles  = attr(element, 'style');

// Set values
attr(element, 'id', 'foo');
attr(element, 'checked', true);
attr(element, 'data-foo-bar', 'foo');
attr(element, 'aria-hidden', false);
attr(element, 'style', {display: 'block', color: 'red'});
attr(element, 'style', 'display:block; color:red');
attr(element, 'onClick', (e) => alert('Hello world'));

// Remove values
attr(element, 'id', null);
attr(element, 'checked', null);
attr(element, 'data-foo-bar', null);
attr(element, 'aria-hidden', null);
attr(element, 'style', null);
attr(element, 'onClick', null);
```

<br>

#### css

```javascript
css(HTMLElement: element, ?String|Object: property, ?Mixed: value): Mixed
```

```javascript
// Get inline styles
let display = css(element, 'display');
let cssVar  = css(element, '--foo-bar');

// Set inline styles
css(element, 'display', 'block');
css(element, 'color', 'red !important');
css(element, '--foo-bar', '20px');
css(element, {display: 'block', color: 'red'});

// Remove inline styles
css(element, 'display', false);
css(element, '--foo-bar', false);
```

<br>

#### rendered_style

```javascript
rendered_style(HTMLElement: element, ?String|Object: property, ?Mixed: value): Mixed
```

```javascript
// e.g. 'block'
let display = rendered_style(element, 'display');

// e.g. '20px'
let height = rendered_style(element, 'height');

// e.g. '1.6rem'
let fontSize = rendered_style(element, 'font-size');

```

<br>

#### height

```javascript
height(HTMLElement: element): Integer
```

```javascript
let y = height(element);
```

<br>

#### width

```javascript
width(HTMLElement: element): Integer
```

```javascript
let x = width(element);
```

<br>

#### closest

```javascript
closest(HTMLElement: element, String|Array: classNameOrTag): HTMLElement|null
```

```javascript
let parent = closest(element, 'div');
let parent = closest(element, '.my-class');
let parent = closest(element, ['div', '.my-class']);
```	

<br>

#### closest_class

```javascript
closest_class(HTMLElement: element, String|Array: className): HTMLElement
```

```javascript
let parent = closest_class(element, '.foo');
let parent = closest_class(element, ['.foo', '.bar']);
```

<br>

#### coordinates

```javascript
coordinates(HTMLElement: element): Object
```

```javascript
/*
{
        top: 10,
        left: 20,
        right: 50,
        bottom: 3000,
        height: 300,
        width: 200,
    };
*/
let position = coordinates(element, '.foo');
```

<br>

#### dom_element

```javascript
dom_element(Object: attributes, ?HTMLElement: appendTo, ?String|Array|HTMLElement: innerHTMLOrChildren): HTMLElement
```

```javascript
let container = dom_element({tag: 'div', class: 'container'});

let button = dom_element({tag: 'button', class: 'btn', type: 'button'}, null, 'Hello');

// &lt;div class=&quot;container&quot;&gt;&lt;span&gt;&lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Hello&lt;/button&gt;&lt;/span&gt;&lt;/div&gt;
dom_element({tag: 'span'}, container, [button]);

// &lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Hello&lt;/button&gt;
let button2 = dom_element({tag: 'button', class: 'btn', type: 'button', innerText: 'Hello'});

// &lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Hello&lt;/button&gt;
let button3 = dom_element({tag: 'button', class: 'btn', type: 'button', innerHTML: '&lt;span class=&quot;fa fa-start&quot;&gt;&lt;/span&gt;'});
```

<br>

#### first_children

```javascript
first_children(HTMLElement: element): Array
```

```javascript
let children = first_children(element);
```

<br>

#### form_inputs

```javascript
form_inputs(HTMLElement: element): Array
```

```javascript
let inputs = form_inputs(element);
```

<br>

#### form_values

```javascript
form_values(HTMLElement: element): Object
```

```javascript
let form = form_values(formElement);
```

<br>

#### hide_aria

```javascript
hide_aria(HTMLElement: element): Void
```

<br>

#### in_viewport

```javascript
in_viewport(HTMLElement: element): Boolean
```

<br>

#### inner_HTML

```javascript
inner_HTML(HTMLElement: element, String|Array: content, ?Boolean: append = false): Void
```

```javascript
inner_HTML(element, 'Hello world!');

inner_HTML(element, '&lt;br&gt;More text', true)
```

<br>

#### input_value

```javascript
input_value(HTMLElement: element): String|Integer|Float|Boolean
```

<br>

#### next

```javascript
next(HTMLElement: element, String|Array: classNameOrTag): HTMLElement|null
```

```javascript
let sibling = next(element, 'div');
let sibling = next(element, '.my-class');
let sibling = next(element, ['div', '.my-class']);
```

<br>

#### next_untill_class

```javascript
next_untill_class(HTMLElement: element, String|Array: className): HTMLElement|null
```

```javascript
let sibling = next_untill_class(element, '.foo');
let sibling = next_untill_class(element, ['.foo', '.bar']);
```

<br>

#### nth_child

```javascript
nth_child(HTMLElement: element, Integer: n): HTMLElement|undefined
```

```javascript
let first = nth_child(element, 0);
let second = nth_child(element, 1);
```

<br>

#### nth_siblings

```javascript
nth_siblings(HTMLElement: element): Integer
```

```javascript
// &lt;div&gt;1&lt;/div&gt;
// &lt;div &gt;2&lt;/div&gt;
// &lt;div class=&quot;three&quot;&gt;3&lt;/div&gt;

// returns 2
let position = nth_siblings(find('.three'));
```

<br>

#### preapend

```javascript
preapend(HTMLElement: element, HTMLElement: parent): Void
```

<br>

#### previous

```javascript
previous(HTMLElement: element, String|Array: className): HTMLElement|null
```

```javascript
// Finds previous div element
let sibling = previous(element, 'div');

// Finds previous div or span element
let sibling = previous(element, 'div, span');
let sibling = previous(element, ['div', 'span']);

// Finds previous element with class 'foo'
let sibling = previous(element, '.foo');
```

<br>

#### previous_untill_class

```javascript
previous_untill_class(HTMLElement: element, String|Array: className): HTMLElement|null
```

```javascript
// Finds previous element with class 'foo'
let sibling = previous_untill_class(element, 'foo');

// Finds previous element with class 'foo' or 'bar'
let sibling = previous_untill_class(element, 'foo, bar');
let sibling = previous_untill_class(element, ['foo', 'bar']);

// Finds previous element with class 'foo' and 'bar'
let sibling = previous_untill_class(element, 'foo.bar');
```

<br>

#### remove_from_dom

```javascript
remove_from_dom(HTMLElement: element): Void
```

<br>

#### scroll_pos

```javascript
scroll_pos(?HTMLElement: element = window): Object
```

```javascript
// e.g { top: 20, left: 30 }

// Window
let scroll = scroll_pos();

// element
let scroll = scroll_pos(element);
```

<br>

#### show_aria

```javascript
show_aria(HTMLElement: element): Void
```

<br>

#### traverse_up

```javascript
traverse_up(HTMLElement: element, Function: callback): Void
```

```javascript
traverse_up(element, (parent) =>
{
	if (has_class(parent, 'foo')) return true;
});
```

<br>

#### traverse_down	

```javascript
traverse_down(HTMLElement: element, Function: callback): Void
```

```javascript
traverse_down(element, (child) =>
{
	if (has_class(child, 'foo')) return true;
});
```

<br>

#### traverse_next

```javascript
traverse_next(HTMLElement: element, Function: callback): Void
```

```javascript
traverse_next(element, (sibling) =>
{
	if (has_class(sibling, 'foo')) return true;
});
```

<br>

#### traverse_prev

```javascript
traverse_prev(HTMLElement: element, Function: callback): Void
```

```javascript
traverse_prev(element, (sibling) =>
{
	if (has_class(sibling, 'foo')) return true;
});
```

<br>

#### trigger_event

```javascript
trigger_event(HTMLElement: element, String: event, ?Object: data = {}): Void
```

```javascript

trigger_event(element, 'click');

trigger_event(element, 'foo');

trigger_event(element, 'foo:bar');

// event.detail = { DOMElement: element, name: foo, foo: bar }
trigger_event(element, 'foo', { foo: 'bar' });

let foo = function() {};
foo.prototype.bar = function() {};

// event.detail = { DOMElement: DOMElement, name: eventName, state: foo };
trigger_event(element, 'foo', new foo);
```

---

### Animate

| Function      | Reference                                                    |
|---------------|--------------------------------------------------------------|
| `animate`     | Animates CSS property using JS key-frames and interpolation. |

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

<div class="code-content-example">
    <div class="row">
        <div class="center-horizontal bg-pastelteal fill js-animate-example" style="width: 300px;">animate me!</div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button type="button" class="btn js-animate-trigger">Animate</button>
    </div>
</div>

```JavaScript
animate($('.js-animate-example'), {
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

---

### Animate CSS

| Function      | Reference                                                    |
|---------------|--------------------------------------------------------------|
| `animate_css` | Animates CSS property using JS key-frames and interpolation. |

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
| **Basic:** | `linear` `ease` `easeIn` `easeOut` `easeInOut` |
| **Quad:**  | `easeInQuad` `easeOutQuad` `easeInOutQuad`     |
| **Cubic:** | `easeInCubic` `easeOutCubic` `easeInOutCubic`  |
| **Quart:** | `easeInQuart` `easeOutQuart` `easeInOutQuart`  |
| **Quint:** | `easeInQuint` `easeOutQuint` `easeInOutQuint`  |
| **Sine:**  | `easeInSine` `easeOutSine` `easeInOutSine`     |
| **Expo:**  | `easeInExpo` `easeOutExpo` `easeInOutExpo`     |
| **Circ:**  | `easeInCirc` `easeOutCirc` `easeInOutCirc`     |
| **Back:**  | `easeInBack` `easeOutBack` `easeInOutBack`     |


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

<div class="code-content-example">
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

---

### Array

| Function       | Description                                                                                                                                                                                                                                                      |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `each`         | Loops through an array or object and runs a callback on each iteration. Returning `false` will break the loop.                                                                                                                                                   |
| `map`          | Returns a new object or array by through and running a callback to accept or reject each iteration. Returning `false` rejects item. Returning `undefined` stops the loop. Any other return value will be set on the object or array under the current key/index. |
| `array_unique` | Filters out non-unique values from an array.                                                                                                                                                                                                                     |
| `array_filter` | Filters out empty items from an array or object and returns a new Array or Object.<br>Does not modify the original Array or Object, rather it will filter out empty items and return a new Object or Array.                                                      |
| `array_set`    | Sets a value to array or object using `dot.notation`.<br>Sets key/value an pair to any nested array or object via `dot.notation`. If parent items do not exist in the path, they are created.                                                                    |
| `array_get`    | Returns an item from an array or object using `dot.notation`.<br>Returns the item indexed by the path or `undefined` if it does not exist.                                                                                                                       |
| `array_has`    | Checks if an item from an array or object exists using `dot.notation` and returns a boolean.                                                                                                                                                                     |
| `array_delete` | Deletes an item from an array or object exists using `dot.notation`.                                                                                                                                                                                             |
| `in_array`     | Checks if an item exists in array or object.                                                                                                                                                                                                                     |


<br>

#### each

Loops through an array or object and runs a callback on each iteration. Returning `false` will break the loop.


```javascript
each(Array|Object: array, Function: callback, ?Mixed: this, ...args): Void
```

```javascript
// Loop an array
each(['one','two','three'], (index, value) => console.log(index, value));

// Loop an object
each({foo: 'one', bar: 'two'}, (key, value) => console.log(key, value));

// Stop loop
each(['one','two','three'], (index, value) => index >= 1 ? false : console.log(index));
```

<br>

#### map

Returns a new object or array by through and running a callback to accept or reject each iteration. Returning `false` rejects item. Returning `undefined` stops the loop. Any other return value will be set on the object or array under the current key/index.

```javascript
map(Array|Object: array, Function: callback, ?Mixed: this, ...args): Void
```

```javascript
// Loop an array
// [0,1,2]
let arr = map(['one','two','three'], (index, value) => index);

// {foo: 'foo', bar: 'bar'}
map({foo: 'one', bar: 'two'}, (key, value) => key);

// ['two']
let arr = map(['one','two'], (index, value) => value !== 'one' ? value : undefined);
```

<br>

#### array_unique

Filters out non-unique values from an array.

```javascript
array_unique(Array|Object: array): Array
```

```javascript
// [0,1,2,3]
let arr = array_unique([0,1,2,3,3]);
```

<br>

#### array_filter

Filters out empty items from an array or object and returns a new Array or Object.<br>Does not modify the original Array or Object, rather it will filter out empty items and return a new Object or Array.

```javascript
array_filter(Object|Array: array): Object|Array
```

```javascript
// [0, 1, 2, 3, 4, 5]
let array = [0, 1, 2, null, undefined, 3, 4, '', 5];
array = array_filter(array);

// [0, 1, 2, 3, 4, 5, 6]
let array = [0, 1, 2, null, undefined, 3, 4, '', [], 5, {}, 6];
array = array_filter(array);
```

<br>

#### array_set

Sets a value to array or object using `dot.notation`.<br>Sets key/value an pair to any nested array or object via `dot.notation`. If parent items do not exist in the path, they are created.

```javascript
array_set(String: path, Mixed: value, Object|Array: array): Void
```

To set an array key, use the array index with brackets `[num]`. For Objects simply use the Object key and a dot `.key`:

```javascript
let array = [
    {foo: 'foo'},
    {bar: 'bar'}
];

/*
[
    {foo: 'bar'},
    {bar: 'bar'}
];
*/
array_set('[0].foo', 'bar', array);
```

```javascript

let obj = {
    foo: [1,2,3],
    bar: [4,5,6]
};

/*
{
    foo: [9,2,3],
    bar: [4,5,6]
};
*/
array_set('foo[0]', 9, obj);
```

On nested nested Arrays/Objects if the path does not exist it will be created automatically.

```javascript
// [0, 1, 2, 3, 4, 5]
let obj = {
    foo: [
        { bar: { baz: [1, 2, 3] } }
    ]
};

/*
{
    foo: [
        { bar: { baz: [1, 9, 3], foo: [3] } }
    ]
};

*/
array_set('foo[1].bar.baz[1]', 9, obj);

array_set('foo[1].bar.foo[1]', 3, obj);
```

<br>

#### array_get

Returns an item from an array or object using `dot.notation`.<br>Returns the item indexed by the path or `undefined` if it does not exist.

```javascript
array_get(String: path, Object|Array: array): Mixed
```

```javascript
let array = [ {foo: 'foo'} ];

let foo = array_get('[0].foo', array);
```
To access an array key, use the array index with brackets `[num]`. For Objects simply use the Object key and a dot `.key`:

```javascript

let array = [
    {foo: 'foo'},
    {bar: 'bar'}
];

// foo
let foo = array_get('[0].foo', array);
```

```javascript

let obj = {
    foo: [1,2,3],
    bar: [4,5,6]
};

// 1
let one = array_get('foo[0]', obj);
```

`array_get` will work on deeply nested Arrays/Objects without having to run validation that the item exists first.

```javascript

let obj = {
    foo: [
        { bar: { baz: [1, 2, 3] } }
    ]
};

// Returns 2
let two = array_get('foo[0].bar.baz[1]', obj);

// Returns undefined
let undef = array_get('foo[0].bar.baz[15]', obj);
```

<br>

#### array_has

Checks if an item from an array or object exists using `dot.notation` and returns a boolean.


```javascript
array_has(String: path, Object|Array: array): Boolean
```

```javascript
let array = [ {foo: 'foo'} ];

// true
array_has('[0].foo', array);
```

<br>

#### array_delete

```javascript
array_has(String: path, Object|Array: array): Void
```

```javascript
let array = [ {foo: 'foo'} ];

// No need re-assign here as the original array is now modified.
array_delete('[0].foo', array);
```

<br>

#### in_array

Checks if an item exists in array or object.

```javascript
in_array(Mixed: needle, Object|Array: array, ?Boolean: strict = false): Void
```

```javascript
let array = [ 1, 2, 3 ];

// true
in_array(2, array);

// false
in_array(5, array);
```

When passing `strict` as `true`, values must be the same 

```javascript
let obj = { foo: 'bar' };
let array = [obj];

// true
in_array(obj, array);

// true
in_array({ foo: 'bar' }, array);

// false
in_array({ foo: 'bar' }, array, true);
```

---

### Object

| Function       | Description                                                                               |
|----------------|-------------------------------------------------------------------------------------------|
| `extend`       | Extends two objects, object functions.                                                    |
| `clone_deep`   | Deep clones an object or array including all nested values.                               |
| `bind`         | Binds a function to a context so it can be identified later if needed.                    |
| `flatten_obj`  | Returns a new flattened version of an object and it's `prototype`(s) with its properties. |
| `object_props` | Returns an array of keys of all properties of an object and its `prototype`(s).           |
| `prototypes`   | Returns a flat array of of all nested prototypes of an object.                            |


<br>

#### extend

Extends two objects, object functions

```javascript
extend(Object|Function: base, Object|Function: extension): Object|Function
```

```javascript
const Base = function(one, two)
{
	this.one = one;

	this.two = two;

	this.doSomething();
}
Base.prototype.doSomething = function()
{
	console.log(`${this.one} ${this.two}`);
}

const Extension = function(one, two)
{
	this.super(one, two);
}

const Extended = extend(Base, Extension);

// hello world!
let e = new Extended('hello', 'world!');
```

```javascript
const Base = function(one, two)
{
	this.one = one;

	this.two = two;
}
Base.prototype.doSomething = function()
{
	console.log(`${this.one} ${this.two}`);
}

const Extension = function(one, two)
{
	this.one = one;

	this.two = two;
}

const Extended = extend(new Base('foo', 'bar'), new Extension('hello', 'world'));

// hello world!
Extended.doSomething();
```

<br>

#### clone_deep

Deep clones an object or array including all nested values.

```javascript
clone_deep(Mixed: original): Mixed
```

```javascript
let clone = clone_deep([ {foo: 'foo'} ]);

let clone = clone_deep({foo : () => console.log('hello world')});
```

<br>

#### bind

Binds a function to a context so it can be identified later if needed.

```javascript
bind(Function: function, Mixed: context): Function
```

```javascript
function foo() { console.log(this); }

let bound = bind(foo, 'bar');

// bar
bound();
```

<br>

#### flatten_obj

Returns a new flattened version of an object and it's `prototype`(s) with its properties.

```javascript
flatten_obj(Object: object, ?deep: deep = false): Object
```

```javascript
const WithProto = function(one, two) { }
WithProto.prototype.doSomething = function() { }

// { doSomething: function()... }
let flat = flatten_obj(new WithProto);
```

<br>

#### object_props

Returns an array of keys of all properties of an object and its `prototype`(s).

```javascript
object_props(Object: object, ?deep: deep = false): Array
```

```javascript
const WithProto = function(one, two) { this.foo = 'bar' }
WithProto.prototype.doSomething = function() { }

// [ 'foo', 'doSomething' ]
let props = object_props(new WithProto);
```

<br>

#### prototypes

Returns a flat array of of all nested prototypes of an object.

```javascript
prototypes(Object: object): Array
```

```javascript
const WithProto = function(one, two) { this.foo = 'bar' }
WithProto.prototype.doSomething = function() { }

// { foo: 'bar', doSomething: function()... }
let protos = prototypes(new WithProto);
```

---

### String

| Function                                             | Description                                                 |
|------------------------------------------------------|-------------------------------------------------------------|
| `camel_case_to_hyphen(String: str): String`          | Converts string to `hyphen-case`.                           |
| `to_camel_case(String: str): String`                 | Converts string to `CamelCase`                              |
| `replace(String: str, Array: search, Array: replace` | Replaces a charlist in a string                             |
| `json_decode(String: str): Object`                   | JSON decodes a string.                                      |
| `json_encode(Object: Object): String`                | JSON encodes an object                                      |
| `lc_first(String: str): String`                      | Lowercases first char.                                      |
| `uc_first(String: str): String`                      | Uppercases first char.                                      |
| `uc_words(String: str): String`                      | Uppercases first char of each word.                         |
| `ltrim(String: str, ?Array: search): String`         | Left trims optional char of char list from string.          |
| `rtrim(String: str, ?Array: search): String`         | Right trims optional char of char list from string.         |
| `trim(String: str, ?Array: search): String`          | Trims optional char of char list from both sides of string. |

---

### Validation

| Function                                  | Description                                                                                                  |
|-------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `is_constructed`                          | Returns `true` if object is a constructed instance.                                                          |
| `is_number`                               | Returns `true` if value is `Float` or `Integer`.                                                             |
| `callable_name`                           | Returns function name.                                                                                       |
| `is_dataview`                             | Returns `true` on `[object DataView]` types.                                                                 |
| `is_numeric`                              | Returns true on numeric `String` or `Float` or `Integer`                                                     |
| `is_date`                                 | Returns true on numeric `Date` types.                                                                        |
| `is_object`                               | Returns true if value is an `Object`.                                                                        |
| `count`                                   | Returns `Array`, `Object` length.                                                                            |
| `is_empty`                                | Returns `true` on empty strings, `false`, `undefined`, `null`, `NaN`, `[]`, `{}`.                            |
| `is_regexp`                               | Returns true `RegExp` instance.                                                                              |
| `in_dom`                                  | Returns true if element in live Dom.                                                                         |
| `is_equal(a, b, strict)`                  | Returns `true` if values are equal (traverses nested element). If `strict` values must be the same instance. |
| `is_set`                                  | Returns `true` on `[object Set]`.                                                                            |
| `is_args`                                 | Returns `true` on `[object Arguments]`.                                                                      |
| `is_function`                             | Returns `true` on `Function`                                                                                 |
| `is_string`                               | Returns `true` on `String`                                                                                   |
| `is_array`                                | Returns `true` on `Array`                                                                                    |
| `is_htmlElement`                          | Returns `true` on any valid `HTMLElement`                                                                    |
| `is_symbol`                               | Returns `true` on `[object Symbol]`.                                                                         |
| `is_bool`                                 | Returns `true` on `Boolean`.                                                                                 |
| `is_json`                                 | Returns `true` on valid `JSON` string.                                                                       |
| `is_undefined`                            | Returns `true` on `undefined`.                                                                               |
| `is_buffer`                               | Returns `true` on `[object ArrayBuffer]`.                                                                    |
| `is_map`                                  | Returns `true` on `[object Map]`.                                                                            |
| `is_callable`                             | Returns `true` if value is a callable `Function` and not a constructable object function.                    |
| `is_node_type(mixed_var, tag)`            | Returns `true` if HTMLElement tagname matches value.                                                         |
| `var_type`                                | Returns `Object.prototype.toString` on variable.                                                             |
| `is_class(mixed_var, ?classname, strict)` | Checks if variable is an ES6 Class.                                                                          |
| `is_nodelist`                             | returns `true` on nodelist.                                                                                  |
| `is_constructable`                        | returns `true` if value is constructable object function                                                     |
| `is_null`                                 | returns `true` if value is `null`                                                                            |

---

### Misc

| Function        | Description                                      |
|-----------------|--------------------------------------------------|
| `is_retina`     | Checks if display is high pixel density.         |
| `parse_url`     | Parses a URL and returns a URL Object.           |
| `normalize_url` | Normalizes a URL consistently                    |
| `url_query`     | Parses a URL query string and returns an object. |

---