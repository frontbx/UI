# Message

Frontbx message provide contextual feedback messages for typical user actions user actions on page. They are also use as part of the built in JS Form Validation component.

---

*   [Basic example](#basic-example)
*   [Icons](#icons)
*   [Buttons](#buttons)
*   [Dense](#dense)
*   [Stacked](#stacked)
*   [Responsive](#responsive)
*   [Context](#context)
*   [Dismissible](#dismissible)
*   [JavaScript Behavior](#javaScript-behavior)
*   [CSS Customization](#css-customization)

---

### Basic example

A Frontbx message has specific markup that you must follow for it to be displayed correctly. Below is the most simple example:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8">
        <div class="msg">
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
</div>
```

---

### Icons

Frontbx messages have built in styles for icons to help display a message's context to the user quickly:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8">
        <div class="msg">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
</div>
```

---

### Buttons

Adding a button to a message is easy, simply wrap it in a `.msg-btn` element after the `.msg-body`:

<div class="fbx-snippet-demo">    
    <div class="flex-row row-gaps-xs">
        <div class="msg">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-primary btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
    <div class="msg-btn">
        <button type="button" class="btn btn-primary btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
    </div>
</div>
```

---

### Dense

Add the modifier `.msg-dense` to display a more compact message:
<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8 row-gaps-xs">
        <div class="msg msg-dense">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
        </div>
        <div class="msg msg-dense">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-primary btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
</div>
```

---

### Stacked

Add the modifier `.msg-stacked` to for larger messages:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8">
        <div class="msg msg-stacked">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p class="text-bold">Lorem ipsum laboris cupidatat in enim sunt?</p>
                <p style="opacity: 0.9;">In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-pure btn-sm" aria-label="cancel">Cancel</button>
                <button type="button" class="btn btn-primary btn-sm" aria-label="Confirm">Confirm</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
</div>
```

---

### Responsive

Add the modifier `.msg-responsive` to have message stack on smaller viewports:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8">
        <div class="msg msg-responsive">
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
                <p>Ea ea quis fugiat est elit duis ut aliqua adipisicing quis eiusmod in aliquip veniam duis id reprehenderit.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-primary btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
</div>
```

---

### Close buttons

Add the modifier `.btn-msg-close` to a button to position a close button:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8 row-gaps-xs">
        <div class="msg msg-dense">
            <button class="btn btn-pure btn-xs btn-circle btn-msg-close">
                <span class="fa fa-xmark"></span>
            </button>
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
        </div>
        <div class="msg msg-stacked">
            <button class="btn btn-pure btn-xs btn-circle btn-msg-close">
                <span class="fa fa-xmark"></span>
            </button>
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p class="text-bold">Lorem ipsum laboris cupidatat in enim sunt?</p>
                <p style="opacity: 0.9;">In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <button class="btn btn-pure btn-xs btn-circle btn-msg-close">
        <span class="fa fa-xmark"></span>
    </button>
    ...
</div>
```

---

### Context

Add a class of `.msg-primary`, `.msg-info`, `.msg-success`, `.msg-warning` or `.msg-danger` to contextualize messages:

<div class="fbx-snippet-demo">    
    <div class="flex-row row-gaps-xs">
        <div class="msg msg-primary">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-primary btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
        <div class="msg msg-info">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-info btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
        <div class="msg msg-success">
            <div class="msg-icon">
                <span class="fa fa-check"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-success btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
        <div class="msg msg-warning">
            <div class="msg-icon">
                <span class="fa fa-triangle-exclamation"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-warning btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
        <div class="msg msg-danger">
            <div class="msg-icon">
                <span class="fa fa-xmark"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-danger btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg msg-success">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
    <div class="msg-btn">
        <button type="button" class="btn btn-success btn-pure btn-sm" aria-label="Click me">WITH BUTTON</button>
    </div>
</div>
```

---

### Dismissible

Add a class of `.js-close-msg` to the button (or any element inside a message) to make the message removable by the user. The message will be removed from the DOM after it is clicked.

> Add a class of `.js-rmv-parent` to the trigger element to remove the message and its containing wrapper element. This is usufell when your message is wrapped in a spacing element that you want to remove at the same time.

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-8 flex-cols-lg-8 row-gaps-xs">
        <div class="msg">
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
            <div class="msg-btn">
                <button type="button" class="btn btn-primary btn-pure btn-sm js-close-msg" aria-label="Close">Dismiss</button>
            </div>
        </div>
        <div class="msg msg-dense">
            <button class="btn btn-pure btn-xs btn-circle btn-msg-close js-close-msg">
                <span class="fa fa-xmark"></span>
            </button>
            <div class="msg-icon">
                <span class="fa fa-bell"></span>
            </div>
            <div class="msg-body">
                <p>This is an alert! Please read this carefully.</p>
            </div>
        </div>
    </div>
</div>

```html
<div class="msg">
    <div class="msg-icon">
        <span class="fa fa-bell"></span>
    </div>
    <div class="msg-body">
        <p>This is an alert! Please read this carefully.</p>
    </div>
    <div class="msg-btn">
        <button type="button" class="btn btn-primary btn-pure btn-sm js-close-msg js-rmv-parent" aria-label="Close">Dismiss</button>
    </div>
</div>
```

---

### JavaScript Behavior

Frontbx fires two custom events to attach onto when a message is removed via a `.js-close-msg` click.

| Event            | Description                                                                      | 
|------------------|----------------------------------------------------------------------------------|
| `message:close`  | Fired immediately when close button is clicked                                   |
| `message:closed` | Fired when the message has been closed and the remove transitions have completed.|


```javascript

const myMsg = document.getElementById('myMsg')

myMsg.addEventListener('message:close', event => 
{
    // Do something here  
})
```

---

### CSS Customization

Messages use local CSS variables on `.msg` for enhanced component customization and styling. Values for the CSS variables are set via Sass, so pre-compilation customization is still supported too.

Default values are set in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$msg-bg:             var(--fbx-black) !default;
$msg-color:          var(--fbx-white) !default;
$msg-icon-color:     var(--fbx-theme-primary) !default;
$msg-spacer-y:       3rem !default;
$msg-spacer-x:       2rem !default;
$msg-font-size:      1.4rem !default;
$msg-icon-font-size: 1.6rem !default;
$msg-border-radius:  var(--fbx-border-radius) !default;
```

```css
.msg
{
    --fbx-msg-bg: var(--fbx-black);
    --fbx-msg-color: var(--fbx-white);
    --fbx-msg-icon-color: var(--fbx-theme-primary);
    --fbx-msg-spacer-y: 3rem;
    --fbx-msg-spacer-x: 2rem;
    --fbx-msg-border-radius: var(--fbx-border-radius);
    --fbx-msg-font-size: 1.4rem;
    --fbx-msg-icon-font-size: 1.6rem;
}
```