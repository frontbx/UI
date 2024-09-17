# Sass

Learn how FrontBx's Sass is structured when running your own FrontBx build.

----

*	[Introduction](#introduction)
*	[Sass variables](#sass-variables)
*	[CSS variables](#css-variables)

----

### Introduction


FrontBx's Sass configuration can be found in the `scss/_config.scss` and `scss/_config-dark.scss` files - with the latter being configuration for **Dark Mode**.

The `scss/_config.scss` file houses all the primary Sass variables for everything from setting theme colors to styling individual components.

When FrontBx's CSS is compiled, `_config.scss` is one of the first files imported. From there all CSS `:root` variables are generated in `scss/src/base/_root.scss`.

For individual components, the Sass variables are assigned to CSS variables which sets the default or contextual styling for a given component.

Here is a very basic example of how that works:

```file-path
src/scss/_config.scss
```
```sass
$body-bg: #1d1d1d !default;
```

```file-path
scss/src/base/_root.scss
```
```sass
:root
{
	--fbx-body-bg: #{$body-bg};
}
```

```file-path
scss/src/base/_base.scss
```
```sass
html, body
{
    background-color: var(--fbx-body-bg);
}
```

#### Sass Variables

Every Sass variable in FrontBx includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying FrontBx's source code. To setup this up simply, create your own Sass stylesheet with your variables, then import Frontbx and compile:

```sass
$body-bg: #1d1d1d;

@import "../node_modules/frontbx/scss/frontbx";
```

In cases where you need access to Sass variables without before Frontbx compiles, you can import Frontbx variables through the `scss/src/_variables.scss` file:


```sass
@import "../node_modules/frontbx/scss/src/variables";

$my-color: $body-bg;
```

---


#### CSS Variables

When Sass is compiled into CSS, Frontbx assigns global CSS variables to `:root`. For individual components, CSS variables are assigned locally to their selector.

Sometime local CSS variables will reference a global variable. This allows a single global variable on `:root` to adjust styling across multiple components.

```css
/* Applied globally to root  */
:root
{
	--fbx-base-font-size: 1.6rem;
}

/* Applied locally to selector  */
.text
{
	font-size: var(--fbx-base-font-size);
}
```

Other times, local CSS variables on a selector are explicit, and can be changed by either overwritting them - or applying a modifier class which has a variable override.

This design pattern allows a high level of customization directly from CSS without the need to run your own build process.

Here is a very simple example of change the background color of a [Paper component](../../surfaces/paper/index.html) - one of Frontbx's most basic components.

<div class="code-content-example paper-example">
	<style scoped>
	.custom-paper, .fbx-darkmode .custom-paper
	{
	    --fbx-paper-bg: #7de3b5;
	    --fbx-paper-radius: 10px;
	}
	</style>
   	<div class="flex-row col-gaps-sm row-gaps-sm align-cols-center pole-sm ">
		<div class="paper paper-rounded raised-1 col col-3 custom-paper"></div>
    </div>
</div>


```html
<div class="paper custom-paper"></div>
```

```css
.custom-paper, .fbx-darkmode .custom-paper
{
    --fbx-paper-bg: green;
    --fbx-paper-radius: 10px;
}
```




