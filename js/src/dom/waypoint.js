(function()
{
    /**
     * Component base
     * 
     * @var {class}
     */
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [find, on, off, has_class, in_dom, parse_url, extend]  = frontbx.import(['find','on','off','has_class','in_dom','parse_url','extend']).from('_');

    /**
     * Has the page loaded?
     * 
     * @var {object}
     */
    var pageLoaded = false;

    /**
     * Waypoints
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const WayPoints = function()
    {        
        this.super('.js-waypoint-trigger');

        // Invoke pageload
        if (!pageLoaded)
        {
            this._invokePageLoad();
        }

        pageLoaded = true;
    }

    /**
     * @inheritdoc
     * 
     */
    WayPoints.prototype.bind = function(node)
    {
        on(node, 'click', this._eventHandler);
    }

    /**
     * @inheritdoc
     * 
     */
    WayPoints.prototype.unbind = function(node)
    {
        off(node, 'click', this._eventHandler);
    }

    /**
     * Event handler
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    WayPoints.prototype._eventHandler = function(e)
    {
        let trigger   = this;
        let id        = trigger.dataset.waypointTarget || trigger.href.split('#').pop();
        let speed     = parseInt(trigger.dataset.waypointSpeed) || 500;
        let easing    = trigger.dataset.waypointEasing || 'easeInOutCubic';
        let updateUrl = trigger.dataset.updateUrl === 'false' ? false : true;

        if (id && id[0] !== '#') id = `#${id}`;

        frontbx.SmoothScroll(id, { easing: easing, speed: speed, updateUrl: updateUrl });

        return false;
    }

    /**
     * Scroll to a element with id when the page loads
     *
     * @access {private}
     */
    WayPoints.prototype._invokePageLoad = function()
    {
        var url = parse_url(window.location.href);

        let targetEl = url.hash && url.hash !== '' ? find(url.hash) : false;

        if (!in_dom(targetEl) || !has_class(targetEl, '.js-waypoint')) return;
       
        let speed  = parseInt(targetEl.dataset.waypointSpeed) || 500;
        let easing = targetEl.dataset.waypointEasing || 'easeInOutCubic';

        const scroll = function()
        {
            frontbx.SmoothScroll(url.hash, { easing: easing, speed: speed, updateUrl: false });

            off(window, 'frontbx:ready', scroll);
        }

        window.scrollTo(0, 0);

        on(window, 'frontbx:ready', scroll);
    }

    // Load into frontbx DOM core
    frontbx.dom().register('WayPoints', extend(Component, WayPoints));

})();