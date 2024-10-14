/**
 * Docs color theme
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    const [find, in_dom, dom_element, extend] = frontbx.import(['find','in_dom','dom_element','extend']).from('_');

    const ThemeColor = function()
    {
        this._theme = localStorage.getItem('fbx-docs-color-theme') || 'var(--fbx-color-beetroot)';

        this._stylesheet;

        this.super('body');
    }

    ThemeColor.prototype.bind = function()
    {
        this._appendStyles();
    }

    ThemeColor.prototype.undbind = function()
    {
        if (!in_dom(this._stylesheet))
        {
            this._stylesheet.inner_HTML = '';

            this._stylesheet.innerText = '';

            this._stylesheet = false;
        }
    }

    ThemeColor.prototype.theme = function()
    {
        return this._theme;
    }

    ThemeColor.prototype._appendStyles = function()
    {
        let styles = this.styles();

        if (this._stylesheet && this._stylesheet.innerText.trim() === styles) return;

        let style = dom_element({tag: 'style'}, null, styles);

        if (this._stylesheet)
        {
            find('head').replaceChild(style, this._stylesheet);
        }
        else
        {
            find('head').appendChild(style);
        }

        this._stylesheet = style;
    }

    ThemeColor.prototype.styles = function()
    {       
        let shade = this._theme.replace('--fbx-color-', '--fbx-docs-').replace(')', '').replace('var(', '').trim();

        return `:root {
    --fbx-theme-primary: ${this._theme};
    --fbx-theme-primary-rgb: ${this._theme.replace(')', '-rgb)')};
    --fbx-theme-primary-100: var(${shade}-100);
    --fbx-theme-primary-200: var(${shade}-200);
    --fbx-theme-primary-300: var(${shade}-300);
    --fbx-theme-primary-400: var(${shade}-400);
    --fbx-theme-primary-500: var(${shade}-500);
    --fbx-theme-primary-600: var(${shade}-600);
    --fbx-theme-primary-700: var(${shade}-700);
    --fbx-theme-primary-800: var(${shade}-800);
    --fbx-theme-primary-900: var(${shade}-900);
}`.trim();
    }

    ThemeColor.prototype.setTheme = function(theme)
    {
        localStorage.setItem('fbx-docs-color-theme', theme);

        this._theme = theme;

        this._appendStyles();
    }

    frontbx.dom().register('ThemeColor', extend(Component, ThemeColor), true);

}());

/**
 * Docs color playground
 *
 */
(function()
{
	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const [on, off, each, attr, find, add_class, remove_class, extend] = frontbx.import(['on','off', 'each', 'attr','find','add_class','remove_class','extend']).from('_');

	const ColorPlayground = function()
    {        
        this.super('.js-docs-playground-swatches .docs-swatch');
    }

    ColorPlayground.prototype.bind = function(swatch)
    {
    	on(swatch, 'click', this._makeSelection, this);

    	if (!this.mounted)
    	{
    		this.mounted = true;

    		this._codeWrapper = find('.js-docs-playground-code');

    		this._codeEl = find('.js-docs-playground-code code');

    		this._setDefaultSwatch();
    	}
    }

    ColorPlayground.prototype.unbind = function(swatch)
    {
        off(swatch, 'click', this._makeSelection, this);

        this.mounted = false;
    }

    ColorPlayground.prototype._setDefaultSwatch = function()
    {
    	let theme = frontbx.dom().component('ThemeColor');

    	let color = theme.theme();

    	each(this._DOMElements, (i, swatch) =>
    	{
    		if (attr(swatch, 'data-swatch') === color)
    		{
    			add_class(swatch, 'active');

    			this._codeEl.innerHTML = theme.styles();

    			frontbx.dom().refresh('Highlighter', this._codeWrapper);

    			return false;
    		}
    	});
    }

    ColorPlayground.prototype._makeSelection = function(e, swatch)
    {
    	let theme  = frontbx.dom().component('ThemeColor');
        let color  = attr(swatch, 'data-swatch');
    	let active = find('.js-docs-playground-swatches .docs-swatch.active');

    	if (active) remove_class(active, 'active');

    	add_class(swatch, 'active');

    	theme.setTheme(color);

    	this._codeEl.innerText = '';
    			
    	this._codeEl.innerHTML = theme.styles();

    	frontbx.dom().refresh('Highlighter', this._codeWrapper);
    }

    frontbx.dom().register('ColorPlayground', extend(Component, ColorPlayground), true);

}());


