# Tabs

Tabs make it easy to explore and switch between content on a compact surface.

---

*   [Markup](#markup)
*   [Variants](#variants)
    *   [Bordered](#bordered)
    *   [Centered](#centered)
    *   [Buttons](#buttons)
    *   [Chips](#chips)

---


### Markup

Tabs are super simple to setup and require very little custom markup. Below are the steps required to setup:

1. Create a list with the `.tab-nav` `.js-tab-nav` class names.
    *The `.js-` class is for JavaScript functionality, while the other is for CSS styling.*
2. Add the `data-tab=[panel-id]` attribute to clickable links
    *The `data-tab` attribute should point to the `id` of the respective tab panel*
3. Wrap panels in a parent `.tab-panels` `.js-tab-panels` element.
4. Give each panel the `.tab-panel` class-name and its respective `id`

Here's a basic example

<div class="fbx-snippet-demo">
    <ul class="tab-nav js-tab-nav" data-panels="">
        <li>
            <a href="#" class="active" data-tab="panel-1">Tab 1</a>
        </li>
        <li>
            <a href="#" data-tab="panel-2">Tab 2</a>
        </li>
        <li>
            <a href="#" data-tab="panel-3">Tab 3</a>
        </li>
    </ul>
    <div class="tab-panels js-tab-panels">
        <div class="tab-panel active" data-tab-panel="panel-1" id="tab-1">
            <div class="pad-20">
                <h4>Panel 1</h4>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </div>
        </div>
        <div class="tab-panel" data-tab-panel="panel-2" id="tab-2">
            <div class="pad-20">
                <h4>Panel 2</h4>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </div>
        </div>
        <div class="tab-panel" data-tab-panel="panel-3" id="tab-3">
            <div class="pad-20">
                <h4>Panel 3</h4>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </div>
        </div>
    </div>
</div>

```html
<ul class="tab-nav js-tab-nav">
    <li><a href="#" class="active" data-tab="panel-1">Tab 1</a></li>
    <li><a href="#" data-tab="panel-2">Tab 2</a></li>
    <li><a href="#" data-tab="panel-3">Tab 3</a></li>
</ul>

<div class="tab-panels js-tab-panels">
    <div class="tab-panel active" data-tab-panel="panel-1">
        ...
    </div>
    <div class="tab-panel" data-tab-panel="panel-2">
        ...
    </div>
    <div class="tab-panel" data-tab-panel="panel-3">
        ...
    </div>
</div>
```

---

### Variants


#### Bordered

Tabs come in with a handy pre-styled second variant - `.tab-border`. Add this for more traditional styled tabs

<div class="fbx-snippet-demo">
    <ul class="tab-nav tab-border js-tab-nav">
        <li>
            <a href="#" class="active" data-tab="panel-1">Tab 1</a>
        </li>
        <li>
            <a href="#" data-tab="panel-2">Tab 2</a>
        </li>
        <li>
            <a href="#" data-tab="panel-3">Tab 3</a>
        </li>
    </ul>
</div>

```html
<ul class="tab-nav tab-border js-tab-nav">
    <li>
        <a href="#" class="active" data-tab="panel-1">Tab 1</a>
    </li>
    <li>
        <a href="#" data-tab="panel-2">Tab 2</a>
    </li>
    <li>
        <a href="#" data-tab="panel-3">Tab 3</a>
    </li>
</ul>
```

#### Centered

Add the `.tab-centered` class to center the navigation:

<div class="fbx-snippet-demo">
    <ul class="tab-nav tab-centered js-tab-nav">
        <li>
            <a href="#" class="active" data-tab="panel-1">Tab 1</a>
        </li>
        <li>
            <a href="#" data-tab="panel-2">Tab 2</a>
        </li>
        <li>
            <a href="#" data-tab="panel-3">Tab 3</a>
        </li>
    </ul>
</div> 

```html
<ul class="tab-nav tab-centered js-tab-nav">
    <li>
        <a href="#" class="active" data-tab="panel-1">Tab 1</a>
    </li>
    <li>
        <a href="#" data-tab="panel-2">Tab 2</a>
    </li>
    <li>
        <a href="#" data-tab="panel-3">Tab 3</a>
    </li>
</ul>
```

#### Buttons

Because styling and JavaScript functionality of tabs are split with `.js-` classes, you can use other Frontbx components to create your own styled tabs:

Here is an example Frontbx's `.btn` for the navigation:

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid col-gaps-xs align-cols-center js-tab-nav" data-active-class="btn-primary">
        <button type="button" class="btn btn-primary" data-tab="panel-1">Tab 1</button>
        <button type="button" class="btn" data-tab="panel-2">Tab 2</button>
        <button type="button" class="btn" data-tab="panel-3">Tab 3</button>
    </div>
</div>

```html
<div class="flex-row-fluid col-gaps-xs align-cols-center js-tab-nav" data-active-class="btn-primary">
    <button type="button" class="btn active btn-primary" data-tab="panel-1">Tab 1</button>
    <button type="button" class="btn" data-tab="panel-2">Tab 2</button>
    <button type="button" class="btn" data-tab="panel-3">Tab 3</button>
</div>
```

#### Chips

Here's another example using Frontbx `.chip` components:

<div class="fbx-snippet-demo">
    <ul class="list-inline js-tab-nav" data-active-class="selected">
        <li>
            <button type="button" class="btn btn-chip selected" data-tab="panel-1">
                <span class="chip-text">Tab 1</span>
            </button>
        </li>
        <li>
            <button type="button" class="btn btn-chip" data-tab="panel-2">
                <span class="chip-text">Tab 2</span>
            </button>
        </li>
        <li>
            <button type="button" class="btn btn-chip" data-tab="panel-3">
                <span class="chip-text">Tab 3</span>
            </button>
        </li>
    </ul>
</div>

```html
<ul class="list-inline js-tab-nav">
    <li>
        <span class="chip active" data-tab="panel-1">
            <span class="chip-text">Tab 1</span>
        </span>
    </li>
    <li>
        <span class="chip" data-tab="panel-2">
            <span class="chip-text">Tab 2</span>
        </span>
    </li>
    <li>
        <span class="chip" data-tab="panel-3">
            <span class="chip-text">Tab 3</span>
        </span>
    </li>
</ul>
```



