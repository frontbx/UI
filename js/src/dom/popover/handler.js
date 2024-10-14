(function()
{
    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [height, width, coordinates, dom_element, in_dom] = frontbx.import(['height','width','coordinates','dom_element','in_dom']).from('_');

    /**
     * Default options.
     * 
     * @var {Object}
     */
    const DEFAULT_OPTIONS =
    {
        direction: 'top',
        animation: 'pop',
        variant: 'default',
        classes: '',
    };

    /**
     * Popover Handler
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const PopHandler = function(options)
    {
        this.options    = {...DEFAULT_OPTIONS, ...options};
        this.popElement = this.buildPopEl();
        this.state      = 'inactive';
    }

    /**
     * Build the popover
     *
     * @access {private}
     */
    PopHandler.prototype.render = function()
    {
        document.body.appendChild(this.popElement);

        this.stylePop();

        this.popElement.classList.add(`popover-${this.options.animation}`);

        this.state = 'active';

        return this.popElement;
    }

    /**
     * Build the popover
     *
     * @access {private}
     */
    PopHandler.prototype.buildPopEl = function()
    {
        return dom_element({tag: 'div', class: `popover popover-${this.options.variant} popover-${this.options.direction} ${this.options.classes}`}, null, this.options.content);
    }

    /**
     * Remove the popover
     *
     * @access {public}
     */
    PopHandler.prototype.remove = function()
    {
        if (in_dom(this.popElement)) this.popElement.parentNode.removeChild(this.popElement);

        this.state = 'inactive';
    }

    /**
     * Position the popover
     *
     * @access {public}
     */
    PopHandler.prototype.stylePop = function()
    {
        var tarcoordinates = coordinates(this.options.trigger);

        if (this.options.direction.includes('top'))
        {
            this.popElement.style.top = `${ (tarcoordinates.top - height(this.popElement)) - 10}px`;

            if (this.options.direction === 'top') this.popElement.style.left = `${tarcoordinates.left - (width(this.popElement) / 2) + (width(this.options.trigger) / 2)}px`;
        }
        else if (this.options.direction.includes('bottom'))
        {
            this.popElement.style.top = `${(tarcoordinates.top + height(this.options.trigger) + 10)}px`;

            if (this.options.direction === 'bottom') this.popElement.style.left = `${tarcoordinates.left - (width(this.popElement) / 2) + (width(this.options.trigger) / 2)}px`;
        }
        if (this.options.direction.includes('left'))
        {
            this.popElement.style.left = this.options.direction === 'left' ? `${tarcoordinates.left - width(this.popElement) - 10}px` : `${tarcoordinates.left}px`;

            if (this.options.direction === 'left') this.popElement.style.top = `${(tarcoordinates.top - (height(this.popElement) / 2 ))}px`;
        }
        else if (this.options.direction.includes('right'))
        {
            this.popElement.style.left =  this.options.direction === 'right' ? `${tarcoordinates.left + width(this.options.trigger) + 10 }px` : `${tarcoordinates.left + width(this.options.trigger) - width(this.popElement)}px`;

            if (this.options.direction === 'right') this.popElement.style.top = `${(tarcoordinates.top - (height(this.popElement) / 2 ))}px`;
        }
    }

    // Set into container for private use
    frontbx.set('PopHandler', PopHandler);

})();