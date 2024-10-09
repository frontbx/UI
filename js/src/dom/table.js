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
     * Toggle active on tables
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Table = function()
    { 
        this.super('.js-select-table > tbody > tr');
    }

    /**
     * @inheritdoc
     * 
     */
    Table.prototype.bind = function(node)
    {            
        on(node, 'click', this._eventHandler, this);
    }

    /**
     * @inheritdoc
     * 
     */
    Table.prototype.unbind = function(node)
    {
        off(node, 'click', this._eventHandler, this);
    }

    /**
     * Handle the click event
     *
     * @param {event|null} e JavaScript click event
     * @access {private}
     */
    Table.prototype._eventHandler = function(e, row)
    {
        e = e || window.event;
        
        if (has_class(row, 'selected')) return;

        var table = closest(row, 'table');

        let selected = find('tr.selected', table);

        if (selected) remove_class(selected, 'selected');

        add_class(row, 'selected');

        trigger_event(table, 'frontbx:table:selected', { item: row });
    }

    /**
     * @inheritdoc
     * 
     */
    Table.prototype.render = function(props)
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
    frontbx.dom().register('Table', extend(Component, Table));

})();