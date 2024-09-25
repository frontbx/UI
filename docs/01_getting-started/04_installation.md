# Installation

Get started installing and running Frontbx source code on custom builds.

---

*	[Overview](#overview)
*	[npm scripts](#npm-scripts)
*	[Sass](#sass)
*	[JavaScript](#javascript)

---

### Overview

Once you have Frontbx's source code downloaded to your project and installed, you can then get started with running your own build. Frontbx uses `npm` scripts for its build system. The `package.json` file includes convenient methods for working with the framework, including compiling code, building documentation and more.

Frontbx uses Sass and JavaScript as well as a number of other utility npm packages to compile into a build.


### npm scripts

The `package.json` file includes a number of tasks for developing a project. Run `npm run` to see all the npm scripts in your terminal. Primary tasks include:

| Task                 | Description                                                                               |
|----------------------|-------------------------------------------------------------------------------------------|
| `npm start`          | Compiles CSS and JavaScript, builds the documentation, and starts a local server.         |
| `npm run watch`      | Watches all JS, and SCSS source files and run build when changes are made.                |
| `npm run dist`       | Creates the dist/ directory with compiled files. Requires Sass, Autoprefixer, and terser. |
| `npm run docs-serve` | Builds and runs the documentation locally.                                                |
| `npm run css`        | Compiles Sass, prefixes, minifies and bundles CSS                                         |
| `npm run js`         | Compiles minifies and bundles JS                                                          |

---

### Sass

Frontbx uses [Sass](https://sass-lang.com/) for compiling Sass source files into CSS files (included in the build process). There are three access points you will want to use:

*	`scss/frontbx.scss` - Standalone Frontbx Sass ready to build without the icons.
*	`scss/frontbx-bundle.scss` - Frontbx Sass ready to build with the icons.
*	`scss/_variables.scss` - Frontbx Sass variables and configuration - no output.

```scss
@import '~frontbx/scss/frontbx-bundle';
```

```scss
@import '~frontbx/scss/variables';
```

Alternatively, you can use Frontbx's ready-to-use CSS by simply adding this line to your project's entry point:

```JavaScript
import 'frontbx/dist/css/frontbx-bundle.min.css';
```

##### Icons

Icons be configured to be loaded locally (hosted on your own server) **OR** externally via a [JsDeliver](https://www.jsdelivr.com/). By default, icons are set to be hosted locally and are stored in the `dist/fonts` directory. If you want to load them externally you can change this configuration in `scss/_config.scss` and run `npm run dist` or when running your own webpack build.

```scss
// Self hosted icons
$local-icons: 'true';
$icons-url:   '../fonts/';
@import "~frontbx/scss/frontbx-bundle";

// Imported using JS deliver
$local-icons: 'false' !default;
@import "~frontbx/scss/frontbx-bundle";
```

---

### JavaScript

Import Frontbx's JavaScript by adding this line to your app’s entry point (usually `index.js` or `app.js`):

```JavaScript
import frontbx from 'frontbx';
```

> Frontbx does not currently offer importing components individually, however this is roadmapped for future releases.

