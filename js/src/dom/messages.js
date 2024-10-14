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
     * @var {function}
     */
    const [on, animate_css, closest, has_class, remove_from_dom, off, trigger_event, extend] = frontbx.import(['on','animate_css','closest','has_class','remove_from_dom','off','trigger_event','extend']).from('_');

    /**
     * Message closers
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const MessageClosers = function()
    {
        this.super('.js-close-msg');
    }

    /**
     * @inheritdoc
     * 
     */
    MessageClosers.prototype.bind = function(node)
    {
        on(node, 'click', this._eventHandler);
    }

    /**
     * @inheritdoc
     * 
     */
    MessageClosers.prototype.unbind = function(node)
    {
        off(node, 'click', this._eventHandler);
    }

    /**
     * Event handler - handles removing the message
     *
     * @param  {event}   e JavaScript click event
     * @access {private}
     */
    MessageClosers.prototype._eventHandler = function(e)
    {
        e = e || window.event;

        e.preventDefault();

        let msg      = closest(this, '.msg');
        let toRemove = msg;

        trigger_event(msg, 'frontbx:message:close');

        if (has_class(this, 'js-rmv-parent'))
        {
            toRemove = toRemove.parentNode;
        }

        animate_css(toRemove, { opacity: 0, duration: 500, easing: 'easeInOutCubic', callback: function()
        {
            trigger_event(msg, 'frontbx:message:closed');

            remove_from_dom(toRemove);
        }});
    }

    // Load into frontbx DOM core
    frontbx.dom().register('MessageClosers', extend(Component, MessageClosers));

})();