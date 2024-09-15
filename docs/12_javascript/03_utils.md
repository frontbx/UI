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
*	[String](#object)
*	[Validation](#validation)
*	[Misc](#misc)

---

FrontBx comes with a handy JavaScript utility library to help speed up production. The library is similar to something like jQuery, but with less bloat. This documentation provides a simple API reference, however for more in-depth detail you can view the library's source code which is well documented.

The documentation below is broken down into logical groupings.

### Access

FrontBx's Utility Component can be accessed globally via the Inversion container through the `_` key.

```javascript
const utils = FrontBx._();
```

You can also `import` and cache specific functions from the utility library, which reduces memory and is more performant. For example:


```javascript
const [add_class, remove_class] = FrontBx.import(['add_class', 'remove_class']).from('_');
```

---

### Event Listeners

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>on</code></td>
			<td>Adds a removable event listener to any HTMLElement.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">on(HTMLElement: element, String: event, Function: callback, ?Array|Mixed: args): Void</code></pre>
				<pre><code class="javascript language-javascript">// Anonymous function
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
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>off</code></td>
			<td>Removes an event listener from any HTMLElement.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">off(HTMLElement: element, String: event, Function: callback, ?Array|Mixed: args): Void</code></pre>
				<pre><code class="javascript language-javascript">// Add the event listener
let func = (event, element) => console.log(event, element);
on(element, 'click', func);

// Removes specific event listener
off(element, 'click', func);

// Removes all 'click' listeners
off(element, 'click');

// Removes all event listeners
off(element);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>clear_event_listeners</code></td>
			<td>Removes all event listeners from an element and all it's children.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">clear_event_listeners(HTMLElement: element, Boolean: onlyChildren = false): Void</code></pre>
				<pre><code class="javascript language-javascript">// Removes all listeners including on any children
clear_event_listeners(element);

// Removes all listeners from children but not parent
clear_event_listeners(element, true);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>collect_garbage</code></td>
			<td>Removes all event listeners from elements no longer in the live DOM.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">collect_garbage(): Void</code></pre>
			</td>
		</tr>
	</tbody>
</table>


<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>event_listeners</code></td>
			<td>Returns an array of all attached event listeners on element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">event_listeners(HTMLElement|String: element, ?String: eventName): array</code></pre>
				<pre><code class="javascript language-javascript">// [ { el: details.element, callback: details.callback, type: type } ]

// Returns all event listeners
let events = event_listeners();

// Returns all 'click' event listeners
let events = event_listeners('click');

// Returns all event listeners on element
let events = event_listeners(element);

// Returns all 'click' event listeners on element
let events = event_listeners(element, 'click');
				</code></pre>
			</td>
		</tr>
	</tbody>
</table>

---

### Dom Utilities

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>find</code></td>
			<td>Finds first single element by CSS selector and returns it.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">find(HTMLElement: element, ?HTMLElement: context = window): HTMLElement|Undefined</code></pre>
				<pre><code class="javascript language-javascript">let div = find('div');

let id = find('#foo');

let clas = find('.foo.bar');

let child = find('.foo', div);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>find_all</code></td>
			<td>Finds all elements by CSS selector and returns array.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">find(HTMLElement: element, ?HTMLElement: context = window): Array</code></pre>
				<pre><code class="javascript language-javascript">let divs = find_all('div');

let classes = find_all('.foo.bar');

let children = find_all('.foo', divs[0]);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
	 	<tr>
	    	<td><code>add_class</code></td>
	    	<td>Adds class(es) to HTMLElement(s).</td>
	  	</tr>
	  	<tr>
	    	<td colspan="2">
	    		<pre><code class="javascript language-javascript">add_class(HTMLElement|Array: element, String|Array: className): Void</code></pre>
	    		<pre><code class="javascript language-javascript">
add_class(element, 'foo');

add_class(element, 'foo, bar');

add_class(element, '.foo.bar');

add_class([element1, element2], ['foo', 'bar']);</code></pre>
	    	</td>
	  	</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>remove_class</code></td>
			<td>Removes class(es) to HTMLElement(s).</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">remove_class(HTMLElement|Array: element, String|Array: className): Void</code></pre>
	    		<pre><code class="javascript language-javascript">remove_class(element, 'foo');

remove_class(element, 'foo, bar');

remove_class(element, 'foo.bar');

remove_class([element1, element2], ['foo', 'bar']);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>has_class</code></td>
			<td>Checks if an HTMLElement(s) have a class or classes.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">has_class(HTMLElement: element, String|Array: className): Boolean</code></pre>
				<pre><code class="javascript language-javascript">// Has class 'foo' or 'bar'
if (has_class(element, 'foo, bar')) { }

// Has class 'foo' or 'bar'
if (has_class(element, ['foo', 'bar'])) { }

// Has class foo and bar
if (has_class(element, '.foo.bar')) { }</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>toggle_class</code></td>
			<td>Adds OR removes class(es) to HTMLElement(s).</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">toggle_class(HTMLElement|Array: element, String|Array: className): Void</code></pre>
	    		<pre><code class="javascript language-javascript">toggle_class(element, 'foo');

toggle_class(element, 'foo, bar');

toggle_class(element, '.foo.bar');

toggle_class([element1, element2], ['foo', 'bar']);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>attr</code></td>
			<td>Sets, gets or removes any attribute on an HTMLElement.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">attr(HTMLElement: element, ?String|Object: nameOrObect, ?Mixed: value): Mixed</code></pre>
				<pre><code class="javascript language-javascript">// Get values
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
attr(element, 'onClick', null);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>css</code></td>
			<td>Set, get or remove CSS value(s) on element. Note that this will only return inline styles, use <code>rendered_style</code> for currently displayed styles.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">css(HTMLElement: element, ?String|Object: property, ?Mixed: value): Mixed</code></pre>
				<pre><code class="javascript language-javascript">// Get inline styles
let display = css(element, 'display');
let cssVar  = css(element, '--foo-bar');

// Set inline styles
css(element, 'display', 'block');
css(element, 'color', 'red !important');
css(element, '--foo-bar', '20px');
css(element, {display: 'block', color: 'red'});

// Remove inline styles
css(element, 'display', false);
css(element, '--foo-bar', false);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>rendered_style</code></td>
			<td>Returns currently rendered style attribute of an element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">rendered_style(HTMLElement: element, ?String|Object: property, ?Mixed: value): Mixed</code></pre>
				<pre><code class="javascript language-javascript">// e.g. 'block'
let display = rendered_style(element, 'display');

// e.g. '20px'
let height = rendered_style(element, 'height');

// e.g. '1.6rem'
let fontSize = rendered_style(element, 'font-size');
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>height</code></td>
			<td>Returns height in pixels of an element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">height(HTMLElement: element): Integer</code></pre>
				<pre><code class="javascript language-javascript">let y = height(element);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>width</code></td>
			<td>Returns element width in pixels.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">width(HTMLElement: element): Integer</code></pre>
				<pre><code class="javascript language-javascript">let x = width(element);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
	  	<tr>
			<td><code>closest</code></td>
			<td>Traverses up DOM tree to first parent by class name OR tag type and returns element if matched.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">closest(HTMLElement: element, String|Array: classNameOrTag): HTMLElement|null</code></pre>
				<pre><code class="javascript language-javascript">let parent = closest(element, 'div');
let parent = closest(element, '.my-class');
let parent = closest(element, ['div', '.my-class']);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>closest_class</code></td>
			<td>Traverses up DOM tree to first parent by class name and returns element if matched.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">closest(HTMLElement: element, String|Array: className): HTMLElement</code></pre>
				<pre><code class="javascript language-javascript">let parent = closest_class(element, '.foo');
let parent = closest_class(element, ['.foo', '.bar']);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>coordinates</code></td>
			<td>Returns an object of absolute coordinates of element relative to page.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">coordinates(HTMLElement: element): Object</code></pre>
				<pre><code class="javascript language-javascript">/*
{
        top: 10,
        left: 20,
        right: 50,
        bottom: 3000,
        height: 300,
        width: 200,
    };
*/
let position = coordinates(element, '.foo');</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>dom_element</code></td>
			<td>Creates and returns an HTMLElement via an object of attributes. Attributes can be any HTML attribute to apply to the element. Passing <code>on[Event]</code> will add an event listener to the element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">dom_element(Object: attributes, ?HTMLElement: appendTo, ?String|Array|HTMLElement: innerHTMLOrChildren): HTMLElement</code></pre>
				<pre><code class="javascript language-javascript">let container = dom_element({tag: 'div', class: 'container'});

let button = dom_element({tag: 'button', class: 'btn', type: 'button'}, null, 'Hello');

// &lt;div class=&quot;container&quot;&gt;&lt;span&gt;&lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Hello&lt;/button&gt;&lt;/span&gt;&lt;/div&gt;
dom_element({tag: 'span'}, container, [button]);

// &lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Hello&lt;/button&gt;
let button2 = dom_element({tag: 'button', class: 'btn', type: 'button', innerText: 'Hello'});

// &lt;button class=&quot;btn&quot; type=&quot;button&quot;&gt;Hello&lt;/button&gt;
let button3 = dom_element({tag: 'button', class: 'btn', type: 'button', innerHTML: '&lt;span class=&quot;fa fa-start&quot;&gt;&lt;/span&gt;'});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>first_children</code></td>
			<td>Returns immediate first children of element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">first_children(HTMLElement: element): Array</code></pre>
				<pre><code class="javascript language-javascript">let children = first_children(element);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>form_inputs</code></td>
			<td>Returns all inputs, textarea and select elements of a form element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">form_inputs(HTMLElement: element): Array</code></pre>
				<pre><code class="javascript language-javascript">let inputs = form_inputs(element);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>form_values</code></td>
			<td>Returns an key/value object of all form input, textarea and select element values.<br>Values are sanitized and are converted to <code>String</code> <code>Integer</code> <code>Float</code> where appropriate. Form inputs with a name <code>name[]</code> will be concatenated into an <code>Array</code>. Accepts radio and checkbox elements also.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">form_values(HTMLElement: element): Object</code></pre>
				<pre><code class="javascript language-javascript">let form = form_values(formElement);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>hide_aria</code></td>
			<td>Sets aria-hidden to true.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">hide_aria(HTMLElement: element): Void</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>in_viewport</code></td>
			<td>Returns true if element is in viewport.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">in_viewport(HTMLElement: element): Boolean</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>inner_HTML</code></td>
			<td>Sets innerHTML of an element and clears any old event listeners.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">inner_HTML(HTMLElement: element, String|Array: content, ?Boolean: append = false): Void</code></pre>
				<pre><code class="javascript language-javascript">inner_HTML(element, 'Hello world!');

inner_HTML(element, '&lt;br&gt;More text', true)</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>input_value</code></td>
			<td>Returns input value of an input, textarea or select element.<br>Values are sanitized and are converted to <code>String</code> <code>Integer</code> <code>Float</code> where appropriate.<br>Radio elements will return the input value when checked. Checkbox elements will return a boolean.<br>File inputs will return a file object or array when <code>multiple</code> is set.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">input_value(HTMLElement: element): String|Integer|Float|Boolean</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>next</code></td>
			<td>Traverses forwards through siblings to first element by class name OR tag type and returns element if matched.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">next(HTMLElement: element, String|Array: classNameOrTag): HTMLElement|null</code></pre>
				<pre><code class="javascript language-javascript">let sibling = next(element, 'div');
let sibling = next(element, '.my-class');
let sibling = next(element, ['div', '.my-class']);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>next_untill_class</code></td>
			<td>Traverses forwards through siblings to first element by class name and returns element if matched.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">next(HTMLElement: element, String|Array: className): HTMLElement|null</code></pre>
				<pre><code class="javascript language-javascript">let sibling = next(element, '.foo');
let sibling = next(element, ['.foo', '.bar']);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nth_child</code></td>
			<td>Returns nth direct child element of parent element if it exists.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">nth_child(HTMLElement: element, Integer: n): HTMLElement|undefined</code></pre>
				<pre><code class="javascript language-javascript">let first = nth_child(element, 0);
let second = nth_child(element, 1);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>nth_siblings</code></td>
			<td>Returns index of element relative to it's siblings. For example if the element is the second</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">nth_siblings(HTMLElement: element): Integer</code></pre>
				<pre><code class="javascript language-javascript">
// &lt;div&gt;1&lt;/div&gt;
// &lt;div &gt;2&lt;/div&gt;
// &lt;div class=&quot;three&quot;&gt;3&lt;/div&gt;

// returns 2
let position = nth_siblings(find('.three'));</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>preapend</code></td>
			<td>Appends HTMLElement as first child to an element.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">preapend(HTMLElement: element, HTMLElement: parent): Void</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>previous</code></td>
			<td>Traverses backwards through siblings to first element by class name OR tag type and returns element if matched.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">previous(HTMLElement: element, String|Array: className): HTMLElement|null</code></pre>
				<pre><code class="javascript language-javascript">// Finds previous div element
let sibling = previous(element, 'div');

// Finds previous div or span element
let sibling = previous(element, 'div, span');
let sibling = previous(element, ['div', 'span']);

// Finds previous element with class 'foo'
let sibling = previous(element, '.foo');</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>previous_untill_class</code></td>
			<td>Traverses backwards through siblings to first element by class name and returns element if matched.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">previous_untill_class(HTMLElement: element, String|Array: className): HTMLElement|null</code></pre>
				<pre><code class="javascript language-javascript">// Finds previous element with class 'foo'
let sibling = previous_untill_class(element, 'foo');

// Finds previous element with class 'foo' or 'bar'
let sibling = previous_untill_class(element, 'foo, bar');
let sibling = previous_untill_class(element, ['foo', 'bar']);

// Finds previous element with class 'foo' and 'bar'
let sibling = previous_untill_class(element, 'foo.bar');</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>remove_from_dom</code></td>
			<td>Removes element from DOM and clears any event listeners attached to it.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">remove_from_dom(HTMLElement: element): Void</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>scroll_pos</code></td>
			<td>Returns scroll position of any element or viewport.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">scroll_pos(?HTMLElement: element = window): Object</code></pre>
				<pre><code class="javascript language-javascript">// e.g { top: 20, left: 30 }

// Window
let scroll = scroll_pos();

// element
let scroll = scroll_pos(element);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>show_aria</code></td>
			<td>Sets aria-hidden to true</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">show_aria(HTMLElement: element): Void</code></pre>
			</td>
		</tr>
	</tbody>
</table>


<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>traverse_up</code></td>
			<td>Traverses up DOM tree and calls callback on each element until callback returns true.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">traverse_up(HTMLElement: element, Function: callback): Void</code></pre>
				<pre><code class="javascript language-javascript">traverse_up(element, (parent) =>
{
	if (has_class(parent, 'foo')) return true;
});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>traverse_down</code></td>
			<td>Traverses down DOM tree and calls callback on each element until callback returns true.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">traverse_down(HTMLElement: element, Function: callback): Void</code></pre>
				<pre><code class="javascript language-javascript">traverse_down(element, (child) =>
{
	if (has_class(child, 'foo')) return true;
});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>traverse_next</code></td>
			<td>Traverses next siblings and calls callback on each element until callback returns true.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">traverse_next(HTMLElement: element, Function: callback): Void</code></pre>
				<pre><code class="javascript language-javascript">traverse_next(element, (sibling) =>
{
	if (has_class(sibling, 'foo')) return true;
});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>traverse_prev</code></td>
			<td>Traverses next siblings and calls callback on each element until callback returns true.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">traverse_prev(HTMLElement: element, Function: callback): Void</code></pre>
				<pre><code class="javascript language-javascript">traverse_prev(element, (sibling) =>
{
	if (has_class(sibling, 'foo')) return true;
});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>trigger_event</code></td>
			<td>Triggers a custom or native DOM event on an element. Custom events are nestable with a colon value.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">trigger_event(HTMLElement: element, String: event, ?Object: data = {}): Void</code></pre>
				<pre><code class="javascript language-javascript">
trigger_event(element, 'click');

trigger_event(element, 'foo');

trigger_event(element, 'foo:bar');

// event.detail = { DOMElement: element, name: foo, foo: bar }
trigger_event(element, 'foo', { foo: 'bar' });

let foo = function() {};
foo.prototype.bar = function() {};

// event.detail = { DOMElement: DOMElement, name: eventName, state: foo };
trigger_event(element, 'foo', new foo);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

---

### Animate

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>animate</code></td>
			<td>Animates any transform, color, or numeric CSS property on an HTML DOM element via JavaScript keyframes.<br>Creates an animation effect on CSS property via JavaScript keyframes and returns an Animation Object. Any existing animations under the same property on the element that are currently animating but not completed will be stopped and interrupted prior to starting.</td>
		</tr>
		<tr>
			<td colspan="2">
				Syntax used to animate a single CSS property without explicitly providing a start value. The starting value will be determined by the currently rendered CSS style on the element. In the case that the start value for the property is not explicit set, animate will still be able to calculate the rendered value. Works on all values including those set to `auto`, `initial`, `unset`.
				<pre><code class="javascript language-javascript">animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object</code></pre>
				<pre><code class="javascript language-javascript">animate(node,
{
	height: '300px',
	easing: 'easeInExpo',
	duration: 1000,
	callback: () => console.log('complete')
});</code></pre><br>
				Syntax used to animate a single CSS property while explicitly providing a start value. The starting value will be determined by the currently rendered CSS style on the element. In the case that the start value for the property is not explicit set, animate will still be able to calculate the rendered value. Works on all values including those set to `auto`, `initial`, `unset`.
				<pre><code class="javascript language-javascript">animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object</code></pre>
				<pre><code class="javascript language-javascript">animate(node,
{
	property: 'height',
	from: '10px',
	to: '300px',
	easing: 'easeInExpo',
	duration: 1000,
	callback: () => console.log('complete')
});</code></pre><br>
				Syntax used to animate multiple CSS properties with independent animation options for each property.
				<pre><code class="javascript language-javascript">animate(HTMLElement: element, Object: options[...property: [to, from, easing, duration, callback] ]): Object</code></pre>
				<pre><code class="javascript language-javascript">animate(node,
{
	height: { from: '0px', to: '100px', duration: 350, easing: 'easeInOutElastic' },

	opacity: { to: '0', duration: 500, easing: 'linear' }
});</code></pre>
			</td>
		</tr>
	</tbody>
</table>


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
        <div class="center-horizontal bg-teal fill js-animate-example" style="width: 300px;">animate me!</div>
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
````

---

### Animate CSS

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>animate_css</code></td>
			<td>Animates any animatable CSS property on an HTML DOM element via CSS transitions<br>Creates an animation effect on CSS property via CSS transitions and returns an Animation Object. Any existing animations under the same property on the element that are currently animating but not completed will be stopped and interrupted prior to starting.</td>
		</tr>
		<tr>
			<td colspan="2">
				Syntax used to animate a single CSS property without explicitly providing a start value. The starting value will be determined by the currently rendered CSS style on the element. In the case that the start value for the property is not explicit set, animate will still be able to calculate the rendered value. Works on all values including those set to `auto`, `initial`, `unset`.
				<pre><code class="javascript language-javascript">animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object</code></pre>
				<pre><code class="javascript language-javascript">animate(node,
{
	height: '300px',
	easing: 'easeInExpo',
	duration: 1000,
	callback: () => console.log('complete')
});</code></pre><br>
				Syntax used to animate a single CSS property while explicitly providing a start value. The starting value will be determined by the currently rendered CSS style on the element. In the case that the start value for the property is not explicit set, animate will still be able to calculate the rendered value. Works on all values including those set to `auto`, `initial`, `unset`.
				<pre><code class="javascript language-javascript">animate(HTMLElement: element, Object: options[property, easing, duration, callback]): Object</code></pre>
				<pre><code class="javascript language-javascript">animate(node,
{
	property: 'height',
	from: '10px',
	to: '300px',
	easing: 'easeInExpo',
	duration: 1000,
	callback: () => console.log('complete')
});</code></pre><br>
				Syntax used to animate multiple CSS properties with independent animation options for each property.
				<pre><code class="javascript language-javascript">animate(HTMLElement: element, Object: options[...property: [to, from, easing, duration, callback] ]): Object</code></pre>
				<pre><code class="javascript language-javascript">animate(node,
{
	height: { from: '0px', to: '100px', duration: 350, easing: 'easeInOutElastic' },

	opacity: { to: '0', duration: 500, easing: 'linear' }
});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

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
        <div class="center-horizontal bg-teal fill js-animate-css-example" style="width: 300px;">animate me!</div>
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
````

---

### Array

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>each</code></td>
			<td>Loops through an array or object and runs a callback on each iteration. Returning <code>false</code> will break the loop.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">each(Array|Object: array, Function: callback, ?Mixed: this, ...args): Void</code></pre>
				<pre><code class="javascript language-javascript">// Loop an array
each(['one','two','three'], (index, value) => console.log(index, value));

// Loop an object
each({foo: 'one', bar: 'two'}, (key, value) => console.log(key, value));

// Stop loop
each(['one','two','three'], (index, value) => index >= 1 ? false : console.log(index));
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>map</code></td>
			<td>Returns a new object or array by through and running a callback to accept or reject each iteration. Returning <code>false</code> rejects item. Returning <code>undefined</code> stops the loop. Any other return value will be set on the object or array under the current key/index.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">each(Array|Object: array, Function: callback, ?Mixed: this, ...args): Void</code></pre>
				<pre><code class="javascript language-javascript">// Loop an array
// [0,1,2]
let arr = map(['one','two','three'], (index, value) => index);

// {foo: 'foo', bar: 'bar'}
each({foo: 'one', bar: 'two'}, (key, value) => key);

// ['two']
let arr = map(['one','two'], (index, value) => value !== 'one' ? value : undefined);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>array_unique</code></td>
			<td>Filters out non-unique values from an array.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">array_unique(Array|Object: array): Array</code></pre>
				<pre><code class="javascript language-javascript">// [0,1,2,3]
let arr = array_unique([0,1,2,3,3]);</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>array_filter</code></td>
			<td>Filters out empty items from an array or object and returns a new Array or Object.<br>Does not modify the original Array or Object, rather it will filter out empty items and return a new Object or Array.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">array_filter(Object|Array: array): Object|Array</code></pre>
				<pre><code class="javascript language-javascript">// [0, 1, 2, 3, 4, 5]
let array = [0, 1, 2, null, undefined, 3, 4, '', 5];
array = array_filter(array);

// [0, 1, 2, 3, 4, 5, 6]
let array = [0, 1, 2, null, undefined, 3, 4, '', [], 5, {}, 6];
array = array_filter(array);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>array_set</code></td>
			<td>Sets a value to array or object using <code>dot.notation</code>.<br>Sets key/value an pair to any nested array or object via <code>dot.notation</code>. If parent items do not exist in the path, they are created.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">array_set(String: path, Mixed: value, Object|Array: array): Void</code></pre>
				To set an array key, use the array index with brackets `[num]`. For Objects simply use the Object key and a dot <code>.key</code>:
				<pre><code class="javascript language-javascript">let array = [
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
				</code></pre>
				<pre><code class="javascript language-javascript">let obj = {
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
</code></pre>

On nested nested Arrays/Objects if the path does not exist it will be created automatically.

<pre><code class="javascript language-javascript">// [0, 1, 2, 3, 4, 5]
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
</code></pre></td></tr></tbody></table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>array_get</code></td>
			<td>Returns an item from an array or object using <code>dot.notation</code>.<br>Returns the item indexed by the path or <code>undefined</code> if it does not exist.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">array_get(String: path, Object|Array: array): Mixed</code></pre>
				<pre><code class="javascript language-javascript">let array = [ {foo: 'foo'} ];

let foo = array_get('[0].foo', array);
</code></pre>
				To access an array key, use the array index with brackets <code>[num]</code>. For Objects simply use the Object key and a dot <code>.key</code>:


<pre><code class="javascript language-javascript">
let array = [
    {foo: 'foo'},
    {bar: 'bar'}
];

// foo
let foo = array_get('[0].foo', array);
</code></pre>

<pre><code class="javascript language-javascript">
let obj = {
    foo: [1,2,3],
    bar: [4,5,6]
};

// 1
let one = array_get('foo[0]', obj);
</code></pre>

<code>array_get</code> will work on deeply nested Arrays/Objects without having to run validation that the item exists first.

<pre><code class="javascript language-javascript">
let obj = {
    foo: [
        { bar: { baz: [1, 2, 3] } }
    ]
};

// Returns 2
let two = array_get('foo[0].bar.baz[1]', obj);

// Returns undefined
let undef = array_get('foo[0].bar.baz[15]', obj);
</code></pre>

			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>array_has</code></td>
			<td>Checks if an item from an array or object exists using <code>dot.notation</code> and returns a boolean.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">array_has(String: path, Object|Array: array): Boolean</code></pre>
				<pre><code class="javascript language-javascript">let array = [ {foo: 'foo'} ];

// true
array_has('[0].foo', array);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>array_delete</code></td>
			<td>Deletes an item from an array or object exists using <code>dot.notation</code>.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">array_has(String: path, Object|Array: array): Void</code></pre>
				<pre><code class="javascript language-javascript">let array = [ {foo: 'foo'} ];

// No need re-assign here as the original array is now modified.
array_delete('[0].foo', array);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>in_array</code></td>
			<td>Checks if an item exists in array or object.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">in_array(Mixed: needle, Object|Array: array, ?Boolean: strict = false): Void</code></pre>
				<pre><code class="javascript language-javascript">let array = [ 1, 2, 3 ];

// true
in_array(2, array);

// false
in_array(5, array);
</code></pre>
				When passing <code>strict</code> as <code>true</code>, values must be the same 
<pre><code class="javascript language-javascript">let obj = { foo: 'bar' };
let array = [obj];

// true
in_array(obj, array);

// true
in_array({ foo: 'bar' }, array);

// false
in_array({ foo: 'bar' }, array, true);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>


---

### Object

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>extend</code></td>
			<td>Extends two objects, object functions.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">extend(Object|Function: base, Object|Function: extension): Object|Function</code></pre>
				<pre><code class="javascript language-javascript">const Base = function(one, two)
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
</code></pre>

<pre><code class="javascript language-javascript">const Base = function(one, two)
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
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>clone_deep</code></td>
			<td>Deep clones any variable.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">clone_deep(Mixed: original): Mixed</code></pre>
				<pre><code class="javascript language-javascript">let clone = clone_deep([ {foo: 'foo'} ]);

let clone = clone_deep({foo : () => console.log('hello world')});</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>bind</code></td>
			<td>Binds a function to a context so it can be identified later if needed.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">bind(Function: function, Mixed: context): Function</code></pre>
				<pre><code class="javascript language-javascript">function foo() { console.log(this); }

let bound = bind(foo, 'bar');

// bar
bound();
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>flatten_obj</code></td>
			<td>Returns a new flattened version of an object and it's <code>prototype</code>(s) with its properties.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">flatten_obj(Object: object, ?deep: deep = false): Object</code></pre>
				<pre><code class="javascript language-javascript">const WithProto = function(one, two) { }
WithProto.prototype.doSomething = function() { }

// { doSomething: function()... }
let flat = flatten_obj(new WithProto);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>object_props</code></td>
			<td>Returns an array of keys of all properties of an object and its <code>prototype</code>(s).</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">object_props(Object: object, ?deep: deep = false): Array</code></pre>
				<pre><code class="javascript language-javascript">const WithProto = function(one, two) { this.foo = 'bar' }
WithProto.prototype.doSomething = function() { }

// [ 'foo', 'doSomething' ]
let props = object_props(new WithProto);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<thead>
		<tr>
			<th>Function</th>
			<th>Reference</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>prototypes</code></td>
			<td>Returns a flat array of of all nested prototypes of an object.</td>
		</tr>
		<tr>
			<td colspan="2">
				<pre><code class="javascript language-javascript">prototypes(Object: object): Array</code></pre>
				<pre><code class="javascript language-javascript">const WithProto = function(one, two) { this.foo = 'bar' }
WithProto.prototype.doSomething = function() { }

// { foo: 'bar', doSomething: function()... }
let protos = prototypes(new WithProto);
</code></pre>
			</td>
		</tr>
	</tbody>
</table>

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