# Range

Range inputs allow users to set value based on a range.

---

*   [Markup](#markup)
*   [Icons](#icons)
*   [Indicators](#indicators)
*   [CSS customization](#css-customization)
*   [JavaScript Instantiation](#javascript-instantiation)

---

### Markup

Creating a range field is super simple thanks to JavaScript. Create an element with the `range-slider js-range-slider` classes with an `input[type=range]` as the child:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field">
            <div class="range-slider js-range-slider">
                <input type="range" min="0" max="10" value="5" step="1">
            </div>
        </div>
    </div>
</div>

```html
<div class="range-slider js-range-slider">
    <input type="range" min="0" max="10" value="5" step="1">
</div>
```

--- 

### Icons

Icons can be added either side of the range input by simply adding them as you usually would. No other special markup is required here. The icons also get styled when the range reaches it's `min` and `max` values:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field">
            <div class="range-slider js-range-slider">
                <span class="fa fa-volume-off"></span>
                <input type="range" min="0" max="200" value="50" step="1">
                <span class="fa fa-volume-high"></span>
            </div>
        </div>
    </div>
</div>

```html
<div class="range-slider js-range-slider">
    <span class="fa fa-volume-off"></span>
    <input type="range" min="0" max="200" value="50" step="1">
    <span class="fa fa-volume-high"></span>
</div>
```

--- 

### Indicators

Add indicators for both the `min` and `max` by adding the `range-indicators` modifier class to the wrapper element.

When indicators are added either side, the `active` indicator gets styled to show it is the current value.

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field">
            <div class="range-slider range-indicators js-range-slider">
                <input type="range" min="0" max="100" value="50" step="1">
            </div>
        </div>
    </div>
</div>

```html
<div class="range-slider range-indicators js-range-slider">
    <input type="range" min="0" max="100" value="50" step="1">
</div>
```

Adding the `range-labeled` modifier class to wrapper element styles the indicators as labels:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field">
            <div class="range-slider range-labeled js-range-slider">
                <input type="range" min="0" max="100" value="50" step="1">
            </div>
        </div>
        <div class="col-12"></div>
        <div class="form-field">
            <div class="range-slider range-labeled range-indicators js-range-slider">
                <input type="range" min="0" max="100" value="50" step="1">
            </div>
        </div>
    </div>
</div>

```html
<!-- Label style -->
<div class="range-slider range-labeled js-range-slider">
    <input type="range" min="0" max="100" value="50" step="1">
</div>

<!-- Label style both indicators -->
<div class="range-slider range-labeled range-indicators js-range-slider">
    <input type="range" min="0" max="100" value="50" step="1">
</div>
```

##### Prefix & Suffix

You can also add an optional prefix and/or suffix string to the indicators. This is controlled via data attributes on the input:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field">
            <div class="range-slider js-range-slider">
                <input type="range" min="0" max="500" value="50" step="1" data-prefix="$" data-suffix=".00">
            </div>
        </div>
        <div class="col-12"></div>
        <div class="form-field">
            <div class="range-slider range-labeled js-range-slider">
                <input type="range" min="0" max="500" value="50" step="1" data-prefix="$" data-suffix=".00">
            </div>
        </div>
    </div>
</div>

```html
<div class="range-slider js-range-slider">
    <input type="range" min="0" max="500" value="50" step="1" data-prefix="$" data-suffix=".00">
</div>

<div class="range-slider range-labeled js-range-slider">
    <input type="range" min="0" max="500" value="50" step="1" data-prefix="$" data-suffix=".00">
</div>
```

---

### CSS Customization

<div class="fbx-snippet-demo">
    <style scoped>
        .range-slider.custom-range
        {
            --fbx-track-highlight: var(--fbx-theme-primary);
            --fbx-thumb-bg: var(--fbx-theme-primary);
            --fbx-thumb-focus-ring-color: rgba(var(--fbx-theme-primary-rgb),0.3);
            --fbx-icon-color-on: var(--fbx-theme-primary);
            --fbx-track-size: 8px;
            --fbx-thumb-size: 16px;
        }
    </style>
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field">
            <div class="range-slider custom-range js-range-slider">
                <input type="range" min="0" max="500" value="50" step="1" data-prefix="$" data-suffix=".00">
            </div>
        </div>
    </div>
</div>

Range inputs use local CSS variables on `.range-slider` for enhanced component customization and styling. The base values are used by the UI to create all the variants. Values for the CSS variables are set via Sass, so pre-compilation customization is still supported too.

Default values are set in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```
```scss
$range-track-bg:                var(--fbx-gray-300);
$range-track-highlight:         var(--fbx-theme-info);
$range-thumb-bg:                var(--fbx-theme-info);
$range-track-size:              4px;
$range-thumb-size:              16px;
$range-thumb-focus-ring-color:  rgba(var(--fbx-theme-info-rgb), 0.3);
$range-indicator-color:         var(--fbx-gray-300);
$range-indicator-font-size:     1.35rem;
$range-icon-color:              var(--fbx-gray-400);
$range-icon-color-on:           var(--fbx-theme-info);
$range-icon-color-off:          var(--fbx-gray-200);
```

```css
.range-slider
{
    --fbx-track-bg: var(--fbx-gray-300);
    --fbx-track-highlight: var(--fbx-theme-info);
    --fbx-thumb-bg: var(--fbx-theme-info);
    --fbx-track-size: 4px;
    --fbx-thumb-size: 16px;
    --fbx-thumb-focus-ring-color: rgba(var(--fbx-theme-info-rgb),0.3);
    --fbx-indicator-color: var(--fbx-gray-300);
    --fbx-indicator-font-size: 1.35rem;
    --fbx-icon-color: var(--fbx-gray-400);
    --fbx-icon-color-on: var(--fbx-theme-info);
    --fbx-icon-color-off: var(--fbx-gray-200);
}
```

---

### JavaScript Instantiation

Range sliders can be instantiated via JavaScript to generate dynamic content on the fly. To create a slider dynamically, use Frontbx's `Component.Create` method either via the `frontbx.Dom` or the `RangeSlider` Component directly:

<div class="fbx-snippet-demo">
    <div class="flex-row align-cols-center flex-cols-12 flex-cols-md-5 row-gaps-xs">
        <div class="form-field js-insert-range-container"></div>
        <div class="col-12"></div>
        <div class="col text-center">
            <button class="btn js-insert-range-btn">Insert range</button>
        </div>
    </div>
</div>

```JavaScript
let options =
{
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    labeled: false,
    indicators: false,
};

// Via Frontbx dom
frontbx.Dom().create('RangeSlider', options, container);

// Or via Component directly
frontbx.Dom().component('RangeSlider').create(options, container);
```

Below are the available options:

| Option       | Type      | Required             | Behavior                        |
|--------------|-----------|----------------------|---------------------------------|
| `min`        | `Integer` | Yes                  | Input `min`.                    |
| `max`        | `Integer` | Yes                  | Input `max`.                    |
| `value`      | `Integer` | Yes                  | Input `value`.                  |
| `step`       | `Integer` | Yes                  | Input `step`.                   |
| `labeled`    | `Boolean` | No (default `false`) | Enable label style indicator(s) |
| `indicators` | `Boolean` | No (default `false`) | Enable min and max indicators.  |

