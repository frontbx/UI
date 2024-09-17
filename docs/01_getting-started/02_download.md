# Download

Download FrontBox to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems or Composer.

---

*	[Compiled CSS and JS](#compiled-css-and-js)
*	[Source files](#source-files)
*	[npm](#cdn-via-jsdelivr)


---

### Compiled CSS and JS

Download ready-to-use compiled assets for FrontBx to easily drop into your project.

<a target="blank" href="https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Ffrontbx%2Fui%2Ftree%2Fmain%2Fdist" class="btn btn-primary">Download</a>

---

### Source files

Compile FrontBx with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling.


<a href="https://github.com/frontbx/ui/archive/refs/heads/main.zip" target="_blank" class="btn btn-primary">Download Source</a>

---

### npm


Pull in Frontbx’s source files into nearly any project with some of the most popular package managers. No matter the package manager, Frontbx will require a Sass compiler and Autoprefixer for a setup that matches our official compiled versions.

```bash
npm install frontbx
```

const frontbx = require('frontbx') or import frontbx from 'frontbx' will load all of Frontbx’s plugins onto a frontbx object. The frontbx module itself exports all of our plugins. You can manually load Frontbx’s plugins individually by loading the /js/dist/*.js files under the package’s top-level directory.
