# Contents

Learn what's included in Frontbx including production-ready compiled assets as well as source files

---

*	[Compiled Frontbx](#overview)
	*	[CSS](#css)
	*	[JavaScript](#javascript)
*	[Source files]

---

### Compiled Frontbx

Now that you have a Frontbx project ready to go, you'll see something like this:

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

The dist folder contains compiled the compiled production-ready assets for quick drop-in usage in nearly any web project. You'll find a number of different files in these folders which are outlined below:

##### CSS

| Files                                                    | Description                                                        |
|----------------------------------------------------------|--------------------------------------------------------------------|
| `frontbx.css`<br>`frontbx.min.css`                       | Standalone compiled Frontbx without the icons.                     |
| `frontbx-bundle.css`<br>`frontbx-bundle.min.css`         | Compiled Frontbx bundled with FontAwesome icons.                   |
| `frontbx-bundle.cdn.css`<br>`frontbx-bundle.cdn.min.css` | Compiled Frontbx bundled with FontAwesome icons hosted externally. |
| `frontbx-icons.css`<br>`frontbx-icons.min.css`           | Standalone compiled FontAwesome icons.                             |
| `frontbx-grid.css`<br>`frontbx-grid.min.css`             | Standalone compiled Frontbx grid only.                             |


##### JavaScript

| Files                                              | Description                     |
|----------------------------------------------------|---------------------------------|
| `frontbx.js`<br>`frontbx.min.js`                   | Compiled standalone JS.         |
| `frontbx-bundle.js`<br>`frontbx-bundle.min.js`     | Compiled Frontbx UMD ready JS.  |
| `frontbx-lazyload.js`<br>`frontbx-lazyload.min.js` | Standalone Frontbx lazyload JS. |
| `frontbx.esm.js`<br>`frontbx.esm.min.js`           | Compiled Frontbx ESM ready JS.  |

---

### Source files

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
