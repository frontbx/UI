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
    const [on, off, each, is_undefined, attr, bool, to_camel_case, extend, normalize_url]  = frontbx.import(['on','off','each','is_undefined','attr','bool','to_camel_case','extend','normalize_url']).from('_');

    /**
     * Available data attributes.
     * 
     * @var {Array}
     */
    const DATA_ATTRIBUTES = ['element','url','once','nocache','urlhash','pushstate','scrolltop','animate'];

    /**
     * Available data attributes.
     * 
     * @var {Array}
     */
    const BOOL_ATTRS = ['once','nocache','urlhash','pushstate','scrolltop','animate'];

    /**
     * URLS Requested
     * 
     * @var {object}
     */
    const REQUESTED = [];

    /**
     * Pjax Links Module
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const PjaxLinks = function()
    {
        this.super('.js-pjax-link');
    }

    /**
     * @inheritdoc
     * 
     */
    PjaxLinks.prototype.bind = function(node)
    {        
        on(node, 'click', this._requestHandler, this);
    }

    /**
     * @inheritdoc
     * 
     */
    PjaxLinks.prototype.unbind = function(node)
    {
        off(node, 'click', this._requestHandler, this);
    }

    /**
     * Event handler
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    PjaxLinks.prototype._requestHandler = function(e, trigger)
    {
        let options = { };

        each(DATA_ATTRIBUTES, (i, attribute) =>
        {
            let value = attr(trigger, `data-pjax-${attribute}`);

            if (!is_undefined(value))
            {
                if (BOOL_ATTRS.includes(attribute))
                {
                    value = bool(value);
                }
                else if (value === 'element')
                {
                    value = value[0] !== '#' ? `#${value}` : value;
                }

                options[to_camel_case(attribute)] = value;
            }
        });

        let url = trigger.href || options.url;

        // Only request once
        if (REQUESTED.includes(url) && options.once) return false;

        // No change
        if (normalize_url(url) === normalize_url(window.location.href)) return false;

        REQUESTED.push(url);

        frontbx.Pjax().request(url, options);

        return false;
    }

    // Load into frontbx DOM core
    frontbx.dom().register('PjaxLinks', extend(Component, PjaxLinks));

})();