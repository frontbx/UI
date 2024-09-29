(function()
{
    /**
     * Component base
     * 
     * @var {class}
     */
    const [Component] = frontbx.get('Component');

    /**
     * Helper functions
     * 
     * @var {function}
     */
    const [find, add_class, on, closest, in_dom, input_value, remove_class, off, extend] = frontbx.import(['find','add_class','on','closest','in_dom','input_value','remove_class','off','extend']).from('_');

    /**
     * Adds classes to inputs
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Inputs = function()
    {
        this.super('.form-field input:not([type="radio"]):not([type="checkbox"]):not([type="range"]), .form-field select, .form-field textarea, .form-field label');

        return this;
    }

    /**
     * Event binder
     *
     * @access {private}
     */
    Inputs.prototype.bind = function(node)
    {
        if (node.tagName.toLowerCase() === 'label')
        {
            on(node, 'click', this._onLabelClick);
        }
        else
        {
            on(node, 'click, focus, blur, change, input', this._eventHandler);

            this._setClasses(node);
        }
    }

    /**
     * Event ubinder
     *
     * @access {private}
     */
    Inputs.prototype.unbind = function(node)
    {
        if (node.tagName.toLowerCase() === 'label')
        {
            off(node, 'click', this._onLabelClick);
        }
        else
        {
            off(node, 'click, focus, blur, change, input', this._eventHandler);
        }
    }

    /**
     * Event handler
     *
     * @access {private}
     * @params {event|null} e Browser click event
     */
    Inputs.prototype._onLabelClick = function(e)
    {
        e = e || window.event;

        var input = find('input', this.parentNode);

        if (in_dom(input))
        {
            input.focus();

            return;
        }

        var input = find('select', this.parentNode);

        if (in_dom(input))
        {
            input.focus();

            return;
        }

        var input = find('textarea', this.parentNode);

        if (in_dom(input))
        {
            input.focus();

            return;
        }
    }

    /**
     * Event handler
     *
     * @access {private}
     * @params {event|null} e Browser click event
     */
    Inputs.prototype._eventHandler = function(e)
    {
        e = e || window.event;

        var wrapper = closest(this, '.form-field');

        if (!wrapper) return;

        if (e.type === 'click')
        {
            this.focus();
        }
        else if (e.type === 'focus')
        {
            add_class(wrapper, 'focus');
        }
        else if (e.type === 'blur')
        {
            remove_class(wrapper, 'focus');
        }

        if (e.type === 'change' || e.type === 'input' || e.type === 'blur')
        {
            var _value = input_value(this);

            if (_value === '')
            {
                remove_class(wrapper, 'not-empty');
                add_class(wrapper, 'empty');
            }
            else
            {
                remove_class(wrapper, 'empty');
                add_class(wrapper, 'not-empty');
            }
        }
    }

    /**
     * Sets initial classes on load.
     *
     * @access {private}
     * @params {DOMElement} input 
     */
    Inputs.prototype._setClasses = function(input)
    {
        var wrapper = closest(input, '.form-field');

        if (!wrapper) return;

        var _value = input_value(input);

        if (_value === '')
        {
            remove_class(wrapper, 'not-empty');
            add_class(wrapper, 'empty');
        }
        else
        {
            remove_class(wrapper, 'empty');
            add_class(wrapper, 'not-empty');
        }
    }

    // Load into frontbx DOM core
    frontbx.dom().register('Inputs', extend(Component, Inputs));
})();