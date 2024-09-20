### Events

| link                                                               | Function                | Reference                                                            |
|:------------------------------------------------------------------:|-------------------------|----------------------------------------------------------------------|
| <a href="#on" class="js-waypoint-trigger">#</a>                    | `on`                    | Adds a removable event listener to any HTMLElement.                  |
| <a href="#off" class="js-waypoint-trigger">#</a>                   | `off`                   | Removes an event listener from any HTMLElement.                      |
| <a href="#clear_event_listeners" class="js-waypoint-trigger">#</a> | `clear_event_listeners` | Removes all event listeners from an element and all it's children.   |
| <a href="#collect_garbage" class="js-waypoint-trigger">#</a>       | `collect_garbage`       | Removes all event listeners from elements no longer in the live DOM. |
| <a href="#event_listeners" class="js-waypoint-trigger">#</a>       | `event_listeners`       | Returns an array of all attached event listeners on element.         |

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