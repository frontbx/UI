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
        let head = dom_element({tag: 'thead'}, null, dom_element({tag: 'tr'}, null, map(props.head, (i, cell) =>
        {   
            return is_object(cell) ? dom_element({tag: 'th', ...cell}) : dom_element({tag: 'th'}, null, cell);                    
        })));

        let body = dom_element({tag: 'tbody'}, null, map(props.rows, (i, item) =>
        {
            return dom_element({tag: 'tr', class: `${props.selected && (props.selected === i) ? 'selected' : null}`}, null, map(item, (j, cell) =>
            {
                return is_object(cell) ? dom_element({tag: 'th', ...cell}) : dom_element({tag: 'th'}, null, cell);
            }));
        }));

        return dom_element({tag: 'table', class: `table ${props.classes ? props.classes : ''} ${props.dense ? 'table-dense' : ''} ${ props.selectable ? `js-select-table` : '' }`}, null, [head, body]);
    }

    // Load into frontbx DOM core
    frontbx.dom().register('Card', extend(Component, Card));

})();