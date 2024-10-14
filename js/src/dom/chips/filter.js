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
    const [on, off, toggle_class, extend] = frontbx.import(['on','off','toggle_class', 'extend']).from('_');

    /**
     * Filter chips
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const FilterChips = function()
    {
        this.super('.js-filter-chips .btn-chip');
    }

    /**
     * Bind DOM listeners
     *
     * @access {private}
     */
    FilterChips.prototype.bind = function(node)
    {
        on(node, 'click', this._clickHandler);
    }

    /**
     * Unbind DOM listeners
     *
     * @access {private}
     */
    FilterChips.prototype.unbind = function(node)
    {
        off(node, 'click', this._clickHandler);
    }

    /**
     * Handle click event on chip
     *
     * @access {private}
     * @param  {event|null} e
     */
    FilterChips.prototype._clickHandler = function(e)
    {
        e = e || window.event;

        e.preventDefault();

        toggle_class(this, 'checked');
    }

    // Load into frontbx DOM core
    frontbx.dom().register('FilterChips', extend(Component, FilterChips));

})();