# Installation

Learn how to use FrontBx's included `npm` scripts to compile source code, and more.

---
*	[Using npm scripts](#using-npm-scripts)
*	[Sass](#sass)
*	[JavaScript](#javascript)

---

FrontBx uses `npm` scripts for its build system. The `package.json` file includes convenient methods for working with the framework, including compiling code, building documentation and more.

To use the build system and run the documentation locally, you'll need a copy of FrontBx's source files and `Node`. Follow the steps below to get started:

1.	Download and install [Node.js](https://nodejs.org/en).
2.	Either download [FrontBx's sources](../download/index,html) or fork [FrontBx's git repository](https://github.com/frontbx/ui).
3.	Navigate to the root directory and run `npm install` to install local dependencies listed in `package.json`.
4.	When completed, you'll be able to run the various commands provided from the command line.

---

### Using npm scripts

The `package.json` file includes numerous tasks for developing a project. Run `npm run` to see all the npm scripts in your terminal. Primary tasks include:

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

FrontBx uses [Sass](https://sass-lang.com/) for compiling Sass source files into CSS files (included in the build process). There are three access points you will want to use:

*	`scss/frontbx.scss` - Standalone FrontBx Sass ready to build without the icons.
*	`scss/frontbx.bundle.scss` - FrontBx Sass ready to build with the icons.
*	`scss/_variables.scss` - FrontBx Sass variables and configuration - no output.

```scss
@import '~frontbx/scss/frontbx.bundle';
```

```scss
@import '~frontbx/scss/variables';
```

Alternatively, you can use FrontBx's ready-to-use CSS by simply adding this line to your project's entry point:

```JavaScript
import 'frontbx/dist/css/frontbx.bundle.min.css';
```

##### Icons

FrontBx uses [FontAwesome](https://fontawesome.com/) for icons which are included in `frontbx.bundle.min.css`. However However if you prefer to have them loaded separately or don't need them, you can use `frontbx.min.css` which excludes icons and `frontbx-icons.min.css` which is the standalone icon CSS.

```html
<link href="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/css/frontbx.min.css" rel="stylesheet" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/gh/frontbx/ui@0.1.0/dist/css/frontbx-icons.min.css" rel="stylesheet" crossorigin="anonymous">
```

Additionally, icons be configured to be loaded locally (hosted on your own server) **OR** externally via a jsdelivr. By default, icons are set to be hosted locally and are stored in the `dist/fonts` directory. If you want to load them externally you can change this configuration in `src/scss/_config.scss` and run `npm run dist` or when running your own webpack build.

```scss
$local-icons: 'true' !default;
$icons-url:   '../fonts/' !default;
```

```scss
@import "~frontbx/scss/frontbx.bundle";

$local-icons: 'true';
$icons-url:   '/path-to-fonts/';
```


---

### JavaScript

Import FrontBx's JavaScript by adding this line to your app’s entry point (usually `index.js` or `app.js`):

```JavaScript
import frontbx from 'frontbx';
```

> FrontBx does not currently offer importing components individually, however this is roadmapped for future releases.

