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
    const [find, each, is_undefined, attr, on, off, to_camel_case, extend] = frontbx.import(['find','each','is_undefined','attr','on','off','to_camel_case','extend']).from('_');

    /**
     * Available data attributes.
     * 
     * @var {Array}
     */
    const DATA_ATTRIBUTES = ['text','timeout','icon','btn','variant','btnVariant'];

    /**
     * Toggle active on lists
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Notification = function()
    {
        this.super('.js-notification-trigger');
    }

    /**
     * @inheritdoc
     * 
     */
    Notification.prototype.bind = function(node)
    {            
        on(node, 'click', this._show, this);
    }

    /**
     * @inheritdoc
     * 
     */
    Notification.prototype.unbind = function(node)
    {

        off(node, 'click', this._show, this);
    }

    /**
     * Toggle notification.
     * 
     * @access {private}
     */
    Notification.prototype._show = function(e, trigger)
    { 
        let options = { fromHTML: true };

        each(DATA_ATTRIBUTES, (i, attribute) =>
        {
            let value = attr(trigger, `data-${attribute}`);

            if (!is_undefined(value))
            {
                if (value === 'true' || value === 'false') value = value === 'true' ? true : false;

                if (attribute === 'timeout') value = parseInt(value);

                options[to_camel_case(attribute)] = value;
            }
        });

        frontbx.Notification(options);
    }

    // Load into frontbx DOM core
    frontbx.dom().register('DOM_Notifications', extend(Component, Notification));

})();