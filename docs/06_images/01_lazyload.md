# Lazyload

Frontbx's handy Lazyload utility lets you gracefully load images asynchronously while the DOM renders, providing not only faster page load speeds but an aesthetically pleasing image loading experience for the user.

---

*   [Setup](#setup)
*   [Markup](#markup)
*   [Background image](#background-image)
*   [Fallback](#fallback)
*   [Dynamic Content](#dynamic-content)
*   [CSS Customization](#css-customization)

---

### Setup

Lazyloading is built into `frontbx.min.js` and `frontbx.bundle.min.js`, however for best performance, `frontbx-lazyload.min.js` should be added into the document `<head>` - preferably as high up as possible.

```html
<!doctype html>
<html lang="en">
    <head>
        <script src="frontbx-lazyload.min.js"></script>
    </head>
    <body>
        ...
    </body>
</html>
```

---

### Markup

Once your JS is setup, add your images, you'll want to have a reduced size thumbnail version of your image set as the `src` and the full size as the image `data-src`. Remember to add the `.js-lazyload` `.lazyload` classes.

<div class="fbx-snippet-demo js-lazy-demo">
    <div class="flex-row-fluid align-cols-center">
        <div class="avatar avatar-xl">
            <img alt="Trump" data-src="../../assets/img/trump-avatar.jpg" class="img-responsive lazyload js-lazy-demo-img" src="../../assets/img/trump-avatar_thumb.jpg" />
        </div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button class="btn js-lazy-demo-trigger">Load image</button>
    </div>
</div>

```html
<div class="avatar avatar-xl">
    <img alt="Trump" data-src="trump-hero.jpg" class="js-lazyload lazyload" src="trump-hero_thumb.jpg" />
</div>
```

Add the optional `.grayscale` class to have the image fade from grayscale to full color.

<div class="fbx-snippet-demo js-lazy-demo">
    <div class="flex-row-fluid align-cols-center">
        <div class="avatar avatar-xl">
            <img alt="Trump" data-src="../../assets/img/trump-avatar.jpg" class="img-responsive lazyload grayscale js-lazy-demo-img" src="../../assets/img/trump-avatar_thumb.jpg" />
        </div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button class="btn js-lazy-demo-trigger">Load image</button>
    </div>
</div>

```html
<div class="avatar avatar-xl">
    <img alt="Trump" data-src="trump-hero.jpg" class="js-lazyload lazyload grayscale" src="trump-hero_thumb.jpg" />
</div>
```

---

### Background image

Lazyloading works on CSS background image elements too. This can be handy when you need an image at a fixed height or covering a background element.

> Frontbx includes a the CSS utility class `.bg-image` to help manage image sizing. For more information checkout the [Images Documentation](../../content/images/index.html).

<div class="fbx-snippet-demo js-lazy-demo">
    <div class="flex-row-fluid align-cols-center">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="bg-image lazyload js-lazy-demo-img raised-1" data-src="../../assets/img/trump-hero.jpg" style="background-image: url(../../assets/img/trump-hero_thumb.jpg)"></div>
        </div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button class="btn js-lazy-demo-trigger">Load image</button>
    </div>
</div>

```html
<div data-src="trump-hero.jpg" class="bg-image js-lazyload lazyload" style="background-image: url(trump-hero_thumb.jpg)"></div>
```

---

### Fallback

Falback images gracefully display a simple icon and background when an image fails to load for whatever reason. The demo below simulates a failed image load:

<div class="fbx-snippet-demo js-lazy-demo">
    <div class="flex-row align-cols-center col-gaps-sm flex-cols-6 flex-cols-md-3">
        <div class="col">
            <div class="ratio-img ratio-1-1">
                <img alt="Trump" data-src="foobar.jpg" class="lazyload js-lazy-demo-img" src="../../assets/img/trump-avatar_thumb.jpg" />
            </div>
        </div>
        <div class="col">
            <div data-src="foobar.jpg" class="bg-image ratio-1-1 lazyload js-lazy-demo-img" style="background-image: url(../../assets/img/trump-avatar_thumb.jpg)"></div>
        </div>
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button class="btn js-lazy-demo-trigger">Load images</button>
    </div>
</div>

```html
<img alt="Trump" data-src="foobar.jpg" class="img-responsive js-lazyload lazyload" src="trump-avatar_thumb.jpg" />

<div data-src="foobar.jpg" class="bg-image image-responsive ratio-1-1 js-lazyload lazyload grayscale" style="background-image: url(trump-avatar_thumb.jpg)"></div>
```

The fallback placeholder can by adjusted globally by setting `window.LAZY_FALLBACK_IMAGE` to `base64` image string of your choosing prior to lazy-loading. The background color and sizing can also be adjusted with CSS Variables:

```html
<!doctype html>
<html lang="en">
    <head>
        <script>window.LAZY_FALLBACK_IMAGE = 'data:image/svg+xml;base64...';</script>
        <script src="frontbx-lazyload.min.js"></script>
    </head>
    <body>
        ...
    </body>
</html>
```

```css
.lazyload.failed
{
    --fbx-lazyload-falback-bg: #000000;
    --fbx-lazyload-falback-size: 30%;
    --fbx-lazyload-falback-padding: 30%;
}
```

---

### Dynamic content

When inserting elements into the DOM after the page has loaded, for example using dynamic content via `Ajax`, you can refresh the `LazyLoad` module via the Frontbx's `dom`.

<div class="fbx-snippet-demo">
    <div class="flex-row-fluid align-cols-center col-gaps-xs js-refresh-lazyload-container">
    </div>
    <div class="flex-row-fluid align-cols-center pole-sm pole-n">
        <button class="btn js-refresh-lazyload-btn">Insert Image</button>
    </div>
</div>

```javascript
frontbx.dom().refresh('LazyLoad', wrapper);
```

---

### CSS Customization

Lazyloading uses a combination of both local CSS and Sass variables for enhanced component customization and styling across a range of components.

The CSS variables are set via Sass variables so customization pre-compilation is still possible.

Default values are set in the `scss/_config.scss` file in Frontbx's source.

```file-path
scss/_config.scss
```

```scss
$lazyload-start-opacity:        0.6 !default;
$lazyload-end-opacity:          1 !default;
$lazyload-start-blur:           5px !default;
$lazyload-end-blur:             0px !default;
$lazyload-start-grayscale:      1 !default;
$lazyload-end-grayscale:        0 !default;
$lazyload-transition:           opacity 1s cubic-bezier(0.4, 0.0, 0.2, 1), filter 1s cubic-bezier(0.4, 0.0, 0.2, 1);
$lazyload-falback-bg:           #d0d4d9;
```

```css
.lazyload
{
    --fbx-lazyload-start-opacity: 0.6;
    --fbx-lazyload-end-opacity: 1;
    --fbx-lazyload-start-blur: 5px;
    --fbx-lazyload-end-blur: 0px;
    --fbx-lazyload-start-grayscale: 1;
    --fbx-lazyload-end-grayscale: 0;
    --fbx-lazyload-transition: opacity 1s cubic-bezier(0.4, 0.0, 0.2, 1), filter 1s cubic-bezier(0.4, 0.0, 0.2, 1);
    --fbx-lazyload-falback-bg: #d0d4d9;

}
```
