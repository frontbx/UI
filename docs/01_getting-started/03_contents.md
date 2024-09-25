# Contents

Learn what's included in Frontbx including production-ready compiled assets as well as source files

---

*	[Compiled Frontbx](#overview)
	*	[CSS](#css)
	*	[JavaScript](#javascript)
*	[Source files](#source-files)
*	[Next steps](#next-steps)

---

### Compiled Frontbx

Now that you have a Frontbx project ready to go, you'll see something similar to the tree below. The dist folder contains the compiled production-ready assets for quick drop-in usage. You'll find a number of different files in these folders which are outlined below.

```
frontbx
│ 
└── dist
	│ 
	├── css
	│
	│── js
	│ 	 
	└──fonts
```

##### CSS

Compiled versions of FrontBx's CSS are found in the `dist/css` folder. The table below outlines each file and it's usage.

| Files                                                    | Description                                                        |
|----------------------------------------------------------|--------------------------------------------------------------------|
| `frontbx.css`<br>`frontbx.min.css`                       | Standalone compiled Frontbx without the icons.                     |
| `frontbx-bundle.css`<br>`frontbx-bundle.min.css`         | Compiled Frontbx bundled with FontAwesome icons.                   |
| `frontbx-bundle.cdn.css`<br>`frontbx-bundle.cdn.min.css` | Compiled Frontbx bundled with FontAwesome icons hosted externally. |
| `frontbx-icons.css`<br>`frontbx-icons.min.css`           | Standalone compiled FontAwesome icons.                             |
| `frontbx-grid.css`<br>`frontbx-grid.min.css`             | Standalone compiled Frontbx grid only.                             |


##### JavaScript

Compiled versions of FrontBx's JS are found in the `dist/js` folder. The table below outlines each file and it's usage.

| Files                                              | Description                     |
|----------------------------------------------------|---------------------------------|
| `frontbx.js`<br>`frontbx.min.js`                   | Compiled standalone JS.         |
| `frontbx-bundle.js`<br>`frontbx-bundle.min.js`     | Compiled Frontbx UMD ready JS.  |
| `frontbx-lazyload.js`<br>`frontbx-lazyload.min.js` | Standalone Frontbx lazyload JS. |
| `frontbx.esm.js`<br>`frontbx.esm.min.js`           | Compiled Frontbx ESM ready JS.  |

---

### Source files

Frontbx's source files are located in a number of different folders as outlined in the tree structure below. The table below this outlines what each directory is used for.

```
frontbx
│ 
├── build  (Dev scripts for compiling)
│ 
├── dist   (Compiled distribution assets)
│ 
├── docs   (Markdown source files for documentation)
│ 
├── js     (Source JavaScript files)
│ 
├── scss   (Source Scss files)
│ 	 
└── site   (Built documentation site)
```

| Directory | Description                             |
|-----------|-----------------------------------------|
| `build`   | Dev scripts for compiling               |
| `dist`    | Compiled distribution assets            |
| `docs`    | Markdown source files for documentation |
| `js`      | Source JavaScript files                 |
| `scss`    | Source Scss files                       |
| `site`    | Built documentation site                |

---

### Next steps

Now that you're familiar with Frontbx's file structure, head over to [Installation Page](../installation/index.html) and start your install.

