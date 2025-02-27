(function()
{
    /**
     * Component base
     * 
     * @var {class}
     */
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    /**
     * JS Helper reference
     * 
     * @var {object}
     */
    const [attr, is_undefined, is_htmlElement, to_camel_case, dom_element, find, find_all, add_class, on, closest, has_class, is_empty, remove_class, off, each, map, extend] = frontbx.import(['attr','is_undefined','is_htmlElement','to_camel_case','dom_element','find','find_all','add_class','on','closest','has_class','is_empty','remove_class','off','each','map','extend']).from('_');

    /**
     * Timer for mouse in-out.
     * 
     * @var {Timeout}
     */
    var HOVER_TIMER;

    /**
     * Handlers.
     * 
     * @var {Map}
     */
    var POP_HANDLERS = new Map;

    /**
     * Available attributes.
     * 
     * @var {Array}
     */
    const DATA_ATTRIBUTES = ['variant','direction','title','content','event','animation','state','trigger'];

    /**
     * Popover
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Popovers = function()
    {
        this.super('.js-popover');

        this._windowClick = false;
    }

    /**
     * Initialize the handlers on a trigger
     *
     * @access {private}
     * @param  {DOMElement} trigger Click/hover trigger
     */
    Popovers.prototype.bind = function(trigger)
    {
        if (!this._windowClick)
        {
            on(window, 'click', this._windowClickHandler, this);

            this._windowClick = true;
        }

        let options = { trigger };

        each(DATA_ATTRIBUTES, (i, attribute) =>
        {
            let value = attr(trigger, `data-popover-${attribute}`);

            if (!is_undefined(value))
            {
                if (value === 'true' || value === 'false') value = value === 'true' ? true : false;

                if (attribute === 'content' && value[0] === '#')
                {
                    value = find(value);
                }

                options[to_camel_case(attribute)] = value;
            }
        });

        let popHandler = frontbx.get('PopHandler', this._build(options));

        if (options.event === 'click')
        {
            on(trigger, 'click', this._clickHandler, this);
            on(window, 'resize', this._windowResize, this);
        }
        else
        {                
            on(trigger, 'mouseenter', this._hoverEnter, this);
        }

        POP_HANDLERS.set(trigger, popHandler);
    }

    /**
     * Builds the popover if necessary.
     *
     * @access {private}
     * @param  {Object} options
     * @return {Object}
     */
    Popovers.prototype._build = function(options)
    {
        if (typeof options.content === 'string')
        {
            let contents = [];

            if (options.event && options.event === 'click')
            {
                contents.push(dom_element({tag: 'button', type: 'button', role: 'button', ariaLabel: 'close', class: 'btn btn-sm btn-pure btn-circle js-remove-pop close-btn'}, null, 
                    dom_element({tag: 'span', class: 'fa fa-xmark'})
                ));
            }

            if (options.title)
            {
                contents.push(dom_element({tag: 'h5', class: 'popover-title'}, null, options.title));
            }

            contents.push(dom_element({tag: 'div', class: 'popover-content'}, null, dom_element({tag: 'p'}, null, options.content)));

            options.content = contents;
        }
        else if (is_htmlElement(options.content))
        {
            remove_class(options.content, 'hidden');

            options.content.style = '';
        }

        return options;
    }

    /**
     * Unbind event listeners on a trigger
     *
     * @param {trigger} node
     * @access {private}
     */
    Popovers.prototype.unbind = function(trigger)
    {
        if (this._windowClick)
        {
            off(window, 'click', this._windowClickHandler, this);

            this._windowClick = false;
        }

        let content = attr(trigger, 'data-content');

        if (content[0] === '#')
        {
            elem = find(content);
            
            if (elem)
            {
                elem.style.display = 'none';

                document.body.appendChild(elem);
            }
        }

        var evnt = attr(trigger, 'data-popover-event');

        if (evnt === 'click')
        {
            off(trigger, 'click', this._clickHandler, this);
            off(window, 'resize', this._windowResize, this);
        }
        else
        {
            off(trigger, 'mouseenter', this._hoverEnter, this);
            off(trigger, 'mouseleave', this._hoverLeave, this);

            this._killPop(trigger);

            POP_HANDLERS.delete(trigger);
        }
    }

    /**
     * Hover over event handler
     *
     * @access {private}
     */
    Popovers.prototype._hoverEnter = function(e, trigger)
    {
        if (has_class(trigger, 'popped')) return;

        let handler = POP_HANDLERS.get(trigger);
        
        let pop = handler.render();

        on(pop, 'mouseenter', this._hoverPop, this);

        on(trigger, 'mouseleave', this._hoverLeave, this);
        
        add_class(trigger, 'popped');
    }

    /**
     * Hover leave event handler
     *
     * @access {private}
     */
    Popovers.prototype._hoverLeave = function(e, trigger)
    {
        clearTimeout(HOVER_TIMER);

        // Mouse leaving pop not trigger
        if (!has_class(trigger, '.js-popover'))
        {
            for (let [_trigger, handler] of POP_HANDLERS)
            {
                if (handler.popElement === trigger) trigger = handler.options.trigger;
            }
        }

        HOVER_TIMER = setTimeout(() => 
        {
            this._killPop(trigger);

            off(trigger, 'mouseleave', this._hoverLeave, this);

        }, 300);
    }

    /**
     * Hover leave event handler
     *
     * @access {private}
     */
    Popovers.prototype._hoverPop = function(e, pop)
    {
        clearTimeout(HOVER_TIMER);

        on(pop, 'mouseleave', this._hoverLeave, this);
    }

    /**
     * Window resize event handler
     *
     * @access {private}
     */
    Popovers.prototype._windowResize = function()
    {
        for (let [trigger, handler] of POP_HANDLERS)
        {
            if (handler.state === 'active') handler.position();
        }
    }

    /**
     * Click event handler
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    Popovers.prototype._killPop = function(trigger)
    {            
        let handler = POP_HANDLERS.get(trigger);

        handler.destroy();
        
        remove_class(trigger, 'popped');
    }

    /**
     * Click event handler
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    Popovers.prototype._clickHandler = function(e, trigger)
    {
        e = e || window.event;

        e.preventDefault();
        
        var popHandler = POP_HANDLERS.get(trigger);

        if (has_class(trigger, 'popped'))
        {
            this._removeAll(trigger);
            
            popHandler.destroy();
            
            remove_class(trigger, 'popped');
        }
        else
        {
            this._removeAll(trigger);
            
            popHandler.render();
            
            add_class(trigger, 'popped');
        }
    }

    /**
     * Remove all popovers when anything is clicked
     *
     * @access {private}
     */
    Popovers.prototype._windowClickHandler = function(e)
    {        
        let clicked = e.target;

        // Clicked the close button
        if (has_class(clicked, 'js-remove-pop') || closest(clicked, '.js-remove-pop'))
        {
            this._removeAll();

            return;
        }

        // Clicked inside the popover
        if (has_class(clicked, 'popover') || closest(clicked, '.popover'))
        {
            return;
        }

        // Clicked a popover trigger
        if (has_class(clicked, 'js-popover') || closest(clicked, '.js-popover'))
        {
            return;
        }

        this._removeAll();
    }

    /**
     * Remove all the popovers currently being displayed
     *
     * @access {private}
     */
    Popovers.prototype._removeAll = function(exception)
    {        
        for (let [trigger, handler] of POP_HANDLERS)
        {
            if (!exception || (exception && trigger !== exception))
            {
                handler.destroy();

                remove_class(trigger, 'popped');
            }
        }
    }

    // Load into frontbx DOM core
    frontbx.dom().register('DOM_Popovers', extend(Component, Popovers));

}());
