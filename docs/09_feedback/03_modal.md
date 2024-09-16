# Modal

Modals are a handy `JavaScript` component for displaying an action the user must take. Modals are highly customizable from both a `CSS` and `JavaScript` perspective.

---

*   [Example](#example)
*   [Content](#content)
*   [Scrollable](#scrollable)
*   [Customization](#customization)
*   [Callbacks](#callbacks)
*   [Methods](#methods)
*	[Options](#options)
*   [HTML Initialization](#html-initialization)
*   [CSS Customization](#css-customization)

---

### Example

To display a Modal, call the `Modal` Component via FrontBx's Container:

<div class="code-content-example">
    <div class="flex-row-fluid align-cols-center col-gaps-sm">
        <button class="js-modal-trigger-1 btn">Basic Modal</button>
    </div>
</div>

```javascript
let modal = frontbx.Modal({
    title            : 'Use X\'s location service?',
    content          : 'Let X help apps determine location. This means sending anonymous location data to X, even when no apps are running.',
    cancelBtn        : 'Disagree',
    confirmBtn       : 'Agree',
});
```

> The `content` option can be either a `String`, `HTMLElement`, `NodeList` or `Array`

---

### Content

By default the Modal will structure provided `content` and `title` into a card element. In cases where more customized content is needed, set `custom:true` in the options to create your own markup.

<div class="code-content-example">
    <div class="flex-row-fluid align-cols-center col-gaps-sm">
        <button class="js-modal-trigger-2 btn">Custom Modal</button>
    </div>
</div>

```javascript
let modal = frontbx.Modal({
    content: '...',
    custom: true,
    closeAnywhere: true
});
```

---

### Scrollable

When a Modal becomes too long for the user's viewport or device the content will scroll. By default the entire modal itself will scroll. You can customize this by setting the `scroll` option to either `modal` (default) or `content`.

The example below shows the difference:

<div class="code-content-example">
    <div class="flex-row-fluid align-cols-center col-gaps-sm">
        <button class="js-modal-trigger-3 btn">Scroll "modal"</button>
        <button class="js-modal-trigger-4 btn">Scroll "content"</button>
    </div>
</div>

```javascript
let modal = frontbx.Modal({
    title   : '...',
    content : '...',
    scrollable: 'modal',
});
```

---

### Customization

Modal positioning, sizing and animations are set via local CSS Variables on `.modal-wrap`. You can create a custom modal by either overriding the variables, or passing a custom modifier class to the `classes` option and then modifying the variables from there.

The example below shows a simple example of a modal that slides in from the bottom of the page without an overlay element:

<div class="code-content-example">
    <div class="flex-row-fluid align-cols-center col-gaps-sm">
        <button class="js-modal-trigger-5 btn">Custom modal</button>
    </div>
</div>

```css
.modal-wrap.custom-modal
{
    --fbx-modal-transform-off: translate3d(0, 100%, 0);
    --fbx-modal-transition: opacity .125s ease, transform .225s ease;
    align-items: flex-end;
    padding-bottom: 50px;
}
```

```javascript
let modal = frontbx.Modal({
    title : 'Subscribe for $1?',
    content : 'Subscribe for $1 and get all my posts for free!',
    cancelBtn : 'Nah',
    confirmBtn : 'YES!',
    classes: 'custom-modal',
    overlay: false,
    closeAnywhere: false,
});
```

<style>
    .modal-wrap.custom-modal
    {
        --fbx-modal-transform-off: translate3d(0, 100%, 0);
        --fbx-modal-transition: opacity .125s ease, transform .225s ease;
        --fbx-modal-max-width: 450px;
        align-items: flex-end;
        padding-bottom: 30px;
    }
</style>

---

### Callbacks

There are a number of callbacks available depending on what access you require. In the example below, the `callbackOpen` option is used to focus an input within the modal when it pops up:

See the [Options Section](#options) for a full list of callbacks.

<div class="code-content-example">
    <div class="flex-row-fluid align-cols-center col-gaps-sm">
        <button class="js-modal-trigger-6 btn">Show form</button>
    </div>
</div>

```javascript
frontbx.Modal( {
    title: 'Subscribe',
    content: '....',
    callbackOpen: (modal) => find('.js-modal-input', modal).focus(),
});
```

---

### Methods

Once a Modal instance is created, there are a few methods to interact with the modal:

The `open` method will animate and open the modal:

```javascript
modal.open();
```

The `close` method will animate and close the modal:

```javascript
modal.close();
```

The `direction` method returns the modal state which will be either `closed` or `open`:

```javascript
if (modal.state() === 'closed')
{

}
```

The `state` method returns the modal state which will be either `closed` or `open`:

```javascript
if (modal.state() === 'closed')
{

}
```

The `opened` method returns `true` if the modal is open or `false` if not

```javascript
if (modal.opened())
{

}
```

The `closed` method returns `true` if the modal is closed or `false` if not

```javascript
if (modal.closed())
{

}
```

Finally the `destroy` method completely removes the modal from the DOM and all related event listeners:

```javascript
modal.destroy()
```

---

### Options

There are a number of options for a modal depending on a given purpose. The table below outlines the available options:

| Option key         | Var Type                                     | Behavior                                                                          | Required | Default       |
|--------------------|----------------------------------------------|-----------------------------------------------------------------------------------|----------|---------------|
| `title`            | `string`                                     | Text to be displayed inside `.card-title`.                                        | `no`     | `null`        |
| `message`          | `string`, `Array`, `Nodelist`, `HTMLElement` | Content to be displayed inside `.card-body >`.                                    | `no`     | `null`        |
| `classes`          | `string`                                     | Any additional classes to pass to the modal                                       | `no`     | `null`        |
| `custom`           | `Boolean`                                    | Creates an un-formatted modal based on `content`                                  | `no`     | `false`       |
| `state`            | `string`                                     | Initial state when first created - `open` or `closed`.                            | `no`     | `open`        |
| `overlay`          | `string` `Boolean`                           | Either `light` , `dark` or `false`  if no overlay is wanted                       | `no`     | `dark`        |
| `closeAnywhere`    | `boolean`                                    | Modal can be closed by clicking anywhere outside of it.                           | `no`     | `true`        |
| `cancelBtn`        | `string`                                     | Inner text on cancel button. No cancel button will be rendered if not provided.   | `no`     | `null`        |
| `cancelClass`      | `string`                                     | Btn variant/context class for cancel btn. e.g `.btn-danger`.                      | `no`     | `null`        |
| `confirmBtn`       | `string`                                     | Inner text on confirm button. No confirm button will be rendered if not provided. | `no`     | `null`        |
| `confirmClass`     | `string`                                     | Btn variant/context class for cancel btn. e.g `.btn-success`.                     | `no`     | `` |
| `callbackBuilt`    | `function`                                   | Callback function to be called when modal is built but not rendered.              | `no`     | `null`        |
| `callbackRender`   | `function`                                   | Callback function to be called when modal is rendered into DOM.                   | `no`     | `null`        |
| `callbackOpen`     | `function`                                   | Callback function to be called when modal is opened.                              | `no`     | `null`        |
| `callbackClose`    | `function`                                   | Callback function to be called when modal is closed.                              | `no`     | `null`        |
| `callbackValidate` | `function`                                   | Callback function to validate if modal can be closed. Must return boolean         | `no`     | `null`        |

---

### HTML Initialization

For basic use-cases where access to the underlying JavaScript is not required, Modals can be enabled through HTML markup via an anchor element with the `.js-modal-trigger` class.

For basic HTML string content, simply use the `data-content` attribute with any required string content to populate the modal.

For more complex requirements point to the id of a hidden target element element in the DOM with the `data-content` attribute. Remember to always include the `#` character before the ID as this differentiates it from it being interpenetrated as a string.

All other options can be set through `data-attributes` on the anchor element in `hyphen-case`. For example to set the `closeAnywhere` option, you would set the `data-close-anywhere="true"` attribute.

<div class="code-content-example">
    <div class="flex-row-fluid align-cols-center pole-sm">
        <button type="button" class="btn js-modal-trigger" data-confirm-btn="Confirm" data-content="#html-modal">Show Modal</button>
        <div id="html-modal" style="display: none;"> 
            <p>Let X help apps determine location. This means sending anonymous location data to X, even when no apps are running.</p>
        </div>
    </div>
</div>

```html
<button type="button" class="btn js-modal-trigger" data-content="#my-modal">Toggle</button>

<div id="my-modal">...</div>
```

---


### CSS Customization

Modals use a combination of both local CSS variables on `.modal-wrap`, `.modal-overlay` and Sass variables for enhanced component customization and styling.

Customization via Sass can be made in the `src/scss/_config.scss` file in FrontBx's source.

```file-path
`src/scss/_config.scss`
```
```scss
$modal-max-width:               680px !default;
$modal-max-height:              80vh !default;
$modal-shadow:                  3 !default; //0,1,2,3 
$modal-overlay-bg:              rgba(255, 255, 255, 0.8) !default;
$modal-overlay-bg-dark:         rgba(0, 0, 0, 0.5) !default;
$modal-title-size:              1.8rem !default;
$modal-transform-on:            translate3d(0px, 0px, 0px) !default;
$modal-transform-off:           translate3d(0px, -50px, 0px) !default;
$modal-transition:              opacity .225s ease-out .225s, transform .225s ease-out .225s !default;
$modal-overlay-transition:      opacity .225s ease-out !default;
```

```file-path
`src/scss/components/_modal.scss`
```
```scss
.modal-wrap
{
    --fbx-modal-title-size: #{$modal-title-size};
    --fbx-modal-transition: #{$modal-transition};
    --fbx-modal-max-width: #{$modal-max-width};
    --fbx-modal-max-height: #{$modal-max-height};
    --fbx-modal-transform-on: #{$modal-transform-on};
    --fbx-modal-transform-off: #{$modal-transform-off};
}
.modal-overlay
{
    --fbx-modal-overlay-bg: #{$modal-overlay-bg};
    --fbx-modal-overlay-bg-dark: #{$modal-overlay-bg-dark};
    --fbx-modal-overlay-transition: #{$modal-overlay-transition};
}
```