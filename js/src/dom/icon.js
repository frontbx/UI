(function()
{
    /**
     * Component base
     * 
     * @var {class}
     */
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    /**
     * Toggle active on tables
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Icon = function()
    { 
        this.super();
    }

    /**
     * Default props.
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    Icon.prototype.defaultProps =
    {
        size: null,
        brand: false,
    };

    /**
     * @inheritdoc
     * 
     */
    Icon.prototype.render = function(props)
    {
        return `<span class="{props.brand ? 'fa-brand' : 'fa'} fa-{props.icon} { props.size ? 'icon-' + props.size : '' } {props.class ? props.class : ''}"></span>`;
    }

    // Load into frontbx DOM core
    frontbx.dom().register('Icon', extend(Component, Icon));

})();