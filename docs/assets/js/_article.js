/**
 * Converts article link menu to waypoints
 *
 */
(function()
{
    const [Component] = frontbx.get('Component');
    const [find, add_class, remove_class, extend]  = frontbx.import(['find','add_class','remove_class','extend']).from('_');

    const ArticleWaypoints = function()
    {        
        this.super('.docs-body > h1 + p + hr + ul li a, .docs-body > h1 + p + p + hr + ul li a, .docs-body > h1 + p + p + p + hr + ul li a');
    }

    ArticleWaypoints.prototype.bind = function(link)
    {       
        add_class(link, 'js-waypoint-trigger');

        frontbx.dom().refresh('WayPoints', link.parentNode);
    }

    ArticleWaypoints.prototype.unbind = function(link)
    {
        remove_class(link, 'js-waypoint-trigger');
    }

    frontbx.dom().register('ArticleWaypoints', extend(Component, ArticleWaypoints), true);

}());

/**
 * Converts article menu's to responsive
 *
 */
(function()
{
    const [Component] = frontbx.get('Component');
    const [add_class, dom_element, extend]  = frontbx.import(['add_class','dom_element','extend']).from('_');

    const ArticleTables = function()
    {        
        this.super('.docs-body > table');
    }

    ArticleTables.prototype.bind = function(table)
    {       
        let wrapper = dom_element({tag: 'div', class: 'table-responsive'});

        table.parentNode.replaceChild(wrapper, table);

        wrapper.appendChild(table);

         add_class(table, 'table, table-minimal');
    }

    ArticleTables.prototype.unbind = function(table)
    {
        
    }

    frontbx.dom().register('ArticleTables', extend(Component, ArticleTables), true);

}());


/**
 * Add anchor links to articles
 *
 */
(function()
{
    const [Component] = frontbx.get('Component');
    const [find, dom_element, remove_from_dom, extend]  = frontbx.import(['find','dom_element','remove_from_dom','extend']).from('_');

    const ArticleTitles = function()
    {        
        this.super('.docs-body > h1, .docs-body > h2, .docs-body > h3, .docs-body > h4, .docs-body > h5, .docs-body > h6');
    }

    ArticleTitles.prototype.bind = function(title)
    {       
        let a = find('> a', title);

        if (a && a.id)
        {
            a.className = 'anchor-link js-waypoint-trigger';

            a.innerHTML = '#';
        }
        else
        {
            dom_element({tag: 'a', class: 'anchor-link js-waypoint-trigger', href: `#${title.id}`, ariaLabel: `Link to this section: ${title.innerText.trim()}`}, title, '#');  
        }
        
        frontbx.dom().refresh('WayPoints', title);
    }

    ArticleTitles.prototype.unbind = function(title)
    {
        let a = find('.js-waypoint-trigger', title);

        if (a) remove_from_dom(a);
    }

    frontbx.dom().register('ArticleTitles', extend(Component, ArticleTitles), true);

}());

/**
 * Blockquotes in articles
 *
 */
(function()
{
    const [Component] = frontbx.get('Component');
    const [add_class, extend] = frontbx.import(['add_class', 'extend']).from('_');

    const BQs = function()
    {        
        this.super('.docs-body > blockquote');
    }

    BQs.prototype.bind = function(blockquote)
    {
       	add_class(blockquote, 'bq');
    }

    BQs.prototype.unbind = function(blockquote)
    {
    	
    }

    frontbx.dom().register('BQs', extend(Component, BQs), true);

}());