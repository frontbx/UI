(function()
{
    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [find, in_dom, normalize_url, is_string, coordinates, height, animate] = frontbx.import(['find','in_dom','normalize_url','is_string','coordinates','height','animate']).from('_');

    /**
     * Default options
     * 
     * @var {object}
     */
    const DEFAULT_OPTIONS =
    {
        'speed'     : 500,
        'easing'    : 'easeInOutCubic',
        'updateURL' : true,
    };

    /**
     * Smooth scroll to an element or id
     *
     * @access {private}
     */
    function SmoothScroll(nodeOrId, options)
    {
        options = {...DEFAULT_OPTIONS, ...options};

        let DOMElement = is_string(nodeOrId) ? find(nodeOrId) : nodeOrId;

        if (!in_dom(DOMElement)) return;

        let pos = coordinates(DOMElement).top;

        let url = normalize_url(window.location.href);

        let isHashable = is_string(nodeOrId);

        let fixednav = find('.navbar.navbar-fixed');

        if (fixednav)
        {
            let h = height(fixednav);

            if (pos >= h)
            {
                pos = pos - h;
            }
        }

        const complete = function()
        {
            window.history.replaceState({}, "", nodeOrId);
        }

        animate(window, { property : 'scrollTo', to: `0, ${pos}`,  easing: options.easing, duration: options.speed, callback: isHashable && options.updateURL ? complete : null});
    }


    // Load into frontbx DOM core
    frontbx.set('SmoothScroll', SmoothScroll);

})();