# Notification

Notifications are a handy `JavaScript` component for displaying messages to the. Notifications are highly customizable from both a `CSS` and `JavaScript` perspective.

---

*   [Example](#example)
*   [Position](#position)
*   [Content](#content)
*   [Timeout](#timeout)
*   [Methods](#methods)
*	[Options](#options)
*   [HTML Initialization](#html-initialization)
*   [CSS Customization](#css-customization)

---

### Example

To display a notification, call the `Notifications` module with your options via the `Container`.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center ">
        <button class="js-notif-trigger-1 btn">Show Notification</button>
    </div>
</div>

```JavaScript
let notif = frontbx.Notification(
{
	text  : 'Hello! I\'m a notification.',
});
```

---

### Position

Use the `position` option to set a notification in a desired position on the screen:

Available positions are:  `top-left` `top` `top-right` `left` `right` `bottom-left` `bottom` `top-right`

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs row-gaps-xs">
        <button class="js-notif-triggers-pos btn">top-left</button>
        <button class="js-notif-triggers-pos btn">top</button>
        <button class="js-notif-triggers-pos btn">top-right</button>
        <div class="col-12"></div>
        <button class="js-notif-triggers-pos btn">left</button>
        <button class="js-notif-triggers-pos btn">right</button>
        <div class="col-12"></div>
        <button class="js-notif-triggers-pos btn">bottom-left</button>
        <button class="js-notif-triggers-pos btn">bottom</button>
        <button class="js-notif-triggers-pos btn">bottom-right</button>
    </div>
</div>

```JavaScript
let notif = frontbx.Notification(
{
    text  : 'Hello! I\'m a notification.',
});
```

---

### Content

Notifications have a lot of versatility and provides a number of options for different use-cases. Use the provided options to add text and actions to a notification:

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center">
        <div class="notification-wrap js-nofification-wrap active" style="position: relative;">
            <div class="msg msg-dense animate-in-up">
                <div class="msg-body">
                    <p>
                        Hello! I'm a notification.
                    </p>
                </div>
                <div class="msg-btn">
                    <button class="btn btn-pure btn-primary btn-sm js-notif-btn">Dismiss</button>
                </div>
            </div>
            <div class="msg msg-dense animate-in-up">
                <div class="msg-icon">
                    <span class="fa fa-bell"></span>
                </div>
                <div class="msg-body">
                    <p>
                        Hello! I'm a notification.
                    </p>
                </div>
            </div>
            <div class="msg msg-dense animate-in-up">
                <div class="msg-body">
                    <p>
                        Hello! I'm a notification.
                    </p>
                </div>
                <div class="msg-btn">
                    <button class="btn btn-pure btn-danger btn-sm js-notif-btn">Danger</button>
                </div>
            </div>
            <div class="msg msg-dense animate-in-up">
                <button type="button" role="button" aria-label="close" class="btn btn-pure btn-xs btn-circle btn-msg-close"><span class="fa fa-xmark"></span></button>
                <div class="msg-icon">
                    <span class="fa fa-bell"></span>
                </div>
                <div class="msg-body">
                    <p>
                        Hello! I'm a notification.
                    </p>
                </div>
            </div>
            <div class="msg msg-primary msg-dense animate-in-up">
                <div class="msg-icon">
                    <span class="fa fa-check"></span>
                </div>
                <div class="msg-body">
                    <p>
                        Hello! I'm a notification.
                    </p>
                </div>
            </div>
            <div class="msg msg-stacked msg-dense animate-in-up">
                <div class="msg-icon">
                    <span class="fa fa-bell"></span>
                </div>
                <div class="msg-body">
                    <p class="text-bold">
                        Lorem ipsum laboris cupidatat in enim sunt?
                    </p>
                    <p style="opacity: 0.9;">
                        In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.
                    </p>
                </div>
                <div class="msg-btn">
                    <button type="button" class="btn btn-pure btn-sm" aria-label="cancel">Cancel</button><button type="button" class="btn btn-primary btn-sm" aria-label="Confirm">Confirm</button>
                </div>
            </div>
            <div class="msg msg-responsive msg-dense animate-in-up">
                <div class="msg-body">
                    <p class="text-bold">
                        Lorem ipsum laboris cupidatat in enim sunt?
                    </p>
                    <p style="opacity: 0.9;">
                        In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.
                    </p>
                </div>
                <div class="msg-btn">
                    <button class="btn btn-pure btn-primary btn-sm js-notif-btn">Confirm</button>
                </div>
            </div>
            <div class="msg animate-in-up">
                <div class="msg-icon">
                    <span class="fa fa-bell"></span>
                </div>
                <div class="msg-body">
                    <p>
                        Eiusmod ullamco cupidatat culpa amet sit nostrud veniam consectetur quis labore duis duis ut occaecat sint.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs row-gaps-xs">
        <button class="js-notif-trigger-2 btn">With button</button>
        <button class="js-notif-trigger-3 btn">With icon</button>
        <button class="js-notif-trigger-4 btn">Button variant</button>
        <div class="col-12"></div>
        <button class="js-notif-trigger-5 btn">Close button</button>
        <button class="js-notif-trigger-6 btn">Message variant</button>
        <div class="col-12"></div>
        <button class="js-notif-trigger-7 btn">Message stacked</button>
        <button class="js-notif-trigger-8 btn">Message responsive</button>
        <button class="js-notif-trigger-9 btn">Message large</button>
    </div>
</div>

```JavaScript
/* Standard */
frontbx.Notification({
    text  : 'Hello! I\'m a notification.',
});

/* Button */
frontbx.Notification(
{
    btn  : 'Dismiss',
    text : 'Hello! I\'m a notification.',
});

/* Icon */
frontbx.Notification(
{
    icon : 'bell',
    text : 'Hello! I\'m a notification.',
});

/* Button variant */
frontbx.Notification(
{
    btn        : 'Danger',
    btnVariant : 'danger',
    text       : 'Hello! I\'m a notification.',
});

/* Close button */
frontbx.Notification(
{
    icon : 'bell',
    text : 'Hello! I\'m a notification.',
    closebtn: true
});

/* Message variant */
frontbx.Notification(
{
    icon    : 'check',
    variant : 'primary',
    text    : 'Hello! I\'m a notification.',
});

/* Stacked message */
frontbx.Notification(
{
    icon       : 'bell',
    stacked    : true,
    btn        : '<button class="btn"></button>...',
    text       : '<p class="text-bold">...</p><p>...</p>',
});

/* Responsive message */
frontbx.Notification(
{
    responsive : true,
    btn        : 'Confirm',
    text       : '<p class="text-bold">Lorem ipsum laboris cupidatat in enim sunt?</p><p style="opacity: 0.9;">In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.</p>',
});

/* Non-dense message */
frontbx.Notification(
{
    icon       : 'bell',
    dense      : false,
    text       : 'Eiusmod ullamco cupidatat culpa amet sit nostrud veniam consectetur quis labore duis duis ut occaecat sint.',
});
```

---

### Timeout

Notifications auto-dismiss after 6 seconds by default. You can set a different timeout in milliseconds on the `timeout` option, or set it to `false` if you don't want it to auto-dismiss.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs">
        <button class="js-notif-trigger-10 btn">Persistent</button>
        <button class="js-notif-trigger-11 btn">Timeout</button>
    </div>
</div>

```JavaScript
let notif1 = frontbx.Notification(
{
    text  : 'Hello! I\'m a notification.',
    timeout: false,
});

let notif2 =frontbx.Notification(
{
    text  : 'Hello! I\'m a notification.',
    timeout: 10000,
});
```

---

### Methods

Once a Notification instance is created, there are a few methods to interact with it:

The `remove` method will animate and remove the notification:

```javascript
notification.remove();
```

The `domElement` method returns the notification HTMLElement, which is wrapped in a positioning element:

```javascript
notification.domElement();
```

The `callbackValidate` option when creating the notification allows you to run your own validation on whether the notification can be dismissed. Return `true` from this function to allow it or `false` if the user needs to take some sort of action:

```javascript
let notif = frontbx.Notification(
{
    text  : 'Hello! I\'m a notification.',

    callbackValidate: (element) =>
    {
        if (someCondition) return true;

        return false;
    }
});
```

---

### Options

The table below outlines the available options:

| Option key         | Var Type          | Behavior                                                                                                                               | Default   |
|--------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------|
| `position`         | `boolean`         | Position of notification. Can be one of `top-left` `top` `top-right` `left` `right` `bottom-left` `bottom` `top-right`                 | `bottom`  |
| `timeout`          | `integer` `false` | Time in milliseconds when notification will be auto-dismissed. Provide `false` for no timeout.                                         | `6000`    |
| `text`             | `string`          | Text to be displayed inside the notification.<br>Will be wrapped inside a `<p>` tag unless provided string contains HTML.              | `null`    |
| `btn`              | `string`          | Text to be displayed in a confirmation button.<br>Will be wrapped inside a styled `<button>` tag unless provided string contains HTML. | `null`    |
| `icon`             | `string`          | Optional icon name. Gets set as `fa-[name]` if provided.                                                                               | `null`    |
| `stacked`          | `boolean`         | Makes message stackable.                                                                                                               | `false`   |
| `dense`            | `boolean`         | Makes message dense.                                                                                                                   | `true`    |
| `responsive`       | `boolean`         | Makes message stack on small screen sizes.                                                                                             | `false`   |
| `closebtn`         | `boolean`         | Adds xmark close button.                                                                                                               | `false`   |
| `variant`          | `string`          | Optional message variant, gets set as `msg-[name]` if provided                                                                         | `null`    |
| `btnVariant`       | `string`          | Btn variant/context class. Gets set as `btn-[name]` if provided.                                                                       | `primary` |
| `callbackBuilt`    | `function`        | Callback function to be called notification element is built but not rendered.                                                         | `null`    |
| `callbackRender`   | `function`        | Callback function to be called notification is ready and displayed.                                                                    | `null`    |
| `callbackDismiss`  | `function`        | Callback function to be called when notification is removed.                                                                           | `null`    |
| `callbackValidate` | `function`        | Callback function to validate if notification can be closed. Must return `boolean`                                                     | `true`    |


All callback functions receive the notification `HTMLElement` as their parameter.

---

### HTML Initialization

For basic use-cases where access to the underlying JavaScript is not required, Notifications can be enabled through HTML markup via an anchor element with the `.js-notification-trigger` class.

All options can be set through `data-attributes` on the anchor element in `hyphen-case`. For example to set the `btnVariant` option, you would set the `data-btn-variant="btn-primary"` attribute.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center pole-sm">
        <button type="button" class="btn js-notification-trigger" data-text="Hello, I'm a notification!">Trigger notification</button>
    </div>
</div>

```html
<button type="button" class="btn js-notification-trigger" data-text="Hello, I'm a notification!">Trigger notification</button>
```

---

### CSS Customization

Notifications use a combination of both local CSS and Sass variable on `.notification-wrap` with nested variables on `.msg` for enhanced component customization and styling.

For details on customizing message components, see the [Message Documentation](../message/index.html#css-customization)

Default values are set in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$notification-max-width: 450px !default;
$notification-shadow:    3 !default; // 1, 2, 3
```

```css
.notification-wrap
{
    --fbx-notification-max-width: 450px;
}
.notification-wrap .msg
{
    box-shadow: ...;
}

```
