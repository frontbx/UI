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
    const [find, first_children, on, off, add_class, remove_class, has_class, each, map, _for, css, attr, is_empty, input_value, dom_element, extend] = frontbx.import(['find', 'first_children', 'on', 'off', 'add_class', 'remove_class', 'has_class', 'each', 'map', 'for', 'css', 'attr','is_empty', 'input_value','dom_element', 'extend']).from('_');

    /**
     * Default values
     * 
     * @var {Object}
     */
    const DEFAULT_OPTIONS =
    {
        min: 0,
        max: 100,
        value: 50,
        step: 1,
        labeled: false,
        indicators: false,
    };

    /**
     * Range input utility
     * 
     * @var {Function}
     */
    const Range = function(wrapper)
    {
        this.wrapperEl = wrapper;

        this.inputEl = find('input[type=range]', wrapper);

        let min     = attr(this.inputEl, 'min');
        let max     = attr(this.inputEl, 'max');
        let step    = attr(this.inputEl, 'step');
        let value   = input_value(this.inputEl);
        let suffix  = attr(this.inputEl, 'data-suffix');
        let prefix  = attr(this.inputEl, 'data-prefix');
        let labeled = has_class(this.wrapperEl, 'range-labeled');
        let indicators = has_class(this.wrapperEl, 'range-indicators');

        min   = is_empty(min)   ? DEFAULT_OPTIONS.min : (min.includes('.') ? parseFloat(min) : parseInt(min));
        max   = is_empty(max)   ? DEFAULT_OPTIONS.max : (max.includes('.') ? parseFloat(max) : parseInt(max));
        step  = is_empty(step)  ? DEFAULT_OPTIONS.step : (step.includes('.') ? parseFloat(step) : parseInt(step));
        value = is_empty(value) ? DEFAULT_OPTIONS.value : value;

        this.props = {min, max, step, value, suffix, prefix, labeled, indicators};

        this._build();

        this._bind();
    }

    /**
     * Destroy slider.
     * 
     * @access {public}
     */
    Range.prototype.destroy = function()
    {
        this._unbind();

        _for(first_children(this.wrapperEl), (i, elem) => elem !== this.inputEl ? this.wrapperEl.removeChild(elem) : null);
    }

    /**
     * Update the slider.
     * 
     * @access {public}
     */
    Range.prototype.update = function(e)
    {
        let value = input_value(this.inputEl); value = is_empty(value) ? 0 : value;

        if (value === this.props.min)
        {
            remove_class(this.wrapperEl, 'range-max');
            add_class(this.wrapperEl, 'range-min');
        }
        else if (value === this.props.max)
        {
            remove_class(this.wrapperEl, 'range-min');
            add_class(this.wrapperEl, 'range-max');
        }
        else 
        {
            remove_class(this.wrapperEl, 'range-min, range-max');
        }

        this.props.value = value;

        this.updateBackground();

        _for(this.props.max.toString().length, (i) => this.updateIndicators(i));
    }

    /**
     * Bind listener.
     * 
     * @access {private}
     */
    Range.prototype._bind = function()
    {
        on(this.inputEl, 'input', this.update, this);
    }

    /**
     * Unbind listener.
     * 
     * @access {private}
     */
    Range.prototype._unbind = function()
    {
        off(this.inputEl, 'input', this.update, this);
    }

    /**
     * Build slider.
     * 
     * @access {private}
     */
    Range.prototype._build = function()
    {
        let length     = this.props.max.toString().length;
        let digitWraps = [];
        this.digitEls  = [];

        _for(length, () => 
        {
            let ul = dom_element({tag: 'ul'}, null, map(Array(10).fill(0), (i) => dom_element({tag: 'li', innerHTML: `${i}`})));

            this.digitEls.push(ul);

            digitWraps.push(dom_element({tag: 'div', class: 'slider-value-number'}, null, ul));
        });

        if (this.props.prefix)
        {
            digitWraps.unshift(dom_element({tag: 'div', class: 'slider-value-number'}, null, dom_element({tag: 'ul'}, null, dom_element({tag: 'li', innerHTML: this.props.prefix}))));
        }

        if (this.props.suffix)
        {
            digitWraps.push(dom_element({tag: 'div', class: 'slider-value-number'}, null, dom_element({tag: 'ul'}, null, dom_element({tag: 'li', innerHTML: this.props.suffix}))));
        }

        // Label style
        if (this.props.indicators)
        {
            let prefix = this.props.prefix || '';
            let suffix = this.props.suffix || '';

            let label = dom_element({tag: 'div', class: this.props.labeled ? 'slider-value label' : 'slider-value'}, null, `${prefix}${this.props.min}${suffix}`);

            let fChild = this.wrapperEl.firstChild;

            if (fChild === this.inputEl)
            {
                this.wrapperEl.insertBefore(label, fChild);
            }
            else
            {
                this.wrapperEl.insertBefore(label, fChild.nextSibling);
            }
        }

        this.digitWrapper = dom_element({tag: 'div', class: `slider-value ${this.props.labeled ? 'label' : ''}`}, this.wrapperEl, digitWraps);

        this.update();
    }

    /**
     * Update the digit indicators.
     * 
     * @access {private}
     * @param  {Integer} index
     */
    Range.prototype.updateIndicators = function(index)
    {
        let elem     = this.digitEls[index];
        let value    = this.props.value.toString();
        let { max }  = this.props;
        let length   = max.toString().length;
        let visible  = index + 1 > length - value.length;
        let position = visible ? "-" + (value[index - (length - value.length)] * 10) + '%' : '10%';

        !visible ? add_class(elem.parentNode, 'digit-hidden') : remove_class(elem.parentNode, 'digit-hidden');

        //!visible ? css(elem.parentNode, 'display', 'none') : css(elem.parentNode, 'display', false);

        css(elem,
        {
            transform: `translateY(${position})`,
            opacity: visible ? '1' : '0'
        });
    }

    /**
     * Update the background of input.
     * 
     * @access {private}
     */
    Range.prototype.updateBackground = function()
    {
        css(this.inputEl, 'background-size', `${this.percent()}% 100%`);
    }

    /**
     * Returns background percentage width.
     * 
     * @access {private}
     * @return {Float}
     */
    Range.prototype.percent = function()
    {
        let { min, max } = this.props;
        
        return (this.props.value - min) * 100 / (max - min)
    }

    /**
     * Ranges.
     * 
     * @var {Map}
     */
    const RANGES = new Map;

    /**
     * RangeSlider Dom Component.
     *
     */
    const RangeSlider = function()
    {
        this.super('.js-range-slider');
    }

    /**
     * @inheritdoc
     * 
     */
    RangeSlider.prototype.bind = function(wrapper)
    {        
        RANGES.set(new Range(wrapper));
    }

    /**
     * @inheritdoc
     * 
     */
    RangeSlider.prototype.unbind = function(wrapper)
    {
        let range = RANGES.get(wrapper);

        if (range)
        {
            range.destroy();

            RANGES.delete(wrapper);
        }
    }

    /**
     * @inheritdoc
     * 
     */
    RangeSlider.prototype.template = function(props)
    {
        console.log('create');

        let inputProps = { min: props.min, max: props.max, value: props.value, step: props.step };

        if (props.prefix) inputProps.dataPrefix = props.prefix;
        if (props.suffix) inputProps.dataSuffix = props.suffix;

        return dom_element({tag: 'div', class: `range-slider ${props.labeled ? 'range-labeled' : ''} ${props.indicators ? 'range-indicators' : ''} js-range-slider`}, null,
            dom_element({ ...{ tag: 'input', type: 'range'}, ...inputProps})
        );
    }

    // Load into frontbx DOM core
    frontbx.dom().register('RangeSlider', extend(Component, RangeSlider));
})();