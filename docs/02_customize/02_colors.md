# Colors

Frontbx provides an extensive CSS color system for enhanced styling, component customization and beyond.

---

*	[Theme colors](#theme-colors)
	* [Usage](#theme-usage)
*	[Grays](#grays)
	* [Usage](#gray-usage)
*	[Color Palette](#color-palette)
	* [Playground](#playground)
	* [Palette](#palette-colors)
	* [Usage](#palette-usage)
* [Sass](#sass)
	* [theme-colors](#theme-colors)
	* [Palette](#palette)
	* [Shades](#shades)
	
---

Frontbx's color system is built using a combination of both CSS variables, Sass variables and Sass functions. 


### Theme colors

Theme colors are used for contextual styling on most Frontbx components and set the foundation for a theme's color styling.

Theme colors are available in both CSS and Sass variables. When using the Sass variable, this will always point to the CSS variable - which is assigned to the actual color in `scss/src/base/_root.scss`. The table below outlines the core theme colors:

| Swatch                                        | CSS Variable             | Sass Variable       | Description                                                |
|:---------------------------------------------:|--------------------------|---------------------|------------------------------------------------------------|
| <div class="docs-swatch bg-body-bg"></div>    | `--fbx-body-bg`          | `$body-bg`          | Body background color.                                     |
| <div class="docs-swatch" style="background-color: var(--fbx-body-color)"></div> | `--fbx-body-color`       | `$body-color`       | Body `color`                                               |
| <div class="docs-swatch bg-white"></div>      | `--fbx-white`            | `$white`            | Global `white` definition.                                 |
| <div class="docs-swatch bg-black"></div>      | `--fbx-black`            | `$black`            | Global `black` definition.                                 |
| <div class="docs-swatch bg-gray"></div>       | `--fbx-gray`             | `$gray`             | Global `gray` definition.                                  |
| <div class="docs-swatch bg-primary"></div>    | `--fbx-theme-primary`    | `$theme-primary`    | Global `theme-primary` definition.                         |
| <div class="docs-swatch bg-secondary"></div>  | `--fbx-theme-secondary`  | `$theme-secondary`  | Global `theme-secondary` definition.                       |
| <div class="docs-swatch bg-success"></div>    | `--fbx-theme-success`    | `$theme-success`    | Global `theme-success` definition.                         |
| <div class="docs-swatch bg-info"></div>       | `--fbx-theme-info`       | `$theme-info`       | Global `theme-info` definition.                            |
| <div class="docs-swatch bg-warning"></div>    | `--fbx-theme-warning`    | `$theme-warning`    | Global `theme-warning` definition.                         |
| <div class="docs-swatch bg-danger"></div>     | `--fbx-theme-danger`     | `$theme-danger`     | Global `theme-danger` definition.                          |

#### Usage<a id='theme-usage'></a>

All theme colors are available via Frontbx's utility [helper classes](../../css/css-helpers/index.html) as `.bg-[name]` and `color-[name]` without the word `theme` (e.g. `bg-primary` or `color-success`).

<div class="code-content-example">
	<div class="flex-row align-cols-center">
	    <div class="paper paper-rounded raised-1 col col-5 col-lg-3 bg-primary pad-40 text-center">
	    	<p class="color-white text-bolder no-margin">Hello World!</p>
	    </div>
	</div>
</div>

```html
<div class="paper paper-rounded raised-1 bg-primary color-white">
	<p class="text-bolder no-margin">Hello World!</p>
</div>
```

When using any of the theme colors pre-compilation with Sass - the Sass variable will output a reference to the CSS Variable:

```scss
.my-element
{
	// color: var(--fbx-theme-primary)
	color: $theme-primary;
}
```

--- 

### Grays

Grays are available in shades ranging from `100` (lightest) through `900` (darkest) with the default `$gray` variable sits in between `400` and `500`. Grays are available CSS variables `--fbx-gray-[num]`. The table below outlines the core color palette used by Frontbx:

| Swatch                                      | CSS Variable    |
|:-------------------------------------------:|-----------------|
| <div class="docs-swatch bg-gray-100"></div> | `--fbx-gray-100` |
| <div class="docs-swatch bg-gray-200"></div> | `--fbx-gray-200` |
| <div class="docs-swatch bg-gray-300"></div> | `--fbx-gray-300` |
| <div class="docs-swatch bg-gray-400"></div> | `--fbx-gray-400` |
| <div class="docs-swatch bg-gray-500"></div> | `--fbx-gray-500` |
| <div class="docs-swatch bg-gray-600"></div> | `--fbx-gray-600` |
| <div class="docs-swatch bg-gray-700"></div> | `--fbx-gray-700` |
| <div class="docs-swatch bg-gray-800"></div> | `--fbx-gray-800` |
| <div class="docs-swatch bg-gray-900"></div> | `--fbx-gray-900` |


#### Usage<a id='gray-usage'></a>

All gray shades are available via Frontbx's utility [helper classes](../../css/css-helpers/index.html) as `.bg-gray-[num]` and `color-gray-[num]`

<div class="code-content-example">
	<div class="flex-row align-cols-center">
	    <div class="paper paper-rounded raised-1 col col-5 col-lg-3 bg-gray-800 pad-40 text-center">
	    	<p class="color-white text-bolder no-margin">Hello World!</p>
	    </div>
	</div>
</div>

```html
<div class="paper paper-rounded raised-1 col col-3 bg-gray-800 pad-20 text-center">
	<p class="color-white text-bolder no-margin">Hello World!</p>
</div>
```

---

### Color Palette

Frontbx comes with a palette of colors via both CSS ans Sass variables for changing theme colors, customizing components or building out custom UI.


#### Playground

Use the playground below to adjust the documentation colors:

<div class="code-content-example js-docs-playground-swatches">
	<div class="docs-playground-swatches">
		<div class="flex-row-fluid">
			<div class="col-12 pole-xs pole-s">Flat colors:</div>
			<div class="docs-swatch" style="background: var(--fbx-color-teal)" data-swatch="var(--fbx-color-teal)"><span>teal</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-turquoise)" data-swatch="var(--fbx-color-turquoise)"><span>turquoise</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-greensea)" data-swatch="var(--fbx-color-greensea)"><span>greensea</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-emerland)" data-swatch="var(--fbx-color-emerland)"><span>emerland</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-nephritis)" data-swatch="var(--fbx-color-nephritis)"><span>nephritis</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-babyblue)" data-swatch="var(--fbx-color-babyblue)"><span>babyblue</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-peterrive)" data-swatch="var(--fbx-color-peterrive)"><span>peterrive</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-belizehol)" data-swatch="var(--fbx-color-belizehol)"><span>belizehol</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-amethyst)" data-swatch="var(--fbx-color-amethyst)"><span>amethyst</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-wisteria)" data-swatch="var(--fbx-color-wisteria)"><span>wisteria</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-wetasphalt)" data-swatch="var(--fbx-color-wetasphalt)"><span>wetasphalt</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-midnightblue)" data-swatch="var(--fbx-color-midnightblue)"><span>midnightblue</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-sunflower)" data-swatch="var(--fbx-color-sunflower)"><span>sunflower</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-orange)" data-swatch="var(--fbx-color-orange)"><span>orange</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-carrot)" data-swatch="var(--fbx-color-carrot)"><span>carrot</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-salmon)" data-swatch="var(--fbx-color-salmon)"><span>salmon</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pumpkin)" data-swatch="var(--fbx-color-pumpkin)"><span>pumpkin</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-alizarin)" data-swatch="var(--fbx-color-alizarin)"><span>alizarin</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pomegranate)" data-swatch="var(--fbx-color-pomegranate)"><span>pomegranate</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-clouds)" data-swatch="var(--fbx-color-clouds)"><span>clouds</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-silver)" data-swatch="var(--fbx-color-silver)"><span>silver</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-concrete)" data-swatch="var(--fbx-color-concrete)"><span>concrete</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-asbestos)" data-swatch="var(--fbx-color-asbestos)"><span>asbestos</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-ash)" data-swatch="var(--fbx-color-ash)"><span>ash</span></div>
			<div class="col-12 pole-xs">Neon colors:</div>
			<div class="docs-swatch" style="background: var(--fbx-color-neongreen)" data-swatch="var(--fbx-color-neongreen)"><span>neongreen</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-skyblue)" data-swatch="var(--fbx-color-skyblue)"><span>skyblue</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-beetroot)" data-swatch="var(--fbx-color-beetroot)"><span>beetroot</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-hotpink)" data-swatch="var(--fbx-color-hotpink)"><span>hotpink</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pineapple)" data-swatch="var(--fbx-color-pineapple)"><span>pineapple</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-coralred)" data-swatch="var(--fbx-color-coralred)"><span>coralred</span></div>
			<div class="col-12 pole-xs">Pastel colors:</div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelteal)" data-swatch="var(--fbx-color-pastelteal)"><span>pastelteal</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelgreen)" data-swatch="var(--fbx-color-pastelgreen)"><span>pastelgreen</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelblue)" data-swatch="var(--fbx-color-pastelblue)"><span>pastelblue</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelpurple)" data-swatch="var(--fbx-color-pastelpurple)"><span>pastelpurple</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelpink)" data-swatch="var(--fbx-color-pastelpink)"><span>pastelpink</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelred)" data-swatch="var(--fbx-color-pastelred)"><span>pastelred</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelcoral)" data-swatch="var(--fbx-color-pastelcoral)"><span>pastelcoral</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelorange)" data-swatch="var(--fbx-color-pastelorange)"><span>pastelorange</span></div>
			<div class="docs-swatch" style="background: var(--fbx-color-pastelyellow)" data-swatch="var(--fbx-color-pastelyellow)"><span>pastelyellow</span></div>
		</div>
	</div>
</div>
<div class="js-docs-playground-code">
	<pre><code class="css language-css"></code></pre>
</div>


#### Palette<a id='palette-colors'></a>

With color palette, the Sass variable will point directly the actual hex color value. The table below outlines theme colors:

| Swatch                                                                            | CSS Variable               | Sass Variable   |
|:---------------------------------------------------------------------------------:|----------------------------|-----------------|
| <div class="docs-swatch" style="background: var(--fbx-color-teal)"></div>         | `--fbx-color-teal`         | `$teal`         |
| <div class="docs-swatch" style="background: var(--fbx-color-turquoise)"></div>    | `--fbx-color-turquoise`    | `$turquoise`    |
| <div class="docs-swatch" style="background: var(--fbx-color-greensea)"></div>     | `--fbx-color-greensea`     | `$greensea`     |
| <div class="docs-swatch" style="background: var(--fbx-color-emerland)"></div>     | `--fbx-color-emerland`     | `$emerland`     |
| <div class="docs-swatch" style="background: var(--fbx-color-nephritis)"></div>    | `--fbx-color-nephritis`    | `$nephritis`    |
| <div class="docs-swatch" style="background: var(--fbx-color-babyblue)"></div>     | `--fbx-color-babyblue`     | `$babyblue`     |
| <div class="docs-swatch" style="background: var(--fbx-color-peterrive)"></div>    | `--fbx-color-peterrive`    | `$peterrive`    |
| <div class="docs-swatch" style="background: var(--fbx-color-belizehol)"></div>    | `--fbx-color-belizehol`    | `$belizehol`    |
| <div class="docs-swatch" style="background: var(--fbx-color-amethyst)"></div>     | `--fbx-color-amethyst`     | `$amethyst`     |
| <div class="docs-swatch" style="background: var(--fbx-color-wisteria)"></div>     | `--fbx-color-wisteria`     | `$wisteria`     |
| <div class="docs-swatch" style="background: var(--fbx-color-wetasphalt)"></div>   | `--fbx-color-wetasphalt`   | `$wetasphalt`   |
| <div class="docs-swatch" style="background: var(--fbx-color-midnightblue)"></div> | `--fbx-color-midnightblue` | `$midnightblue` |
| <div class="docs-swatch" style="background: var(--fbx-color-sunflower)"></div>    | `--fbx-color-sunflower`    | `$sunflower`    |
| <div class="docs-swatch" style="background: var(--fbx-color-orange)"></div>       | `--fbx-color-orange`       | `$orange`       |
| <div class="docs-swatch" style="background: var(--fbx-color-carrot)"></div>       | `--fbx-color-carrot`       | `$carrot`       |
| <div class="docs-swatch" style="background: var(--fbx-color-salmon)"></div>       | `--fbx-color-salmon`       | `$salmon`       |
| <div class="docs-swatch" style="background: var(--fbx-color-pumpkin)"></div>      | `--fbx-color-pumpkin`      | `$pumpkin`      |
| <div class="docs-swatch" style="background: var(--fbx-color-alizarin)"></div>     | `--fbx-color-alizarin`     | `$alizarin`     |
| <div class="docs-swatch" style="background: var(--fbx-color-pomegranate)"></div>  | `--fbx-color-pomegranate`  | `$pomegranate`  |
| <div class="docs-swatch" style="background: var(--fbx-color-clouds)"></div>       | `--fbx-color-clouds`       | `$clouds`       |
| <div class="docs-swatch" style="background: var(--fbx-color-silver)"></div>       | `--fbx-color-silver`       | `$silver`       |
| <div class="docs-swatch" style="background: var(--fbx-color-concrete)"></div>     | `--fbx-color-concrete`     | `$concrete`     |
| <div class="docs-swatch" style="background: var(--fbx-color-asbestos)"></div>     | `--fbx-color-asbestos`     | `$asbestos`     |
| <div class="docs-swatch" style="background: var(--fbx-color-neongreen)"></div>    | `--fbx-color-neongreen`    | `$neongreen`    |
| <div class="docs-swatch" style="background: var(--fbx-color-skyblue)"></div>      | `--fbx-color-skyblue`      | `$skyblue`      |
| <div class="docs-swatch" style="background: var(--fbx-color-beetroot)"></div>     | `--fbx-color-beetroot`     | `$beetroot`     |
| <div class="docs-swatch" style="background: var(--fbx-color-hotpink)"></div>      | `--fbx-color-hotpink`      | `$hotpink`      |
| <div class="docs-swatch" style="background: var(--fbx-color-pineapple)"></div>    | `--fbx-color-pineapple`    | `$pineapple`    |
| <div class="docs-swatch" style="background: var(--fbx-color-coralred)"></div>     | `--fbx-color-coralred`     | `$coralred`     |
| <div class="docs-swatch" style="background: var(--fbx-color-ash)"></div>          | `--fbx-color-ash`          | `$ash`          |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelteal)"></div>   | `--fbx-color-pastelteal`   | `$pastelteal`   |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelgreen)"></div>  | `--fbx-color-pastelgreen`  | `$pastelgreen`  |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelblue)"></div>   | `--fbx-color-pastelblue`   | `$pastelblue`   |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelpurple)"></div> | `--fbx-color-pastelpurple` | `$pastelpurple` |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelpink)"></div>   | `--fbx-color-pastelpink`   | `$pastelpink`   |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelred)"></div>    | `--fbx-color-pastelred`    | `$pastelred`    |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelcoral)"></div>  | `--fbx-color-pastelcoral`  | `$pastelcoral`  |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelorange)"></div> | `--fbx-color-pastelorange` | `$pastelorange` |
| <div class="docs-swatch" style="background: var(--fbx-color-pastelyellow)"></div> | `--fbx-color-pastelyellow` | `$pastelyellow` |


#### Usage<a id='palette-usage'></a>

Palette colors are available through both Sass and CSS Variables. They are not available as a utility classes or palette shades as CSS variables unless defined as a "theme" color pre-complication.

However, they can still be used as CSS variables:

<div class="code-content-example">
	<div class="flex-row align-cols-center">
	    <div class="paper paper-rounded raised-1 col col-5 col-lg-3 pad-40 text-center" style="background: var(--fbx-color-teal)">
	    	<p class="color-white text-bolder no-margin">Hello World!</p>
	    </div>
	</div>
</div>

```html
<div class="paper paper-rounded raised-1 color-white" style="background: var(--fbx-color-teal)">
	<p class="text-bolder no-margin">Hello World!</p>
</div>
```

Setting Frontbx's core theme color via Sass is super simple:

```sass
@import "../node_modules/frontbx/scss/frontbx/src/colors";

$theme-primary: $emerland;

$theme-secondary: $nephritis;
```

Alternatively, you can change a theme by simply changing the CSS variable on `:root`:

```css
:root
{
	--fbx-theme-primary: var(--fbx-color-emerland);
	--fbx-theme-primary-rgb: var(--fbx-color-emerland-rgb);
}
```

Frontbx uses a Sass function for gradients on theme colors to style the odd component, if changing the theme color via CSS you should also update these CSS variables:

```css
:root
{
	--fbx-theme-primary-100: #ffeaf7;
	--fbx-theme-primary-200: #ffd5ee;
	--fbx-theme-primary-300: #ff97d5;
	--fbx-theme-primary-400: #ff77c8;
	--fbx-theme-primary-500: #f22ca2;
	--fbx-theme-primary-600: #cc2588;
	--fbx-theme-primary-700: #bf2380;
	--fbx-theme-primary-800: #b32077;
	--fbx-theme-primary-900: #991c66;
}
```

---

### Sass

All Sass color variable definitions (with the exception of the core "Theme Colors") will point to the the real hex value of a given color (rather than a CSS Variable).

```sass
div {
	// color: ##2ecc71;
	color: $emerland
}

```

#### Theme colors<a id="sass-theme-colors"></a>

Frontbx defines the following variables for use in a theme. Note that theme colors will point to a CSS variable defined in `:root` rather than the hex.

```scss
// Contexts
$theme-primary:                 var(--fbx-color-beetroot)    !default;
$theme-secondary:               var(--fbx-color-salmon)      !default;
$theme-success:                 var(--fbx-color-emerland)    !default;
$theme-info:                    var(--fbx-color-skyblue)     !default;
$theme-warning:                 var(--fbx-color-sunflower)   !default;
$theme-danger:                  var(--fbx-color-coralred)    !default;
```

```scss
.my-element 
{
	// color 
	color: $theme-primary;
}
```

#### Palette

All palette hex colors are available through the following:

```scss
// Prebuilt colors to choose a theme from
// Flat colors
$teal:                          #7de3b5 !default;
$turquoise:                     #1abc9c !default;
$greensea:                      #16a085 !default;
$emerland:                      #2ecc71 !default;
$nephritis:                     #27ae60 !default;
$babyblue:                      #b0e2fe !default;
$peterrive:                     #3498db !default;
$belizehol:                     #2980b9 !default;
$amethyst:                      #9b59b6 !default;
$wisteria:                      #8e44ad !default;
$wetasphalt:                    #34495e !default;
$midnightblue:                  #2c3e50 !default;
$sunflower:                     #f1c40f !default;
$orange:                        #f39c12 !default;
$carrot:                        #e67e22 !default;
$salmon:                        #ed5d81 !default;
$pumpkin:                       #d35400 !default;
$alizarin:                      #e74c3c !default;
$pomegranate:                   #c0392b !default;
$clouds:                        #ecf0f1 !default;
$silver:                        #bdc3c7 !default;
$concrete:                      #95a5a6 !default;
$asbestos:                      #7f8c8d !default;

// Neons
$neongreen:                     #2bf877 !default;
$skyblue:                       #73dcff !default;
$beetroot:                      #c349ff !default;
$hotpink:                       #ff2eaa !default;
$pineapple:                     #fff224 !default;
$coralred:                      #ff3a24 !default;
$ash:                           #838c92 !default;

// Basic colors
$white:                         #FFFFFF !default;
$black:                         #323232 !default;
$gray:                          #9597a0 !default;
```

```scss
.my-element 
{
	background-color: $teal;
}
```

#### Shades

Frontbx uses Sass functions to generate color shades (`100` -> `900`) for all palette colors and assign them as CSS Variables on `:root`. However doing this for all theme colors would obviously create a large amount of unnecessary CSS variables. 

You can also access **Base Color** shades (`100` -> `900`) via Sass variables:

```scss
.my-element
{
	background-color: $teal-100;
}

```
