# Chips

Chips allow users to enter information, make selections, filter content, or trigger actions and are one of Frontbx's most versatile components.

While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically as a group of multiple interactive elements.

---

*   [Markup](#markup)
*   [States](#states)
*   [Variants](#variants)
*   [Input chips](#input-chips)
*   [Suggestion Chips](#suggestion-chips)
*   [Choice Chips](#choice-chips)
*   [Filter Chips](#filter-chips)

---

### Markup

Chips are a modifier class to Frontbx's `.btn`, however as you'll see have extended functionality and states. A basic chip is created using the `.btn-chip` on `.btn`.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs row-gaps-xs">
        <button class="btn btn-chip">Hello</button>
        <button class="btn btn-chip">World</button>
        <button class="btn btn-chip">
            <span class="fa fa-check"></span>
            Good
        </button>
        <button class="btn btn-chip">
            Love&nbsp;
            <span class="fa fa-heart"></span>
        </button>
    </div>
</div>

```html
<!-- Basic chip -->
<button class="btn btn-chip">Hello</button>

<!-- Chip with icon before -->
<button class="btn btn-chip">
    <span class="fa fa-check"></span>
    Good
</button>

<!-- Chip with icon after -->
<button class="btn btn-chip">
    Love&nbsp;
    <span class="fa fa-heart"></span>
</button>
```

---

### States

Along with their native states native states, chips can have extra states depending on their use case:

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs row-gaps-xs">
        <button class="btn btn-chip">normal</button>
        <button class="btn btn-chip hover">:hover</button>
        <button class="btn btn-chip selected">.selected</button>
        <button class="btn btn-chip checked">.checked</button>
        <button class="btn btn-chip disabled">.disabled</button>
    </div>
</div>

```html
<!-- Normal -->
<button class="btn btn-chip">normal</button>

<!-- Hovered -->
<button class="btn btn-chip hover">:hover</button>

<!-- Selected -->
<button class="btn btn-chip selected">.selected</button>

<!-- Checked -->
<button class="btn btn-chip checked">.checked</button>

<!-- Disabled -->
<button class="btn btn-chip disabled">.disabled</button>
```

---

### Variants

Since chips are a modifier on `.btn`, they have all the same contextual variants.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs row-gaps-xs">
        <button class="btn btn-primary btn-chip">.btn-primary</button>
        <button class="btn btn-info btn-chip">.btn-info</button>
        <button class="btn btn-success btn-chip">.btn-success</button>
        <button class="btn btn-warning btn-chip">.btn-warning</button>
        <button class="btn btn-danger btn-chip">.btn-danger</button>
    </div>
    <div class="flex-row-fluid align-cols-center col-gaps-xs row-gaps-xs pole-sm pole-n">
        <button class="btn btn-outline btn-primary btn-chip">.btn-primary</button>
        <button class="btn btn-outline btn-info btn-chip">.btn-info</button>
        <button class="btn btn-outline btn-success btn-chip">.btn-success</button>
        <button class="btn btn-outline btn-warning btn-chip">.btn-warning</button>
        <button class="btn btn-outline btn-danger btn-chip">.btn-danger</button>
    </div>
</div>

```html
<!-- Contexts -->
<button class="btn btn-primary btn-chip">.btn-primary</button>
<button class="btn btn-info btn-chip">.btn-info</button>
<button class="btn btn-success btn-chip">.btn-success</button>
<button class="btn btn-warning btn-chip">.btn-warning</button>
<button class="btn btn-danger btn-chip">.btn-danger</button>

<!-- Contexts outline -->
<button class="btn btn-outline btn-primary btn-chip">.btn-primary</button>
<button class="btn btn-outline btn-info btn-chip">.btn-info</button>
<button class="btn btn-outline btn-success btn-chip">.btn-success</button>
<button class="btn btn-outline btn-warning btn-chip">.btn-warning</button>
<button class="btn btn-outline btn-danger btn-chip">.btn-danger</button>
```

---

### Input chips

Adding chips to a input requires a few bits and pieces of markup but is relatively straight-forward. 

1. Create a wrapper element with the `.chips-input` `.js-chips-input` classes.
    * __Add an optional `data-name` attribute to the wrapper element to insert a hidden input inside each `name` chip with a name.__
    * __Add an optional `data-chip` attribute to the wrapper element to append any custom classes to inserted chips. For example setting this to `.btn-outline` would insert outline variants of chips.__
2. Add any existing chips using `<span>` tag rather than `<button>`.
    *   __Chips use `span` element rather than a `button` as there is a hidden `input` element inside each chip as well as `button` to remove it.__
3. Create a standard [Frontbx Input](../inputs/index.html) with the `.js-chip-input` class added to it.

<div class="fbx-snippet-demo">
    <form class="row pole-xs">
        <div class="chips-input js-chips-input" data-input-name="chips[]" data-chip-class="">
            <span class="btn btn-chip">
                Hello
                <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
                    <span class="fa fa-xmark"></span>
                </button>
                <input type="hidden" value="Hello" name="chips[]">
            </span>
            <span class="btn btn-chip">
                World
                <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
                    <span class="fa fa-xmark"></span>
                </button>
                <input type="hidden" value="World" name="chips[]">
            </span>
            <div class="form-field">
                <input class="js-chip-input" id="chip-field" type="text" placeholder="Add your chips...">
                <label for="chip-field">Text Input</label>
            </div>
        </div>
    </form>
</div>

```html
<!-- Wrapper element -->
<div class="chips-input js-chips-input" data-input-name="chips[]" data-chip-class="">
    
    <!-- Any existing chips -->
    <span class="btn btn-chip">
        Hello
        <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
            <span class="fa fa-xmark"></span>
        </button>
        <input type="hidden" value="Hello" name="chips[]">
    </span>
    
    <!-- Standard Frontbx form field -->
    <div class="form-field">
        <input class="js-chip-input" id="chip-field" type="text" placeholder="Add your chips...">
        <label for="chip-field">Text Input</label>
    </div>

</div>

```

Input chips also come with an pre-built unstyled input. The base input has no styling making it versatile usage.

1. Add the `.chips-input-unstyled` class to wrapper element.
2. Add the `.input-unstyled` to input.

<div class="fbx-snippet-demo">
    <div class="chips-input-unstyled js-chips-input" data-input-name="chips[]" data-chip-class="">
        <label for="chip-field2">Tags</label>
        <span class="btn btn-chip">
            Hello
            <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
                <span class="fa fa-xmark"></span>
            </button>
            <input type="hidden" value="Hello" name="chips[]">
        </span>
        <span class="btn btn-chip">
            World
            <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
                <span class="fa fa-xmark"></span>
            </button>
            <input type="hidden" value="World" name="chips[]">
        </span>
        <input type="text" class="input-unstyled js-chip-input" placeholder="Enter your tags..." id="chip-field2">
    </div>
</div>

```html
<!-- Wrapper element -->
<div class="chips-input-unstyled js-chips-input" data-input-name="chips[]" data-chip-class="">
    
    <!-- Input label -->
    <label for="chip-field2">Tags</label>

    <!-- Existing chips -->
    <span class="btn btn-chip">
        Hello
        <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
            <span class="fa fa-xmark"></span>
        </button>
        <input type="hidden" value="Hello" name="chips[]">
    </span>
    
    <!-- Unstyled input -->
    <input type="text" class="input-unstyled js-chip-input" placeholder="Enter your tags..." id="chip-field2">
</div>
```

---

### Suggestions

Chips can be used as suggestions to any existing input. Simply wrap chips in a `.js-chip-suggestions` element, setting the `data-input-target` to the `id` of the target input.

<div class="fbx-snippet-demo">
    <div class="chips-input-unstyled row">
        <label for="response1">Text Input:</label>
        <input class="input-unstyled" name="response" id="response1" type="text" placeholder="Enter some text...">
    </div>
    <div class="flex-row-fluid pole-xs pole-n col-gaps-xs js-chip-suggestions" data-input-target="response1">
        <button class="btn btn-chip ">Wow great idea!</button>
        <button class="btn btn-chip">Sounds good. Let's do it.</button>
        <button class="btn btn-chip">Ok see you there.</button>
    </div>
</div>

```html
<!-- Unstyled input -->
<div class="chips-input-unstyled row">
    <label for="response1">Text Input:</label>
    <input class="input-unstyled" name="response" id="response1" type="text" placeholder="Enter some text...">
</div>

<!-- Chip suggestions -->
<div class="flex-row-fluid pole-xs pole-n col-gaps-xs js-chip-suggestions" data-input-target="response1">
    <button class="btn btn-chip">Wow great idea!</button>
    <button class="btn btn-chip">Sounds good. Let's do it.</button>
    <button class="btn btn-chip">Ok see you there.</button>
</div>
```

Chip suggestions can be incorporated into a **chip input** too. the `data-input-target` to the `id` of wrapper element for the chip input.

<div class="fbx-snippet-demo">
    <div class="chips-input-unstyled js-chips-input" data-input-name="chips[]" data-chip-class="" id="suggestions-chip-input">
        <label for="chip-field2">Tags</label>
        <span class="btn btn-chip">
            Hello
            <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
                <span class="fa fa-xmark"></span>
            </button>
            <input type="hidden" value="Hello" name="chips[]">
        </span>
        <span class="btn btn-chip">
            World
            <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
                <span class="fa fa-xmark"></span>
            </button>
            <input type="hidden" value="World" name="chips[]">
        </span>
        <input type="text" class="input-unstyled js-chip-input" placeholder="Enter your tags...">
    </div>
    <div class="flex-row-fluid pole-xs pole-n col-gaps-xs js-chip-suggestions" data-input-target="suggestions-chip-input">
        <button class="btn btn-chip ">Wow great idea!</button>
        <button class="btn btn-chip">Sounds good. Let's do it.</button>
        <button class="btn btn-chip">Ok see you there.</button>
    </div>
</div>

```html
<!-- Input wrapper -->
<div class="chips-input-unstyled js-chips-input" data-input-name="chips[]" data-chip-class="" id="suggestions-chip-input">
    
    <!-- Input label -->
    <label for="chip-field2">Tags</label>
    
    <!-- Existing chip -->
    <span class="btn btn-chip">
        Hello
        <button type="button" aria-label="remove" class="remove-btn btn-unstyled js-remove-btn">
            <span class="fa fa-xmark"></span>
        </button>
        <input type="hidden" value="Hello" name="chips[]">
    </span>

    <!-- Actual input -->
    <input type="text" class="input-unstyled js-chip-input" placeholder="Enter your tags...">
</div>

<!-- Suggestions wrapper. "data-input-target" points to wrapper element -->
<div class="flex-row-fluid pole-xs pole-n col-gaps-xs js-chip-suggestions" data-input-target="suggestions-chip-input">
    <button class="btn btn-chip ">Wow great idea!</button>
    <button class="btn btn-chip">Sounds good. Let's do it.</button>
    <button class="btn btn-chip">Ok see you there.</button>
</div>
```

---

### Choice chips

Choice chips are another way of displaying a radio input to the end-user for things like multiple-choice answers. They are a good alternative to toggle buttons, radio buttons, and single select menus.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs js-choice-chips">
        <button class="btn btn-chip" data-value="small">Small</button>
        <button class="btn btn-chip" data-value="medium">Medium</button>
        <button class="btn btn-chip selected" data-value="large">Large</button>
        <button class="btn btn-chip" data-value="extra-large">Extra Large</button>
        <input type="hidden" name="choice" value="large" class="js-choice-input">
    </div>
</div>

```html
<!-- Wrapper -->
<div class="js-choice-chips">
    
    <!-- Chip -->
    <button class="btn btn-chip" data-value="small">Small</button>
    <button class="btn btn-chip" data-value="medium">Medium</button>

    <!-- Hidden input -->
    <input type="hidden" name="choice" value="large" class="js-choice-input">

</div>
```

---

### Filter chips

Filter chips use tags or descriptive words to filter content making them a good alternative to toggle buttons or checkboxes.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs js-filter-chips">
        <button class="btn btn-chip">
            <input type="hidden" value="bedroom" name="location[]">
            <span class="fa fa-bed"></span>Bedroom
        </button>
        <button class="btn btn-chip">
            <input type="hidden" value="living-room" name="location[]">
            <span class="fa fa-couch"></span>Living Room                
        </button>
        <button class="btn btn-chip checked">
            <input type="hidden" value="kitchen" name="location[]">
            <span class="fa fa-kitchen-set"></span>Kitchen
        </button>
        <button class="btn btn-chip checked">
            <input type="hidden" value="study" name="location[]">
            Study
        </button>
    </div>
</div>

```html
<!-- Wrapper -->
<div class="js-filter-chips">

    <!-- Chip -->
    <button class="btn btn-chip">
        <span class="fa fa-bed"></span>Bedroom
        <input type="hidden" value="bedroom" name="location[]">
    </button>
    
</div>
```