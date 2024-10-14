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
    const [attr, is_undefined, to_camel_case, dom_element, find, find_all, add_class, on, closest, has_class, is_empty, remove_class, off, each, extend] = frontbx.import(['attr','is_undefined','to_camel_case','dom_element','find','find_all','add_class','on','closest','has_class','is_empty','remove_class','off','each','extend']).from('_');

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
    const DATA_ATTRIBUTES = ['variant','direction','title','content','event','animation'];

    /**
     * Popover
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Popover = function()
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
    Popover.prototype.bind = function(trigger)
    {
        if (!this._windowClick)
        {
            on(window, 'click', this._windowClickHandler, this);

            this._windowClick = true;
        }

        let options = {trigger};
        let elem;
        let pop;

        each(DATA_ATTRIBUTES, (i, attribute) =>
        {
            let value = attr(trigger, `data-popover-${attribute}`);

            if (!is_undefined(value))
            {
                if (value === 'true' || value === 'false') value = value === 'true' ? true : false;

                if (attribute === 'content' && value[0] === '#')
                {                    
                    elem = find(value);

                    value = elem;
                }

                options[to_camel_case(attribute)] = value;
            }
        });

        if (!elem)
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
        else
        {
            remove_class(elem, 'hidden');
            
            elem.style = '';
        }

        let popHandler = frontbx.get('PopHandler', options);

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
     * Unbind event listeners on a trigger
     *
     * @param {trigger} node
     * @access {private}
     */
    Popover.prototype.unbind = function(trigger)
    {
        if (this._windowClick)
        {
            off(window, 'click', this._windowClickHandler, this);

            this._windowClick = false;
        }

        let content = attr(trigger, 'data-content');

        if (content[0] === '#')
        {
            content = find(content);
            
            if (content)
            {
                content.style.display = 'none';

                document.body.appendChild(content);
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
    Popover.prototype._hoverEnter = function(e, trigger)
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
    Popover.prototype._hoverLeave = function(e, trigger)
    {
        clearTimeout(HOVER_TIMER);

        // Mouse leaving pop not trigger
        if (!has_class(trigger, '.js-popover'))
        {
            for (let [_trigger, handler] of POP_HANDLERS)
            {
                if (handler.el === trigger) trigger = handler.trigger;
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
    Popover.prototype._hoverPop = function(e, pop)
    {
        clearTimeout(HOVER_TIMER);

        on(pop, 'mouseleave', this._hoverLeave, this);
    }

    /**
     * Window resize event handler
     *
     * @access {private}
     */
    Popover.prototype._windowResize = function()
    {
        for (let [trigger, handler] of POP_HANDLERS)
        {
            if (handler.state === 'active') handler.stylePop();

        }
    }

    /**
     * Click event handler
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    Popover.prototype._killPop = function(trigger)
    {            
        let handler = POP_HANDLERS.get(trigger);

        handler.remove();
        
        remove_class(trigger, 'popped');
    }

    /**
     * Click event handler
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    Popover.prototype._clickHandler = function(e, trigger)
    {
        e = e || window.event;

        e.preventDefault();
        
        var popHandler = POP_HANDLERS.get(trigger);

        if (has_class(trigger, 'popped'))
        {
            this._removeAll(trigger);
            
            popHandler.remove();
            
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
    Popover.prototype._windowClickHandler = function(e)
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
    Popover.prototype._removeAll = function(exception)
    {        
        for (let [trigger, handler] of POP_HANDLERS)
        {
            if (!exception || (exception && trigger !== exception))
            {
                handler.remove();

                remove_class(trigger, 'popped');
            }
        }
    }

    // Load into frontbx DOM core
    frontbx.dom().register('Popover', extend(Component, Popover));

}());
