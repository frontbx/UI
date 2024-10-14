# Popover

Similar to tooltip, popover allows you to display helper content and information to the user without taking up space in layouts. Popover are like tooltips but allow more customization and are typically used to larger blocks of information. 

---

*   [Markup](#markup)
*   [Direction](#direction)
*   [Animation](#animation)
*   [Variants](#variants)
*   [Contents](#contents)
*   [Options](#markup)
*   [CSS Customization](#css-customization)

---

### Markup

Popovers can be instantiated automatically via HTML through a combination of classes and data-attributes. Below is an example of a basic hover popover.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs">
        <button class="btn js-popover"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Toggle popover</button>
    </div>
</div>

```html
<button
    class="btn js-popover"
    data-popover-title="Popover Title"
    data-popover-content="Aliqua commodo..."
    data-popover-direction="top"
    data-popover-event="click">Toggle popover</button>
```

---

### Direction

Use the `data-popover-direction` option to set a popover in the desired position on the screen: Available directions are:  `top-left` `top` `top-right` `left` `right` `bottom-left` `bottom` `top-right`

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-sm row-gaps-xs">
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top-left">top-left</button>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top">top</button>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top-right">top-right</button>
        <div class="col-12"></div>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="left">left</button>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="right">right</button>
        <div class="col-12"></div>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="bottom-left">bottom-left</button>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="bottom">bottom</button>
        <button class="btn js-popover"
            data-popover-event="click" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="bottom-right">bottom-right</button>
    </div>
</div>

```html
<button class="btn js-popover" data-popover-direction="top-right"...>Toggle popover</button>
```

---

### Animation

Popover comes with two pre-built animations `pop` or `fade` which can be set via the `data-popover-animation` attribute on the anchor element.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs">
        <button class="btn js-popover" 
            data-popover-animation="fade" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-event="click">Fade</button>
        <button class="btn js-popover" 
            data-popover-animation="pop" 
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-event="click">Pop</button>
    </div>
</div>

```html
<button class="btn js-popover" data-popover-animation="fade">Toggle popover</button>

<button class="btn js-popover" data-popover-animation="pop">Toggle popover</button>
```

---

### Variants

Popover comes pre-styled with Frontbx's default contextual values set through the `data-popover-variant` attribute on the anchor element. Available variants are `primary` `secondary` `info` `success` `warning` & `danger`.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs">
        <button class="btn btn-primary js-popover"
            data-popover-variant="primary"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Primary</button>
        <button class="btn btn-secondary js-popover"
            data-popover-variant="secondary"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Secondary</button>
        <button class="btn btn-info js-popover"
            data-popover-variant="info"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Info</button>
        <button class="btn btn-success js-popover"
            data-popover-variant="success"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Success</button>
        <button class="btn btn-warning js-popover"
            data-popover-variant="warning"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Warning</button>
        <button class="btn btn-danger js-popover"
            data-popover-variant="danger"
            data-popover-title="Popover Title"
            data-popover-content="Aliqua commodo fugiat pariatur fugiat est dolor ut cillum dolore esse aliquip voluptate dolore labore."
            data-popover-direction="top"
            data-popover-event="click">Danger</button>
    </div>
</div>

```html
<button class="btn js-popover" data-popover-variant="primary"...>Toggle popover</button>
```

### Contents

For basic HTML string content, simply use the `data-popover-content` and `data-popover-title` attributes with any required string content to populate the popover.

For more complex requirements point to the id of a hidden target element element in the DOM with the `data-popover-content` attribute. Remember to always include the `#` character before the ID as this differentiates it from it being interpenetrated as a string.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs">
        <button class="btn js-popover"
            data-popover-content="#target-node"
            data-popover-event="click">Toggle popover</button>
        <div id="target-node" class="hidden bg-primary pad-20 color-white raised-4 border-radius text-bold">
            <p>Hello, I'm a custom node node!</p>
        </div>
    </div>
</div>

```html
<button class="btn js-popover"
    data-popover-content="#target-node"
    data-popover-event="click">Toggle popover</button>
<div id="target-node" class="hidden bg-primary pad-20 color-white raised-4 border-radius text-bold">
    <p>Hello, I'm a custom node node!</p>
</div>
```

---

### Options

Data attributes placed on the anchor element define various behavior of the popover. The table below outlines the available options

| Attribute                | Values                                                                               | Behavior                                                                                               |
|--------------------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `data-popover-variant`   | `primary` `secondary` `info`<br>`success` `warning` `danger`                         | Sets the contextual of the popover.                                                                    |
| `data-popover-direction` | `top-left` `top` `top-right`<br>`left` `right`<br>`bottom-left` `bottom` `top-right` | Sets the direction of the popover.                                                                     |
| `data-popover-animation` | `pop` `fade`                                                                         | Sets the popover animation effect when it is displayed.                                                |
| `data-popover-title`     | `string`                                                                             | The string to placed as the popover title.                                                             |
| `data-popover-content`   | `string` or node id `#id`                                                            | The string to placed as the popover text content.<br>When a node `id` is provided, `title` is ignored. |
| `data-popover-event`     | `click` `hover`                                                                      | Defines whether the popover is displayed on `:hover`, or toggled with a click.                         |
| `data-popover-classes`   | `String`                                                                             | Any additional class-names to pass over the popover element.                                           |

---

### CSS Customization

Popovers use local CSS variables on `.popover` for enhanced component customization and styling. The base values are used by the UI to create all the variants. Values for the CSS variables are set via Sass, so pre-compilation customization is still supported too.

Default values are set in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$popover-max-width:    270px !default;
$popover-shadow:       4 !default; // 0,1,2,3,4
$popover-font-size:    1.2rem !default;
$popover-title-size:   1.2rem !default;
$popover-radius:       var(--fbx-border-radius) !default;
$popover-pad-y:        1rem !default;
$popover-pad-x:        1.5rem !default;
$popover-bg:           var(--fbx-white) !default;     
$popover-color:        var(--fbx-gray-600) !default;
$popover-title-color:  var(--fbx-gray-700) !default;
$popover-title-border: 1px solid var(--fbx-gray-200) !default;
```

```css
.popover
{
    --fbx-popover-max-width: 270px;
    --fbx-popover-shadow: 4;
    --fbx-popover-font-size: 1.2rem;
    --fbx-popover-title-size: 1.2rem;
    --fbx-popover-radius: var(--fbx-border-radius);
    --fbx-popover-pad-y: 1rem;
    --fbx-popover-pad-x: 1.5rem;
    --fbx-popover-bg: var(--fbx-white);
    --fbx-popover-color: var(--fbx-gray-600);
    --fbx-popover-title-color: var(--fbx-gray-700);
    --fbx-popover-title-border: 1px solid var(--fbx-gray-200);
}
```

