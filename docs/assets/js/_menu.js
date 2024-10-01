

/**
 * Docs Drawer
 *
 */
(function()
{
	const [find, toggle_class, remove_class, attr, width, on, off, trigger_event, animate, extend] = frontbx.import(['find','toggle_class','remove_class','attr','width', 'on', 'off', 'trigger_event','animate','extend']).from('_');

	const [Component] = frontbx.get('Component');

	const menu = find('#docs-menu');
	
	var drawer;

	if (menu)
	{
		drawer = frontbx.Drawer({
		    content : menu,
		    state: 'collapsed,',
		    swipeable : false,
		    classes: 'docs-drawer',
		    callbackClose: () => remove_class(find('.js-docs-drawer-trigger'), 'active')
		});
		
		attr(menu, 'style', false);

		frontbx.set('docs-drawer', drawer);
	}

    const DocDrawer = function()
    {
    	this._desktopContainer = find('.desktop-menu');

    	this._mobileContainer = find('.docs-drawer .js-drawer-dialog');

    	this._menuElem = find('#docs-menu');

        this.super('.js-docs-drawer-trigger');
    }

    DocDrawer.prototype.bind = function(trigger)
    {    	
    	on(trigger, 'click', this._toggleDrawer, this);

    	on(window, 'resize', this.resize(), this);

    	on(window, 'frontbx:pjax:success', () => 

    		animate(window, { property : 'scrollTo', to: '0, 0', duration: 300})
    	);

    	trigger_event(window, 'resize');
    }

    DocDrawer.prototype._toggleDrawer = function(e, trigger)
    {
    	toggle_class(trigger, 'active');

    	drawer.opened() ? drawer.close() : drawer.open();
    }

    DocDrawer.prototype.unbind = function(trigger)
    {
    	off(trigger, 'click', this._toggleDrawer, this);

    	off(window, 'resize', this.resize(), this);
    }

    DocDrawer.prototype.resize = function()
    {
    	return throttle(() =>
    	{
    		let x = width(window);

	        if (x < 992 && this.inMain)
	        {
	            this._mobileContainer.appendChild(this._menuElem);

	            this.inMain = false;
	        }
	        else if (x > 992 && !this.inMain)
	        {
	        	this._desktopContainer.appendChild(this._menuElem);

	        	this.inMain = true;
	        }

    	}, 100);
    }

    frontbx.dom().register('DocDrawer', extend(Component, DocDrawer), true);

}());

/**
 * Active classes on docs menu.
 *
 */
(function()
{
	const [Component] = frontbx.get('Component');

	const [on, off, find, find_all, each, has_class, add_class, remove_class, extend] = frontbx.import(['on','off','find','find_all','each','has_class','add_class','remove_class', 'extend']).from('_');

	const DocsMenu = function()
    {
    	this._mounted = false;

        this.super('.js-docs-menu-link');

        on(window, 'popstate', this._initActiveLink, this);
    }

    DocsMenu.prototype.bind = function(link)
    {    	
    	on(link, 'click', this._toggleItem, this);

    	if (!this._mounted)
    	{
    		this._mounted = true;

    		this._initActiveLink();
    	}
    }

    DocsMenu.prototype.unbind = function(link)
    {
    	off(link, 'click', this._toggleItem, this);

    	this._mounted = false;
    }

    DocsMenu.prototype._toggleItem = function(e, a)
    {
    	let active = find('.menu-item.active');

    	if (active) remove_class(active, 'active');

    	add_class(a.parentNode, 'active');

    	frontbx.get('docs-drawer').close();
    }

    DocsMenu.prototype._initActiveLink = function(e)
    {
    	let location = window.location.href;

    	if (location.includes('#')) location = location.split('#').shift();

    	if (location.includes('?')) location = location.split('?').shift();

    	each(this._DOMElements, (i, link) =>
    	{
    		let href = link.href;

    		if (href === location)
    		{
    			add_class(link.parentNode, 'active');
    		}
    		else if (has_class(link.parentNode, 'active'))
    		{
    			remove_class(link.parentNode, 'active');
    		}
    	});
    }

    frontbx.dom().register('DocsMenu', extend(Component, DocsMenu), true);

}());
