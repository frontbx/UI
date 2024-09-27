# Paper

Paper serves as a base style for creating your custom content or widgets. Paper is essentially a container-like surface that features the elevation for pulling box-shadow values from the theme.

---

*   [Markup](#basic-example)
*   [CSS Customization](#css-customization)

---

### Markup

Paper is built with as little markup and styles as possible. It's extremely simple to create a paper container using `.paper`.

<div class="fbx-snippet-demo paper-example">
   <div class="flex-row flex-cols-12 flex-cols-md-4 col-gaps-sm row-gaps-sm align-cols-center pole-sm">
        <div class="paper raised-1"></div>
        <div class="paper raised-2"></div>
        <div class="paper raised-3"></div>
    </div>
</div>


```html
<div class="paper paper-rounded raised-1"></div>
<div class="paper paper-rounded raised-2"></div>
<div class="paper paper-rounded raised-3"></div>
```

Paper doesn't have a border radius by default, add the `.paper-rounded` modifier to create rounded corners:

<div class="fbx-snippet-demo paper-example">
   <div class="flex-row flex-cols-12 flex-cols-md-4 col-gaps-sm row-gaps-sm align-cols-center pole-sm">
        <div class="paper raised-1"></div>
        <div class="paper paper-rounded raised-1"></div>
    </div>
</div>


```html
<div class="paper raised-1"></div>
<div class="paper paper-rounded raised-1"></div>
```

Use Frontbx' built in `raised-1` `raised-2` `raised-3` or `flat` modifier classes to give a paper emphasis:

<div class="fbx-snippet-demo paper-example">
   <div class="flex-row flex-cols-12 flex-cols-md-3 col-gaps-sm row-gaps-sm align-cols-center pole-sm">
        <div class="paper paper-rounded flat"></div>
        <div class="paper paper-rounded raised-1"></div>
    </div>
</div>


```html
<div class="paper paper-rounded flat"></div>
<div class="paper paper-rounded raised-1"></div>
```

---


### CSS Customization

Paper use a combination of local CSS variables on `.paper` and Sass variables for enhanced component customization and styling. The base values are used by the UI to create all the sizing. Values for the CSS variables are set via Sass, so pre-compilation customization is still supported too.

Customization via Sass can be made in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$paper-bg:          var(--fbx-white) !default;
$paper-radius:      var(--fbx-border-radius) !default;
$paper-flat-border: var(--fbx-gray-300) !default;
```


```css
.paper
{
    --fbx-paper-bg: var(--fbx-white);
    --fbx-paper-radius: var(--fbx-border-radius);
    --fbx-paper-border-color: var(--fbx-gray-300);
}
    
```
