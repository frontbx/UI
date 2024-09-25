/**
 * Theme switcher
 *
 */
(function()
{
	const [Component] = frontbx.get('Component');

	const [find_all, each, on, off, attr, add_class, remove_class, extend] = frontbx.import(['find_all','each','on','off', 'attr','add_class','remove_class','extend']).from('_');

	const ThemeSwitcher = function()
    {
    	let theme = localStorage.getItem('fbx-docs-base-theme') || 'light';

    	localStorage.setItem('fbx-docs-base-theme', theme);

    	this._setTheme(theme);

        this.super('.js-docs-theme-menu');
    }

    ThemeSwitcher.prototype.bind = function(list)
    {
    	on(list, 'frontbx:menu:selected', this._toggleTheme, this);	
    }

    ThemeSwitcher.prototype.unbind = function(list)
    {
        off(list, 'frontbx:menu:selected', this._toggleTheme, this);	
    }

    ThemeSwitcher.prototype._toggleTheme = function(e)
    {
    	let list = e.detail.DOMElement;

    	let theme = attr(e.detail.item, 'data-theme');

    	this._setTheme(theme);

    	this._theme = theme;

    	localStorage.setItem('fbx-docs-base-theme', theme);
    }

    ThemeSwitcher.prototype._setTheme = function(theme)
    {
    	if (theme === 'dark')
    	{
    		add_class(document.documentElement, 'fbx-darkmode');
    	}
    	else if (theme === 'auto')
    	{
    		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    		{
    			add_class(document.documentElement, 'fbx-darkmode');
    		}
    		else
    		{
    			remove_class(document.documentElement, 'fbx-darkmode');
    		}
    	}
    	else
    	{
    		remove_class(document.documentElement, 'fbx-darkmode');
    	}
    }

    const InitialThemeLinks = function()
    {
    	this._theme = localStorage.getItem('fbx-docs-base-theme') || 'light';

        this.super('.js-docs-theme-menu > li');
    }

    InitialThemeLinks.prototype.bind = function(item)
    {
    	let theme = attr(item, 'data-theme');

    	theme === this._theme ? add_class(item, 'selected') : remove_class(item, 'selected');

    }

    InitialThemeLinks.prototype.unbind = function(item)
    {
    	remove_class(item, 'selected')
    }

    frontbx.dom().register('ThemeSwitcher', extend(Component, ThemeSwitcher), true);

    frontbx.dom().register('InitialThemeLinks', extend(Component, InitialThemeLinks), true);

}());
