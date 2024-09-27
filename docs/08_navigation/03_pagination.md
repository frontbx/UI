# Pagination

Provide pagination links for your site or app with the multi-page pagination component.

---

*   [Markup](#markup)
*   [Variants](#variants)
*   [States](#states)
*   [CSS Customization](#css-customization)

---

### Markup

This simple pagination layout is great for apps and search results. The large block is hard to miss, easily scalable, and provides large click areas.

<div class="fbx-snippet-demo">
    <div class="container-fuid"> 
        <nav>
            <ul class="pagination">
                <li class="disabled"><span>«</span></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="elips"><span>...</span></li>
                <li><a href="#">22</a></li>
                <li><a href="#">23</a></li>
                <li><a href="#"><span>»</span></a></li>
            </ul>
        </nav>
    </div>
</div>

```html
<nav>
    <ul class="pagination">
        <li class="disabled"><span>«</span></li>
        <li class="active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="elips"><span>...</span></li>
        <li><a href="#">22</a></li>
        <li><a href="#">23</a></li>
        <li><a href="#"><span>»</span></a></li>
    </ul>
</nav>
```

---

### Variants

The pagination component can be easily styled a few different ways by simply adding an extra class. Use the `.pagination-btns` class to style them as individual buttons or the `.pagination-borderless` for a text-only style.

<div class="fbx-snippet-demo">
    <div class="container-fuid"> 
        <nav>
            <ul class="pagination pagination-btns">
                <li class="disabled"><span>«</span></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="elips"><span>...</span></li>
                <li><a href="#">22</a></li>
                <li><a href="#">23</a></li>
                <li><a href="#"><span>»</span></a></li>
            </ul>
        </nav>
        <nav>
            <ul class="pagination pagination-borderless">
                <li class="disabled"><span>«</span></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="elips"><span>...</span></li>
                <li><a href="#">22</a></li>
                <li><a href="#">23</a></li>
                <li><a href="#"><span>»</span></a></li>
            </ul>
        </nav>
    </div>
</div>

```html
<nav>
    <ul class="pagination pagination-btns">
        ...
    </ul>
</nav>
    
<nav>
    <ul class="pagination pagination-borderless">
        ...
    </ul>
</nav>
```
---

#### States

Link states are customizable for different circumstances. Use `.disabled` for un-clickable links, `.active` to indicate the current page and `.elips` to indicate a number of pages have been skipped.

<div class="fbx-snippet-demo">
    <div class="container-fuid"> 
        <nav>
            <ul class="pagination">
                <li class="disabled"><span>«</span></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="elips"><span>...</span></li>
                <li><a href="#">22</a></li>
                <li><a href="#">23</a></li>
                <li><a href="#"><span>»</span></a></li>
            </ul>
        </nav>
    </div>
</div>

```html
<nav>
    <ul class="pagination">
        <li class="disabled"><span>«</span></li>
        <li class="active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="elips"><span>...</span></li>
        <li><a href="#">22</a></li>
        <li><a href="#">23</a></li>
        <li><a href="#"><span>»</span></a></li>
    </ul>
</nav>
```

---

### CSS Customization

Pagination uses a combination of both root and local CSS variables on `.pagination` for enhanced component customization and styling across a range of components.

Customization via Sass can be made in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$pagination-radius:             var(--fbx-border-radius) !default;
$pagination-color:              var(--fbx-gray) !default;
$pagination-link-pad-x:         16px !default;
$pagination-link-pad-y:         9px !default;
$pagination-border-color:       var(--fbx-gray-300) !default;
$pagination-hover-color:        var(--fbx-gray) !default;
$pagination-hover-bg:           var(--fbx-theme-primary-200) !default;
$pagination-active-color:       var(--fbx-white) !default;
$pagination-active-bg:          var(--fbx-theme-primary) !default;
```

```css
.pagination {
    --fbx-pagination-radius: var(--fbx-border-radius);
    --fbx-pagination-link-pad-x: 16px;
    --fbx-pagination-link-pad-y: 9px;
    --fbx-pagination-color: var(--fbx-gray);
    --fbx-pagination-hover-color: var(--fbx-gray);
    --fbx-pagination-hover-bg: var(--fbx-theme-primary-200);
    --fbx-pagination-border-color: var(--fbx-gray-300);
    --fbx-pagination-active-color: var(--fbx-white);
    --fbx-pagination-active-bg: var(--fbx-theme-primary);
}
```
