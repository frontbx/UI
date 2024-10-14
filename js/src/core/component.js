(function()
{
    const [find_all, each, map, traverse_up, is_empty, array_unique] = frontbx.import(['find_all','each','map','traverse_up','is_empty','array_unique']).from('_');

    /**
     * Component base class
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Component = function(selector)
    {
        /**
         * Default props.
         *
         * @var {object}
         */
        this.defaultProps = !this.defaultProps ? {} : this.defaultProps;

        /**
         * Selector.
         *
         * @var {string}
         */
        this._selector = selector;

        /**
         * Dom elements
         *
         * @var {array}
         */
        this._DOMElements = [];

        // Init
        if (!is_empty(this._selector)) this.construct(document);

        return this;
    }

    /**
     * Module constructor
     *
     * @access {public}
     */
    Component.prototype.construct = function(context)
    {
        if (is_empty(this._selector)) return;

        let nodes = map(find_all(this._selector, context, context !== document), (i, node) => !this._DOMElements.includes(node) ? node : false);

        if (!is_empty(nodes))
        {
            this._DOMElements = [...this._DOMElements, ...nodes];

            each(nodes, (i, node) => this.bind(node), this);
        }
    }

    /**
     * Module destructor
     *
     * @access {public}
     */
    Component.prototype.destruct = function(context)
    {
        if (!context || context === document)
        {
            each(this._DOMElements, (i, node) => this.unbind(node), this);
            
            this._DOMElements = [];

            return;
        }

        each(this._DOMElements, (i, DOMElement) =>
        {
            if (DOMElement === context)
            {
                this.unbind(DOMElement);

                this._DOMElements.splice(i, 1);
            }
            else
            {
                traverse_up(DOMElement, (parent) =>
                {                
                    if (parent === context)
                    {
                        this.unbind(DOMElement);

                        this._DOMElements.splice(i, 1);

                        return false;
                    }
                });
            }
        });
    }

    /**
     * Create DOM elements and bind
     * 
     */
    Component.prototype.create = function(props, appendTo)
    {
        props = !props ? {} : props;

        props = {...this.defaultProps, ...props};

        let node = this.render(props);

        if (appendTo) appendTo.appendChild(node);

        frontbx.Dom().refresh(node);

        return node;
    }

    /**
     * Template abstract method
     *
     * @access {public}
     */
    Component.prototype.render = function()
    {
        throw new Error('[render] method must be implemented.');
    }


    /**
     * Bind abstract method
     *
     * @access {public}
     */
    Component.prototype.bind = function(context)
    {
        throw new Error('[bind] method must be implemented.');
    }

    /**
     * Unbind abstract method
     *
     * @access {public}
     */
    Component.prototype.unbind = function(context)
    {
        throw new Error('[unbind] method must be implemented.');
    }

    // Register
    frontbx.set('Component', Component);

})();