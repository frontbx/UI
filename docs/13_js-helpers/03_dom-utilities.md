# Dom Utilities

| link                                                               | Function                | Reference                                                                                                                                                                                                                                                                                                                              |
|:------------------------------------------------------------------:|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="#find" class="js-waypoint-trigger">#</a>                  | `find`                  | Finds first single element by CSS selector and returns it.                                                                                                                                                                                                                                                                             |
| <a href="#find_all" class="js-waypoint-trigger">#</a>              | `find_all`              | Finds all elements by CSS selector and returns array.                                                                                                                                                                                                                                                                                  |
| <a href="#add_class" class="js-waypoint-trigger">#</a>             | `add_class`             | Adds class(es) to HTMLElement(s).                                                                                                                                                                                                                                                                                                      |
| <a href="#remove_class" class="js-waypoint-trigger">#</a>          | `remove_class`          | Removes class(es) to HTMLElement(s).                                                                                                                                                                                                                                                                                                   |
| <a href="#has_class" class="js-waypoint-trigger">#</a>             | `has_class`             | Checks if an HTMLElement(s) have a class or classes.                                                                                                                                                                                                                                                                                   |
| <a href="#toggle_class" class="js-waypoint-trigger">#</a>          | `toggle_class`          | Adds OR removes class(es) to HTMLElement(s).                                                                                                                                                                                                                                                                                           |
| <a href="#attr" class="js-waypoint-trigger">#</a>                  | `attr`                  | Sets, gets or removes any attribute on an HTMLElement.                                                                                                                                                                                                                                                                                 |
| <a href="#css" class="js-waypoint-trigger">#</a>                   | `css`                   | Set, get or remove CSS value(s) on element. Note that this will only return inline styles, use `rendered_style` for currently displayed styles.                                                                                                                                                                                        |
| <a href="#rendered_style" class="js-waypoint-trigger">#</a>        | `rendered_style`        | Returns currently rendered style attribute of an element.                                                                                                                                                                                                                                                                              |
| <a href="#height" class="js-waypoint-trigger">#</a>                | `height`                | Returns height in pixels of an element.                                                                                                                                                                                                                                                                                                |
| <a href="#width" class="js-waypoint-trigger">#</a>                 | `width`                 | Returns element width in pixels.                                                                                                                                                                                                                                                                                                       |
| <a href="#closest" class="js-waypoint-trigger">#</a>               | `closest`               | Traverses up DOM tree to first parent by class name OR tag type and returns element if matched.                                                                                                                                                                                                                                        |
| <a href="#closest_class" class="js-waypoint-trigger">#</a>         | `closest_class`         | Traverses up DOM tree to first parent by class name and returns element if matched.                                                                                                                                                                                                                                                    |
| <a href="#coordinates" class="js-waypoint-trigger">#</a>           | `coordinates`           | Returns an object of absolute coordinates of element relative to page.                                                                                                                                                                                                                                                                 |
| <a href="#dom_element" class="js-waypoint-trigger">#</a>           | `dom_element`           | Creates and returns an HTMLElement via an object of attributes. Attributes can be any HTML attribute to apply to the elem. Passing `on[Event]` will add an event listener to the element.                                                                                                                                              |
| <a href="#first_children" class="js-waypoint-trigger">#</a>        | `first_children`        | Returns immediate first children of element.                                                                                                                                                                                                                                                                                           |
| <a href="#form_inputs" class="js-waypoint-trigger">#</a>           | `form_inputs`           | Returns all inputs, textarea and select elements of a form element.                                                                                                                                                                                                                                                                    |
| <a href="#form_values" class="js-waypoint-trigger">#</a>           | `form_values`           | Returns an key/value object of all form input, textarea and select element values.<br>Values are sanitized and are converted to `String` `Integer` `Float` where appropriate. Form inputs with a name `name[]` will be concatenated into an `Array`. Accepts radio and checkbox elements also.                                         |
| <a href="#hide_aria" class="js-waypoint-trigger">#</a>             | `hide_aria`             | Sets aria-hidden to true.                                                                                                                                                                                                                                                                                                              |
| <a href="#in_viewport" class="js-waypoint-trigger">#</a>           | `in_viewport`           | Returns true if element is in viewport.                                                                                                                                                                                                                                                                                                |
| <a href="#inner_HTML" class="js-waypoint-trigger">#</a>            | `inner_HTML`            | Sets innerHTML of an element and clears any old event listeners.                                                                                                                                                                                                                                                                       |
| <a href="#input_value" class="js-waypoint-trigger">#</a>           | `input_value`           | Returns input value of an input, textarea or select element.<br>Values are sanitized and are converted to `String` `Integer` `Float` where appropriate.<br>Radio elements will return the input value when checked. Checkbox elements will return a boolean.<br>File inputs will return a file object or array when `multiple` is set. |
| <a href="#next" class="js-waypoint-trigger">#</a>                  | `next`                  | Traverses forwards through siblings to first element by class name OR tag type and returns element if matched.                                                                                                                                                                                                                         |
| <a href="#next_untill_class" class="js-waypoint-trigger">#</a>     | `next_untill_class`     | Traverses forwards through siblings to first element by class name and returns element if matched.                                                                                                                                                                                                                                     |
| <a href="#nth_child" class="js-waypoint-trigger">#</a>             | `nth_child`             | Returns nth direct child element of parent element if it exists.                                                                                                                                                                                                                                                                       |
| <a href="#nth_siblings" class="js-waypoint-trigger">#</a>          | `nth_siblings`          | Returns index of element relative to it's siblings. For example if the element is the second                                                                                                                                                                                                                                           |
| <a href="#preapend" class="js-waypoint-trigger">#</a>              | `preapend`              | Appends HTMLElement as first child to an element.                                                                                                                                                                                                                                                                                      |
| <a href="#previous" class="js-waypoint-trigger">#</a>              | `previous`              | Traverses backwards through siblings to first element by class name OR tag type and returns element if matched.                                                                                                                                                                                                                        |
| <a href="#previous_untill_class" class="js-waypoint-trigger">#</a> | `previous_untill_class` | Traverses backwards through siblings to first element by class name and returns element if matched.                                                                                                                                                                                                                                    |
| <a href="#remove_from_dom" class="js-waypoint-trigger">#</a>       | `remove_from_dom`       | Removes element from DOM and clears any event listeners attached to it.                                                                                                                                                                                                                                                                |
| <a href="#scroll_pos" class="js-waypoint-trigger">#</a>            | `scroll_pos`            | Returns scroll position of any element or viewport.                                                                                                                                                                                                                                                                                    |
| <a href="#show_aria" class="js-waypoint-trigger">#</a>             | `show_aria`             | Sets aria-hidden to true                                                                                                                                                                                                                                                                                                               |
| <a href="#traverse_up" class="js-waypoint-trigger">#</a>           | `traverse_up`           | Traverses up DOM tree and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                  |
| <a href="#traverse_down" class="js-waypoint-trigger">#</a>         | `traverse_down`         | Traverses down DOM tree and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                |
| <a href="#traverse_next" class="js-waypoint-trigger">#</a>         | `traverse_next`         | Traverses next siblings and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                |
| <a href="#traverse_prev" class="js-waypoint-trigger">#</a>         | `traverse_prev`         | Traverses next siblings and calls callback on each element until callback returns true.                                                                                                                                                                                                                                                |
| <a href="#trigger_event" class="js-waypoint-trigger">#</a>         | `trigger_event`         | Triggers a custom or native DOM event on an element. Custom events are nestable with a colon value.                                                                                                                                                                                                                                    |

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
