# Menu

Menus display a list of choices on a temporary or permanent surfaces.

---

*   [Markup](#markup)
*   [Menu contents](#menu-contents)
*   [Dense Menu](#dense-menu)
*   [Menu overflow](#menu-overflow)
*   [States](#states)
*   [CSS Customization](#css-customization)
*   [JavaScript Instantiation](#javascript-instantiation)

---

### Markup

Menu's are used throughout Frontbx and can be optionally integrating into many components such as [Cards](../../surfaces/cards/index.html), [Dropdowns](../../forms/dropdown/index.html), [Drawer](../../surfaces/drawer/index.html), [Backdrop](../../surfaces/backdrop/index.html) and more.

Creating a basic menu is as simple as creating a list under the `.menu` class:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4">
        <ul class="menu"> 
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
    </div>
</div>

```html
<ul class="menu"> 
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

---

### Menu contents

Menu items come with handy alignment content helpers `.item-left`, `.item-right` and `.item-body` helper to help delineate content:

Additionally, the `.menu-divider` and `.menu-header` can be used to layout content

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4">
        <ul class="menu">
            <li class="menu-header">Menu</li>
            <li>
                <span class="item-left"><span class="fa fa-inbox color-gray-500"></span></span>
                <span class="item-body">Inbox</span>
                <span class="item-right"><span class="label">4</span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-flag color-gray-500"></span></span>
                <span class="item-body">Flagged</span>
                <span class="item-right"><span class="label">23</span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-note-sticky color-gray-500"></span></span>
                <span class="item-body">Drafts</span>
                <span class="item-right"><span class="label">3</span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-paper-plane color-gray-500"></span></span>
                <span class="item-body">Sent</span>
                <span class="item-right"><span class="status status-xs"></span></span>
            </li>
            <li class="menu-divider"></li>
            <li>
                <span class="item-left"><span class="fa fa-circle-minus color-gray-500"></span></span>
                <span class="item-body">Junk</span>
                <span class="item-right"><span class="status status-xs status-warning"></span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-trash color-gray-500"></span></span>
                <span class="item-body">Trash</span>
                <span class="item-right"><span class="status status-xs status-danger"></span></span>
            </li>
        </ul>
    </div>
</div>


```html
<ul class="menu">
    <li class="menu-header">Menu</li>
    <li>
        <span class="item-left"><span class="fa fa-inbox color-gray-500"></span></span>
        <span class="item-body">Inbox</span>
        <span class="item-right"><span class="label">4</span></span>
    </li>
    ...
    <li class="menu-divider"></li>
</ul>
```

--- 

### Dense menu

For larger menus with multiple items, you can use the `.menu-dense` modifier on `.menu` to reduce the padding and text size:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4">
        <ul class="menu menu-dense">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
        </ul>
    </div>
</div>

```html
<ul class="menu menu-dense">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
</ul>
```

---

### Menu overflow

Adding the  `.menu-ellipsis` modifier on `.menu` enables text overflow ellipsis. Ensure your text is nested inside `.item-body` for this to work:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4">
        <ul class="menu menu-ellipsis">
            <li>
                <div class="item-body">
                    Officia cillum nisi ea velit
                </div>
            </li>
            <li>
                <div class="item-body">
                    Lorem ipsum dolor anim commodo elit in consectetur tempor amet dolor quis dolore laborum proident irure in.
                </div>
            </li>
            <li>
                <div class="item-body">
                    Minim velit laboris in aliquip.
                </div>
            </li>
        </ul>
    </div>
</div>

```html
<ul class="menu menu-ellipsis">
    <li>
        <div class="item-body">
            Officia cillum nisi ea velit
        </div>
    </li>
    <li>
        <div class="item-body">
            Lorem ipsum dolor anim commodo elit in consectetur tempor amet dolor quis dolore laborum proident irure in.
        </div>
    </li>
    <li>
        <div class="item-body">
            Minim velit laboris in aliquip.
        </div>
    </li>
</ul>
```

---

### States

Menu items come with a handful of convenient states to help with different use-cases. Add the classes `.active` `.selected` or `.disabled` to a menu item to help provide context:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4">
        <ul class="menu">
            <li>Default</li>
            <li class="hover">hover</li>
            <li>Default</li>
            <li class="active">.active</li>
            <li>Default</li>
            <li class="selected">.selected</li>
            <li>Default</li>
            <li class="disabled">.disabled</li>
        </ul>
    </div>
</div>

```html
<ul class="menu">
    <li>Default</li>
    <li class="hover">hover</li>
    <li>Default</li>
    <li class="active">.active</li>
    <li>Default</li>
    <li class="selected">.selected</li>
</ul>
```

---

### CSS Customization

Menu uses local CSS variables on `.menu` along with Sass variables for enhanced component customization and styling. The base values are used by the UI to create all the styling. Values for the CSS variables are set via Sass, so pre-compilation customization is still supported too.

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4">
        <style scoped>
            .custom-menu
            {
                --fbx-menu-bg: var(--fbx-black);
                --fbx-menu-color: var(--fbx-white);
                --fbx-menu-item-color-hover: var(--fbx-white);
                --fbx-menu-item-color-active: var(--fbx-theme-primary);
                --fbx-menu-item-color-selected: var(--fbx-theme-primary);
                --fbx-menu-item-bg-hover: var(--fbx-gray-900);
                --fbx-menu-item-bg-active: var(--fbx-gray-900);
                --fbx-menu-item-bg-selected: var(--fbx-gray-900);
                --fbx-menu-divider-color: var(--fbx-gray-600);
            }
        </style>
        <ul class="menu custom-menu"> 
            <li>
                <span class="item-left"><span class="fa fa-inbox color-gray-800"></span></span>
                <span class="item-body">Inbox</span>
                <span class="item-right"><span class="label bg-gray-800">4</span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-flag color-gray-800"></span></span>
                <span class="item-body">Flagged</span>
                <span class="item-right"><span class="label bg-gray-800">23</span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-note-sticky color-gray-800"></span></span>
                <span class="item-body">Drafts</span>
                <span class="item-right"><span class="label bg-gray-800">3</span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-paper-plane color-gray-800"></span></span>
                <span class="item-body">Sent</span>
                <span class="item-right"><span class="status status-xs bg-gray-800"></span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-circle-minus color-gray-800"></span></span>
                <span class="item-body">Junk</span>
                <span class="item-right"><span class="status status-xs status-warning"></span></span>
            </li>
            <li>
                <span class="item-left"><span class="fa fa-trash color-gray-800"></span></span>
                <span class="item-body">Trash</span>
                <span class="item-right"><span class="status status-xs status-danger"></span></span>
            </li>
        </ul>
    </div>
</div>

```css
.custom-menu
{
    --fbx-menu-bg: var(--fbx-black);
    --fbx-menu-color: var(--fbx-white);
    --fbx-menu-item-color-hover: var(--fbx-white);
    --fbx-menu-item-color-active: var(--fbx-theme-primary);
    --fbx-menu-item-color-selected: var(--fbx-theme-primary);
    --fbx-menu-item-bg-hover: var(--fbx-gray-900);
    --fbx-menu-item-bg-active: var(--fbx-gray-900);
    --fbx-menu-item-bg-selected: var(--fbx-gray-900);
    --fbx-menu-divider-color: var(--fbx-gray-600);
}
```

Customization via Sass can be made in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$menu-bg:                       var(--fbx-white) !default;
$menu-color:                    var(--fbx-gray-700) !default;
$menu-font-size:                1.3rem !default;
$menu-font-weight:              $text-normal !default;
$menu-radius:                   var(--fbx-border-radius) !default;
$menu-container-padding:        3px !default;
$menu-item-bg:                  transparent !default;
$menu-item-color-hover:         var(--fbx-gray-700) !default;
$menu-item-color-active:        var(--fbx-theme-primary) !default;
$menu-item-color-checked:       var(--fbx-white) !default;
$menu-item-color-selected:      var(--fbx-white) !default;
$menu-item-bg-hover:            var(--fbx-theme-primary-100) !default;
$menu-item-bg-active:           var(--fbx-theme-primary-200) !default;
$menu-item-bg-selected:         var(--fbx-theme-primary) !default;
$menu-item-bg-checked:          var(--fbx-theme-primary) !default;
$menu-item-pad-y:               10px !default;
$menu-item-pad-x:               12px !default;
$menu-item-v-space:             2px !default;
$menu-divider-color:            var(--fbx-gray-200) !default;
$menu-divider-space:            5px;
```

```css
.menu {
    --fbx-menu-bg: var(--fbx-white);
    --fbx-menu-color: var(--fbx-gray-700);
    --fbx-menu-container-padding: 3px;
    --fbx-menu-radius: var(--fbx-border-radius);
    --fbx-menu-font-size: 1.3rem;
    --fbx-menu-font-weight: 400;
    --fbx-menu-item-color-hover: var(--fbx-gray-700);
    --fbx-menu-item-color-active: var(--fbx-theme-primary);
    --fbx-menu-item-color-checked: var(--fbx-white);
    --fbx-menu-item-color-selected: var(--fbx-white);
    --fbx-menu-item-bg: transparent;
    --fbx-menu-item-bg-hover: var(--fbx-theme-primary-100);
    --fbx-menu-item-bg-checked: var(--fbx-theme-primary);
    --fbx-menu-item-bg-active: var(--fbx-theme-primary-200);
    --fbx-menu-item-bg-selected: var(--fbx-theme-primary);
    --fbx-menu-item-pad-y: 10px;
    --fbx-menu-item-pad-x: 12px;
    --fbx-menu-item-v-space: 2px;
    --fbx-menu-divider-color: var(--fbx-gray-200);
    --fbx-menu-divider-space: 5px;
}
```

---

### JavaScript Instantiation

Menu can be instantiated via JavaScript to generate dynamic content on the fly. To create a Menu dynamically, use Frontbx's `Component.Create` method either via the `frontbx.Dom` or the Menu Component directly:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-6 flex-cols-lg-4 js-insert-container"></div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button class="btn js-insert-trigger">Insert menu</button>
    </div>
</div>


```JavaScript
let options =
{
    dense: false,
    selectable: true,
    ellipsis: false,
    items:
    [
        'Option One',
        {
            left: '<span class="fa fa-sun"></span>',
            body: 'Option Two'
        },
        {
            left: '<span class="fa fa-sun"></span>',
            body: 'Option 3',
            right: '<span class="fa fa-user"></span>',
        }
    ]
};

let container = document.querySelector('.my-container');

// Via Hibble dom
frontbx.Dom().create('Menu', options, container);

// Or via Component directly
frontbx.Dom().component('Menu').create(options, container);
```

Below are the available options:


| Option             | Default | Example                                      | Behavior                                                        |
|--------------------|---------|----------------------------------------------|-----------------------------------------------------------------|
| `classes`          | `''`    | `my-button`                                  | Additional class name(s) on `<ul>` element.                     |
| `dense`            | `false` | `true`                                       | Makes dense menu                                                |
| `ellipsis`         | `false` | `true`                                       | Enables menu item text overflow ellipsis                        |
| `selectable`       | `false` | `true`                                       | Enables selectable items.                                       |
| `selected`         | `null`  | `option 2`                                   | Text or value of default selected item when `selectable` true   |
| `items`            | `[]`    | `['option 1', 'option 2']`                   | Array of menu items as text or objects with sub item properties |
| `items.item.left`  | `null`  | `{left:<span class="fa fa-sun"></span>'`     | Optional HTML string of optional menu item left                 |
| `items.item.right` | `null`  | `{right: '<span class="fa fa-user"></span>'` | Optional HTML string of optional menu item right                |
| `items.item.body`  | `null`  | `{right: 'Option 1'`                         | Optional HTML string or text of optional menu item body         |
| `items.item.state` | `null`  | `{state: 'selected'`                         | Optional menu item state class                                  |


