(function()
{
    /**
     * Helpers.
     *
     * @var  {Function}
     */
    const [is_array, is_object, each, object_props] = frontbx.import(['is_array','is_object','each','object_props']).from('_');

    /**
     * Cache.
     *
     * @var  {object}
     */
    const CACHE_STR = {};

    /**
     * Global decencies.
     *
     * @var  {object}
     */
    const GLOBAL_BINDINGS =
    {
        h: createElement,
        Fragment: Fragment,
    };

    /**
     * Parse's JSX tokens
     *
     * @param   {string}             jsxStr  JSX  string
     * @param   {HTMLElement|Object} root or bindings
     * @returns {object}             bindings  
     */
    function _jsx(jsxStr, root, bindings)
    {
        if (is_object(root))
        {
            bindings = root;

            root = false;
        }

        if (is_array(jsxStr))
        {
            let ret = createElement(Fragment, {}, jsxStr);

            if (root) each(ret, (i, node) => root.appendChild(node));

            return ret;
        }

        // Empty
        else if (jsxStr === null || jsxStr === true || jsxStr === false || typeof jsxStr === 'undefined' || (typeof jsxStr === 'string' && jsxStr.trim() === ''))
        {
            let ret = createElement();

            if (root) root.appendChild(ret);

            return ret;
        }

        // Clean jsx
        jsxStr = `${jsxStr}`.replaceAll(/[\n\t]/g, '').trim();

        // No elements
        if (!jsxStr.includes('<') && !jsxStr.includes('>') && !jsxStr.includes('{'))
        {
            let ret = createElement('text', null, jsxStr);

            if (root) root.appendChild(ret);

            return ret;
        }

        // Parse into function
        let parser = new Parser(jsxStr);

        let output = parser.parse();

        let ret = sandbox(output, genBindings(bindings), CURR_RENDER.current);

        if (root) is_array(ret) ? each(ret, (i, node) => root.appendChild(node)) : root.appendChild(ret);
        
        return ret;
    }

    /**
     * Generates object of bindings for JSX parsing.
     *
     * @param  {object}  input  bindings
     * @return {object}
     */
    function genBindings(bindings)
    {
        // Normalize bindings.
        bindings = !bindings ? { ...GLOBAL_BINDINGS } : { ...bindings, ...GLOBAL_BINDINGS };

        // Apply temporary bindings cache
        each(BINDINGS_CACHE, (k,v) =>
        {
            bindings[k] = v;

            delete BINDINGS_CACHE[k];
        });
        
        // Apply currently rendering component
        if (CURR_RENDER.current)
        {        
            let props = object_props(CURR_RENDER.current, true);
            
            each(props, (i, k) => bindings[k] = CURR_RENDER.current[k]);
        }

        return bindings;
    }

    jsx = _jsx;

    frontbx.set('jsx', _jsx);

})();