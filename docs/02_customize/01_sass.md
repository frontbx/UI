# Sass

Use FrontBx's Sass source files to customize your own build prior to compiling into CSS.

FrontBx's Sass configuration can be found in the `scss/_config.scss` and `scss/_config-dark.scss` files - with the latter being configuration for **Dark Mode**.

The `scss/_config.scss` houses all the primary Sass variables for everything from setting theme colors to styling individual components. When FrontBx's CSS is compiled, `_config.scss` is one of the first files imported. From there all CSS `:root` variables are generated in `scss/src/base/_root.scss`. For individual components, the Sass variables are assigned to CSS variables which sets the default styling.

Every Sass variable in FrontBx includes the `!default` flag allowing you to override the variable’s default value in your own Sass without modifying FrontBx's source code. To setup this up simply, create your own Sass stylesheet with your variables, then import FrontBX and compile:

```sass
$body-bg: #1d1d1d;

@import "../node_modules/frontbx/scss/frontbx";
```