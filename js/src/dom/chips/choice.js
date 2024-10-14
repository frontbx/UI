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
    const [find, add_class, on, closest, has_class, remove_class, off, trigger_event, extend] = frontbx.import(['find','add_class','on','closest','has_class','remove_class','off','trigger_event','extend']).from('_');

    /**
     * Choice chips
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const ChoiceChips = function()
    {
        this.super('.js-choice-chips .btn-chip');
    }

    /**
     * Bind DOM listeners
     *
     * @access {private}
     */
    ChoiceChips.prototype.bind = function(node)
    {
        on(node, 'click', this._clickHandler);
    }

    /**
     * Unbind DOM listeners
     *
     * @access {private}
     */
    ChoiceChips.prototype.unbind = function(node)
    {
        off(node, 'click', this._clickHandler);
    }

    /**
     * Handle click event on chip
     *
     * @access {private}
     * @param  {event|null} e
     */
    ChoiceChips.prototype._clickHandler = function(e)
    {
        e = e || window.event;

        var _wrapper = closest(this, '.js-choice-chips');

        var _input = find('.js-choice-input', _wrapper);

        if (!has_class(this, 'selected'))
        {                
            remove_class(find('.btn-chip.selected', _wrapper), 'selected');

            add_class(this, 'selected');

            if (_input)
            {
                _input.value = this.dataset.value || this.innerText.trim();

                trigger_event(_input, 'input');
                trigger_event(_input, 'change');
            }
        }
    }

    // Load into frontbx DOM core
    frontbx.dom().register('ChoiceChips', extend(Component, ChoiceChips));

})();