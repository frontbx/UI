(function()
{
    /**
     * JS Helper reference
     * 
     * @var {object}
     */
    const [is_htmlElement, dom_element, remove_class] = frontbx.import(['is_htmlElement', 'dom_element', 'remove_class']).from('_');

    /**
     * Create popover.
     * 
     * @param  {object} options
     * @return {Object}
     */
    function popover(options)
    {
        if (typeof options.content === 'string')
        {
            let contents = [];

            if (options.title)
            {
                contents.push(dom_element({tag: 'h5', class: 'popover-title'}, null, options.title));
            }

            contents.push(dom_element({tag: 'div', class: 'popover-content'}, null, dom_element({tag: 'p'}, null, options.content)));

            options.content = contents;
        }
        else if (is_htmlElement(options.content))
        {
            remove_class(options.content, 'hidden');

            options.content.style = '';
        }

        let handler = frontbx.get('PopHandler', options);

        handler.render();

        console.log(handler);

        return handler;
    }

    // Load into container 
    frontbx.set('Popover', popover);

})();