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
    const [find, on, off, has_class, add_class, remove_class, closest, trigger_event, dom_element, map, is_object, extend] = frontbx.import(['find','on','off','has_class','add_class','remove_class','closest','trigger_event','dom_element','map','is_object','extend']).from('_');

    /**
     * Available options
     * 
     * @var {Array}
     */
    const AVAILABLE_OPTIONS = ['media','header','responsive','landscape','body','footer','primaryAction','scrollable'];

    /**
     * Toggle active on tables
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Card = function()
    { 
        this.super();
    }

    /**
     * @inheritdoc
     * 
     */
    Card.prototype.render = function(props)
    {
        
    }

    // Load into frontbx DOM core
    frontbx.dom().register('Card', extend(Component, Card));

})();