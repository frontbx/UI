# Introduction

Frontbx is a fast, dependency-free UI framework built with Sass, CSS and JavaScript.

---

*   [Welcome](#welcome)
*   [Quickstart](#quickstart)
    *   [CSS](#css)
      *   [Icons](#icons)
    *   [JavaScript](#javascript)
        *   [Bundle](#bundle)
        *   [Lazyload](#lazyload)
*   [Boilerplate](#boilerplate)
*   [Next Steps](#next-steps)

---

### Welcome

Frontbx is a modular `CSS` and `JavaScript` front-end framework built with `Sass` and vanilla `JavaScript`. Frontbx is designed to be used as core UI framework for any sized project from a tiny landing page to a giant web app.

One of the main purposes of Frontbx is to save you time while building beautiful web pages with ease. Frontbx is a medium to large front-end framework and has pretty much everything you will need to kick-start your next project.

If you are new to Frontbx, it's recommended you read this documentation from start to finish. It's also highly advisable to spend some time reading through the [Customization documentation](../../customize/sass/index.html) as well as the [JavaScript documentation](../../javascript/container/index.html) section to understand the framework architecture and how to use it on a broad level.

---

### Quickstart

Frontbx comes ready to go straight out of the box. If you're not wanting to run your own build, you can get started with the production-ready CSS and JavaScript files.

If you're using a package manager or wanting to start a custom build - [Head to the Downloads page](../download/index.html).

#### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load Frontbx's CSS.

```html
<link href="https://cdn.jsdelivr.net/gh/frontbx/ui@0.0.1/dist/css/frontbx-bundle.cdn.min.css" rel="stylesheet" crossorigin="anonymous">
```

##### Icons

Frontbx uses [FontAwesome](https://fontawesome.com/) for icons which are included in `frontbx-bundle.cdn.min.css`. if you prefer to have them loaded separately or don't need them, you can use `frontbx.min.css` which excludes icons and FontAwesome via JSDeliver which hosts the standalone icon CSS hosted externally.

```html
<!-- Frontbx CSS -->
<link href="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/css/frontbx.cdn.min.css" rel="stylesheet" crossorigin="anonymous">

<!-- FontAwesome CSS -->
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/fontawesome.min.css" rel="stylesheet" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/solid.min.css" rel="stylesheet" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/brands.min.css" rel="stylesheet" crossorigin="anonymous">

```

#### JavaScript

Most Frontbx components require the use of `JavaScript` to function. Frontbx's JS is Component based with an inversion control system to manage it's own dependencies. Place the following `<script>` near the end of your pages, right before the closing `</body>` tag.

##### Bundle

Include all Frontbx JavaScript Components and dependencies with Frontbx's bundled JS.

```html
<script src="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/js/frontbx-bundle.min.js" crossorigin="anonymous"></script>
```

##### Lazyload

Image lazy loading is included in `frontbx-bundle.min.js`, however for best performance, you should include this as a separate script in your document's `<head>`. This allows any lazyloaded images to start loading and rendering immediately - without having to wait for any other page dependencies to load.

For details on lazy loading images - [see the LazyLoad page](../../images/lazyload/index.html).

```html
<script src="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/js/frontbx-lazyload.min.js" crossorigin="anonymous"></script>
```

--- 

### Boilerplate

Below is a simple HTML5 Boilerplate to get up and running quickly with frontbx.

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Frontbx CSS -->
    <link href="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/css/frontbx-bundle.cdn.min.css" rel="stylesheet" crossorigin="anonymous">

    <!-- Frontbx Lazyload JS -->
    <script src="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/js/frontbx-lazyload.min.js" crossorigin="anonymous"></script>

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Frontbx JS Bundle -->
    <script src="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/js/frontbx-bundle.min.js" crossorigin="anonymous"></script>
  </body>
</html>
```

---

### Next Steps

If you're not wanting to create a custom build or do not require access to Frontbx's source, you can jump straight to the [Download Section](../download/index.html) to get started with building on the pre-compiled Frontbx assets.

Otherwise, head over the the [Installation Page](../installation/index.html) to get started on getting Frontbx installed.
