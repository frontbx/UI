# Inputs

---

FrontBx comes with a number of basic form inputs  

---

*   [Markup](#markup)
    *   [Variants](#variants)
*   [States](#states)
*   [Helper text](#helper-text)
*   [Add-ons](#add-ons)
    *   [Prompts](#prompts)
    *   [Icons](#icons)
    *   [Buttons](#buttons)
*   [Contexts](#contexts)
*   [Field types](#field-types)

---

### Markup

FrontBx inputs allow you to style forms quickly with very little markup. Because HTML inputs are used frequently across third-party libraries and plugins, FrontBx inputs are styled with the `.form-field` wrapper class.

The default variant for inputs is a *floating label* style input which comes in both an underline and the default style:

<div class="code-content-example">
    <form class="row">
        <div class="flex-row flex-cols-12 flex-cols-md-6 col-gaps-sm row-gaps-sm align-cols-center">
            <div class="form-field col-md-4">
                <input name="text" id="example_1" type="text" placeholder="Enter some text...">
                <label for="example_1">Default</label>
            </div>
            <div class="form-field underlined col-md-4">
                <input name="text" id="example_2" type="text" placeholder="Enter some text...">
                <label for="example_2">.underline</label>
            </div>
        </div>
    </form>
</div>

```html
<!-- default -->
<div class="form-field">
    <input name="text" id="example_1" type="text" placeholder="Enter some text...">
    <label for="example_1">Default</label>
</div>

<!-- underlined -->
<div class="form-field underlined">
    <input name="text" id="example_2" type="text" placeholder="Enter some text...">
    <label for="example_2">.underline</label>
</div>
```

#### Variants

In addition to the two base variants, inputs can be styled both without a label or with a label outside the input by simply omitting the `<label>` or placing it before the `<input>` inside the `.form-field`. Below is a simple example to showcase this:

<div class="code-content-example">
    <form class="flex-row row-gaps-sm">
        <div class="flex-row flex-cols-12 flex-cols-md-6 col-gaps-sm row-gaps-sm align-cols-center">
            <div class="form-field col-md-4">
                <input name="text" id="example_3" type="text" placeholder="No Label">
            </div>
            <div class="form-field underlined col-md-4">
                <input name="text" id="example_4" type="text" placeholder="No Label">
            </div>
        </div>
        <div class="flex-row flex-cols-12 flex-cols-md-6 col-gaps-sm row-gaps-sm align-cols-center">
           <div class="form-field col-md-4">
                <label for="example_5">Outside label:</label>
                <input name="text" id="example_5" type="text" placeholder="Enter some text...">
            </div>
            <div class="form-field underlined col-md-4">
                <label for="example_6">Outside label:</label>
                <input name="text" id="example_6" type="text" placeholder="Enter some text...">
            </div>
        </div>
    </form>
</div>


```html
<!-- no label -->
<div class="form-field">
    <input name="text" id="example_3" type="text" placeholder="No Label">
</div>

<!-- no label underlined -->
<div class="form-field underlined">
    <input name="text" id="example_4" type="text" placeholder="No Label">
</div>

<!-- outside label -->
<div class="form-field">
    <label for="example_5">Outside label:</label>
    <input name="text" id="example_5" type="text" placeholder="Enter some text...">
</div>

<!-- outside label underlined -->
<div class="form-field underlined">
    <label for="example_6">Outside label:</label>
    <input name="text" id="example_6" type="text" placeholder="Enter some text...">
</div>
```

---

### States

Input states are styled on modifier classes added to the `.form-field` wrapper element via JavaScript. The library adds `.not-empty`, `.empty` & `.focus` automatically depending on the input state.

Additional context states of `.danger`, `.warning` & `.disabled` are also made available.

<div class="code-content-example">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="row pole-sm pole-s">
                <div class="form-field row">
                    <input name="text" id="example_7" type="text" placeholder="Enter some text...">
                    <label for="example_7">Default</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row not-empty">
                    <input name="text" id="example_8" type="text" placeholder="Enter some text..." value="Something here">
                    <label for="example_8">.not-empty</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row focus">
                    <input name="text" id="example_9" type="text" placeholder="Enter some text...">
                    <label for="example_9">.focus.empty</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row focus not-empty">
                    <input name="text" id="example_10" type="text" placeholder="Enter some text..." value="Something here">
                    <label for="example_10">.focus.not-empty</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row danger">
                    <input name="text" id="example_11" type="text" placeholder="Enter some text...">
                    <label for="example_11">.danger</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row warning">
                    <input name="text" id="example_12" type="text" placeholder="Enter some text...">
                    <label for="example_12">.warning</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row disabled">
                    <input name="text" id="example_13" type="text" placeholder="Enter some text..." disabled class="disabled">
                    <label for="example_13">Disabled</label>
                </div>
            </div>
        </div>
    </form>
</div> 

```html
<!-- default state -->
<div class="form-field row">
    <input name="text" id="example_7" type="text" placeholder="Enter some text...">
    <label for="example_7">Default</label>
</div>

<!-- not empty -->
<div class="form-field row not-empty">
    <input name="text" id="example_8" type="text" placeholder="Enter some text..." value="Something here">
    <label for="example_8">.not-empty</label>
</div>

<!-- focus and empty -->
<div class="form-field row focus">
    <input name="text" id="example_9" type="text" placeholder="Enter some text...">
    <label for="example_9">.focus.empty</label>
</div>

<!-- focus and not empty -->
<div class="form-field row focus not-empty">
    <input name="text" id="example_10" type="text" placeholder="Enter some text..." value="Something here">
    <label for="example_10">.focus.not-empty</label>
</div>

<!-- danger -->
<div class="form-field row danger">
    <input name="text" id="example_11" type="text" placeholder="Enter some text...">
    <label for="example_11">.danger</label>
</div>

<!-- warning -->
<div class="form-field row warning">
    <input name="text" id="example_12" type="text" placeholder="Enter some text...">
    <label for="example_12">.warning</label>
</div>

<!-- disabled -->
<div class="form-field row disabled">
    <input name="text" id="example_13" type="text" placeholder="Enter some text..." disabled class="disabled">
    <label for="example_13">Disabled</label>
</div>
```

---

### Helper text

Input errors and warning help-text can be used when running form validations. They're hidden by default and will display when the the wrapping `.form-field` has a class of `.danger` or `.warning`.

<div class="code-content-example">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="row pole-xs pole-s">
                <div class="form-field row warning">
                    <input name="text" id="example_14" type="text" placeholder="Enter some text...">
                    <label for="example_14">Warning</label>
                </div>
                <p class="help-warning">* Make sure your name is real</p>
            </div>
            <div class="row pole-xs pole-s">
                <div class="form-field row danger">
                    <input name="text" id="example_15" type="text" placeholder="Enter some text...">
                    <label for="example_15">Danger</label>
                </div>
                <p class="help-danger">* You need to enter your name</p>
                <p class="help-warning">* Make sure your name is real</p>
            </div>
        </div>
    </form>
</div>

```html
<!-- shows warning -->
<div class="form-field row warning">
    <input name="text" id="example_14" type="text" placeholder="Enter some text...">
    <label for="example_14">Warning</label>
</div>
<p class="help-warning">* Make sure your name is real</p>
<p class="help-danger">* You need to enter your name</p>

<!-- shows danger -->
<div class="form-field row danger">
    <input name="text" id="example_15" type="text" placeholder="Enter some text...">
    <label for="example_15">Danger</label>
</div>
<p class="help-danger">* You need to enter your name</p>
<p class="help-warning">* Make sure your name is real</p>
```

---

### Add-ons


#### Prompts

Input prompts can be added inside a `.form-field` by adding the `.input-group` modifier to the wrapper and be placed either side of the input. In cases where the add-on is before (or either side) of the input - simply wrap the `<label>` and `<input>` in a `div`

<div class="code-content-example">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="row pole-sm pole-s">
                <div class="form-field input-group">
                    <span class="input-addon">@</span>
                    <div>
                        <input name="text" id="example_16" type="text" placeholder="Your handle...">
                        <label for="example_16">Username</label>
                    </div>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field input-group">
                    <input name="text" id="example_17" type="text" placeholder="Your handle">
                    <label for="example_17">Vanity URL</label>
                    <span class="input-addon">foo.com</span>
                </div>
            </div>
            <div class="form-field input-group">
                <span class="input-addon">Cool Name</span>
                <div>
                    <input name="text" id="example_18" type="text" placeholder="Your email">
                    <label for="example_18">Email address</label>
                </div>
                <span class="input-addon">@foo.com</span>
            </div>
        </div>
    </form>
</div>

```html
<!-- Addon before input -->
<div class="form-field input-group">
    <span class="input-addon">@</span>
    <div>
        <input name="text" id="example_16" type="text" placeholder="Your handle...">
        <label for="example_16">Username</label>
    </div>
</div>

<!-- Addon after input -->
<div class="form-field input-group">
    <input name="text" id="example_17" type="text" placeholder="Your handle">
    <label for="example_17">Vanity URL</label>
    <span class="input-addon">foo.com</span>
</div>

<!-- Addon before & after input -->
<div class="form-field input-group">
    <span class="input-addon">Cool Name</span>
    <div>
        <input name="text" id="example_18" type="text" placeholder="Your email">
        <label for="example_18">Email address</label>
    </div>
    <span class="input-addon">@foo.com</span>
</div>
```

#### Buttons

[Buttons](../buttons/index.html) can be place either inside or outside the `.form-field` wrapper. Adding a button inside the form-field has the effect of integrating the button into the input.

<div class="code-content-example">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="row pole-sm pole-s">
                <div class="form-field input-group">
                    <button class="btn btn-outline btn-primary">Button</button>
                    <div>
                        <input name="text" id="example_19" type="text" placeholder="Your handle...">
                        <label for="example_19">Username</label>
                    </div>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field input-group">
                    <input name="text" id="example_20" type="text" placeholder="Your handle">
                    <label for="example_20">Vanity URL</label>
                    <button class="btn btn-outline btn-primary">Button</button>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field input-group">
                    <button class="btn">Button</button>
                    <div>
                        <input name="text" id="example_21" type="text" placeholder="Your email">
                        <label for="example_21">Email address</label>
                    </div>
                    <button class="btn">Button</button>
                </div>
            </div>
            <div class="flex-row-fluid col-gaps-xs">
                <div class="form-field">
                    <input name="text" id="example_22" type="text" placeholder="Your handle">
                    <label for="example_22">Vanity URL</label>
                </div>
                <button class="btn btn-primary">Button</button>
            </div>
        </div>
    </form>
</div>

```html
<!-- button before input -->
<div class="form-field input-group">
    <button class="btn btn-outline btn-primary">Button</button>
    <div>
        <input name="text" id="example_19" type="text" placeholder="Your handle...">
        <label for="example_19">Username</label>
    </div>
</div>

<!-- button after input -->
<div class="form-field input-group">
    <input name="text" id="example_20" type="text" placeholder="Your handle">
    <label for="example_20">Vanity URL</label>
    <button class="btn btn-outline btn-primary">Button</button>
</div>

<!-- button both sides -->
<div class="form-field input-group">
    <button class="btn">Button</button>
    <div>
        <input name="text" id="example_21" type="text" placeholder="Your email">
        <label for="example_21">Email address</label>
    </div>
    <button class="btn">Button</button>
</div>

<!-- Button next to input -->
<div class="flex-row-fluid col-gaps-xs">
    <div class="form-field">
        <input name="text" id="example_22" type="text" placeholder="Your handle">
        <label for="example_22">Vanity URL</label>
    </div>
    <button class="btn btn-primary">Button</button>
</div>
```

#### Icons

Icons can be integrated into input inside the `.form-field` wrapper as an add-on. No additional markup or classes are required however:

<div class="code-content-example">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="row pole-sm pole-s">
                <div class="form-field row">
                    <span class="fa fa-search"></span>
                    <input name="text" id="example_23" type="search" placeholder="Search something...">
                    <label for="example_23">Text Input</label>
                </div>
            </div>
            <div class="row pole-sm pole-s">
                <div class="form-field row">
                    <input name="text" id="example_24" type="text" placeholder="Enter some text...">
                    <label for="example_24">Text Input</label>
                    <span class="fa fa-heart"></span>
                </div>
            </div>
            <div class="form-field row">
                <span class="fa fa-heart"></span>
                <input name="text" id="example_25" type="text" placeholder="Enter some text...">
                <label for="example_25">Text Input</label>
                <span class="fa fa-heart"></span>
            </div>
        </div>
    </form>
</div>

```html
<!-- Icon before input -->
<div class="form-field row">
    <span class="fa fa-search"></span>
    <input name="text" id="example_23" type="search" placeholder="Search something...">
    <label for="example_23">Text Input</label>
</div>

<!-- Icon after input -->
<div class="form-field row">
    <input name="text" id="example_24" type="text" placeholder="Enter some text...">
    <label for="example_24">Text Input</label>
    <span class="fa fa-heart"></span>
</div>

<!-- Icon before & after input -->
<div class="form-field row">
    <span class="fa fa-heart"></span>
    <input name="text" id="example_25" type="text" placeholder="Enter some text...">
    <label for="example_25">Text Input</label>
    <span class="fa fa-heart"></span>
</div>
```

---

### Contexts

In addition to the default styles, the `.field-on-bg` modifier provides pre-styled markup for inputs that are on a colored background such as `bg-black` `.bg-black` etc...

<div class="code-content-example">
    <form class="row bg-black pole-sm">
        <div class="flex-row-fluid col-gaps-sm align-cols-center">
            <div class="form-field field-on-bg">
                <input name="text" id="example_26" type="text" placeholder="Enter some text...">
                <label for="example_26">Default</label>
            </div>
            <div class="form-field underlined field-on-bg">
                <input name="text" id="example_27" type="text" placeholder="Enter some text...">
                <label for="example_27">.underline</label>
            </div>
        </div>
        <div class="flex-row-fluid col-gaps-sm align-cols-center pole-sm pole-n">
            <div class="form-field field-on-bg">
                <input name="text" id="example_28" type="text" placeholder="No Label">
            </div>
            <div class="form-field underlined field-on-bg">
                <input name="text" id="example_29" type="text" placeholder="No Label">
            </div>
        </div>
        <div class="flex-row-fluid col-gaps-sm align-cols-center pole-sm pole-n">
            <div class="form-field field-on-bg">
                <label for="example_30">Outside label:</label>
                <input name="text" id="example_30" type="text" placeholder="Enter some text...">
            </div>
            <div class="form-field underlined field-on-bg">
                <label for="example_31">Outside label:</label>
                <input name="text" id="example_31" type="text" placeholder="Enter some text...">
            </div>
        </div>
    </form>
</div>

```html
<form class="row bg-black">
    
    <!-- default styles -->
    <div class="form-field field-on-bg">
        <input name="text" id="example_26" type="text" placeholder="Enter some text...">
        <label for="example_26">Default</label>
    </div>
    <div class="form-field underlined field-on-bg">
        <input name="text" id="example_27" type="text" placeholder="Enter some text...">
        <label for="example_27">.underline</label>
    </div>

    <!-- no label -->
    <div class="form-field field-on-bg">
        <input name="text" id="example_28" type="text" placeholder="No Label">
    </div>
    <div class="form-field underlined field-on-bg">
        <input name="text" id="example_29" type="text" placeholder="No Label">
    </div>

    <!-- outside labels --> 
    <div class="form-field field-on-bg">
        <label for="example_30">Outside label:</label>
        <input name="text" id="example_30" type="text" placeholder="Enter some text...">
    </div>
    <div class="form-field underlined field-on-bg">
        <label for="example_31">Outside label:</label>
        <input name="text" id="example_31" type="text" placeholder="Enter some text...">
    </div>

</form>
```

---

### Field types

In addition to regular inputs, `.form-field` can be used with both `<select>` and `<textarea>` elements. Below is a sample of various input types and how they present:

<div class="code-content-example">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="row pole-xs pole-s">
                <div class="form-field row">
                    <select name="select" id="example_34" placeholder="Choose something nice">
                        <option value="">Choose an option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <label for="example_34">Select</label>
                </div>
            </div>
            <div class="row pole-xs pole-s">
                <div class="form-field row">
                    <textarea name="text" id="example_35" rows="5" placeholder="Enter some text..."></textarea>
                    <label for="example_35">Textarea</label>
                </div>
            </div>
            <div class="row pole-xs pole-s">
                <div class="form-field row">
                    <input name="date" id="example_36" type="date" placeholder="Pick a date">
                    <label for="example_36">Date</label>
                </div>
            </div>
            <div class="row">
                <div class="form-field row">
                    <input name="time" id="example_37" type="time" placeholder="Pick a time">
                    <label for="example_37">Time</label>
                </div>
            </div>
        </div>
    </form>
</div>


```html
<!-- select -->
<div class="form-field row">
    <select name="select" id="example_34" placeholder="Choose something nice">
        <option value="">Choose an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
    </select>
    <label for="example_34">Select</label>
</div>

<!-- textarea -->
<div class="form-field row">
    <textarea name="text" id="example_35" rows="5" placeholder="Enter some text..."></textarea>
    <label for="example_35">Textarea</label>
</div>

<!-- date -->
<div class="form-field row">
    <input name="date" id="example_36" type="date" placeholder="Pick a date">
    <label for="example_36">Date</label>
</div>

<!-- time -->
<div class="form-field row">
    <input name="time" id="example_37" type="time" placeholder="Pick a time">
    <label for="example_37">Time</label>
</div>
```

