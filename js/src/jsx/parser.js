(function()
{
	/**
     * Helper functions
     *
     * @var {Function}
     */
	const [dom_element, each, is_array, is_constructable, is_constructed, is_empty, is_function, is_htmlElement, is_object, is_string, is_number, join_obj, map, str_replace] = frontbx.import(['dom_element','each','is_array','is_constructable','is_constructed','is_empty','is_function','is_htmlElement','is_object','is_string','is_number','join_obj','map','str_replace']).from('_');

	/**
     * Helper functions
     *
     * @var {Function}
     */
	const INTERPOLATE_MAP = {};

	/**
     * Currently interpolating.
     *
     * @var {Object}
     */
	var CURR_INTERPOLATIONS = {};

	/**
     * Helper functions
     *
     * @var {Function}
     */
	var GUID = 0;
	
	/**
     * Main JSX parser.
     *
     * @access {Public}
     * @param  {String} jsx to parse
     * @return {Array|HTMLElement}
     */
	function jsx(jsx, root, interpolations)
	{
		jsx = _jsxStrClean(jsx + '');
		
		// Already parsed
		if (is_htmlElement(jsx)) return jsx;
		
		// Empty
	    if (jsx === null || jsx === true || jsx === false || typeof jsx === 'undefined' || (typeof jsx === 'string' && jsx.trim() === ''))
	    {
	        return _createTextNode('', root);
	    }

	    // Cache interpolations
	    if (is_object(interpolations)) each(interpolations, (k, v) => CURR_INTERPOLATIONS[k] = v);

	    // No HTML
	    if (!jsx.includes('<') && !jsx.includes('>')) return _createTextNode(jsx, root);

	    let tokenizer = new Tokenizer(jsx);

	    let tokens = tokenizer.parse();

    	return _createDomElement(tokens, root);
	}

	/**
     * Create HTML Element from vnode.
     *
     * @access {private}
     * @param  {HTMLElement}  vnode
     * @param  {HTMLElement}  parentDOMElement
     * @return {HTMLElement|Array}
     */
    function _createDomElement(vnode, parentDOMElement)
	{
		switch (vnode.type)
        {
        	case '#empty':
                return _createTextNode('', parentDOMElement);

            case '#text':
                return _createTextNode(vnode.value, parentDOMElement);

            case '#element':
                return _createHTMLElement(vnode, parentDOMElement);

            case '#component':
                return _flatten(_renderComponent(vnode, parentDOMElement));

            case '#fragment':
                return _flatten(_createFragment(vnode, parentDOMElement));

            default:
            	return _createTextNode('', parentDOMElement);
        }
	}

	/**
     * Create an HTMLElement.
     *
     * @access {private}
     * @param  {HTMLElement}  vnode
     * @return {HTMLElement}
     */
	function _createHTMLElement(vnode, parentDOMElement)
	{        
		let attributes = _vattrs(vnode);

		let children = vnode.children.length === 0 && attributes.children ? _normaliseChildren(attributes.children) : vnode.children;

		delete attributes.children;

		let DOMElement = dom_element({tag: vnode.value, ...attributes});

		each(children, (i, child) =>
        {
            let childDOMElem = _createDomElement(child);

            is_array(childDOMElem) ? _appendChildren(childDOMElem, DOMElement) : DOMElement.appendChild(childDOMElem);
        });

        parentDOMElement.appendChild(DOMElement);

	    return DOMElement;
	}

	/**
	 * Cleans unnecessary white-space from JSX string.
	 *
	 * @param  {string}  input
	 * @return {string}
	 */
	function _jsxStrClean(str)
	{
	    return str.split(/\n|  /g).filter(block => block !== '').join(' ').trim();
	}

	function _isVnode(value)
	{
		return !is_object(value) && value.__isvnode === true;
	}
	
	/**
     * Caches and returns a children function.
     *
     * @access {private}
     * @param  {String} key   Cached callback key
     * @param  {Mixed}  value Children value
     * @return {Array|HTMLElement|String}
     */
	function _normaliseChildren(value)
	{
		// Flatten arrays
		if (is_array(value)) return _flatten(map(value, (i, sub) => _normaliseChildren(sub)));

		// Already parsed
		if (_isVnode(value)) return [value];

		// HTML elements
		if (is_htmlElement(value)) return [ value ];

		// Empty 
		if (is_empty(value)) return [{__isvnode: true,type: '#empty',value : ''}];

		// Strings or numbers
		if (is_string(value) || is_number(value))
		{
			let tokenizer = new Tokenizer(jsx);

	    	return [tokenizer.parse()];
		}
	}

	function _appendChildren(children, parentDOMElement)
	{
	    if (is_array(children))
	    {
	        each(children, (i, child) => _appendChildren(parentDOMElement, child));
	    }

	    if (is_htmlElement(children)) parentDOMElement.appendChild(children);
	}

	/**
     * Vnode attributes.
     *
     * @access {private}
     * @param  {HTMLElement}  vnode
     * @return {Object}
     */
    function _vattrs(vnode)
	{
		let ret = {};

		each(vnode.attrs, (attribute, value) =>
		{
			if (value.includes('#JSX_FUNC_'))
			{
				let callback = INTERPOLATE_MAP[value];

				let called = callback(attribute);

				value = called;
			}
			
			ret[attribute] = value;
		});

		return ret;
	}

	/**
     * Create text node.
     *
     * @access {private}
     * @param  {String}  text
     * @return {HTMLElement}
     */
	function _createTextNode(text, parentDOMElement)
	{		
		let txt = document.createTextNode(text);

		if (parentDOMElement) parentDOMElement.appendChild(txt);

		return txt;
	}

	/**
     * Create fragment.
     *
     * @access {private}
     * @param  {Array}  vnode
     * @return {Array}
     */
	function _createFragment(vnode)
	{
	    return map(vnode.children, (i, child) => _createDomElement(child));
	}

	/**
     * Create component.
     *
     * @access {private}
     * @param  {HTMLElement} vnode
     * @param  {HTMLElement} parentDOMElement
     * @return {Array}
     */
	function _renderComponent(vnode, parentDOMElement)
	{
		let fn = _getComponent(vnode.value);

		let elem = jsx(fn(_vattrs(vnode)), parentDOMElement);

		frontbx.dom().refresh(elem);

		return [].prototype.slice.call(parentDOMElement.children);
	}

	/**
     * Get component render function.
     *
     * @access {private}
     * @param  {String}   name
     * @return {Function}
     */
	function _getComponent(name)
	{
		let fn = CURR_INTERPOLATIONS[name] || frontbx.get(name);

		if (is_constructed(fn))
		{
			if (!fn.render) throw new Error('Object Components must implement the [render] method');

			return fn.render;
		}

		if (is_constructable(fn))
		{
			let component = new fn;

			if (!fn.render) throw new Error('Object Components must implement the [render] method');

			return component.render;
		}

		if (!is_function(fn)) throw new Error(`Invalid Component [${name}]`);

		return fn;
	}

	/**
     * Flatten multidimensional children.
     *
     * @access {private}
     * @param  {HTMLElement|Array} DOMElement
     * @return {HTMLElement|Array}
     */
	function _flatten(DOMElement)
	{
	    if (is_array(DOMElement))
	    {
	        let ret = [];

	        each(DOMElement, (i, child) =>
	        {
	            if (is_array(child))
	            {
	               	ret = [...ret, ..._flatten(child)];
	            }
	            else
	            {
	                ret.push(child);
	            }
	        });

	        return ret;
	    }

	    return DOMElement;
	}

	/**
     * Converts Object to HTML props before parsing.
     *
     * @access {Public}
     * @param  {Object} attributes
     * @return {String}
     */
	function props(attributes)
	{
		let ret = [];

		each(attributes, (name, value) => 
		{
			value = name === 'style' && is_object(value) ? join_obj(value, ': ','; ') : _prop(value);
		    
            ret.push(`${name}="${_prop(value)}"`);
	    });

	    return ret.join(' ');
	}

	/**
     * Interperlates JSX property before passing.
     *
     * @access {Private}
     * @param  {Mixed}  value
     * @return {String}
     */
	function _prop(value)
	{
		// Empty strings
		if (is_string(value) && str_replace(value, ['undefined','null','false','NaN'], '').replace(/\s\s+/g, ' ').trim() === '') return false;
		
		// Empty values
		if (is_empty(value)) return false;
		
		// Functions
		if (is_function(value)) return _propfunc(value);

		// Arrays
		if (is_array(value)) return map(value, (i, v) => _prop(v)).join(' ').trim();

		return value;
	}

	/**
     * Returns a property callback.
     *
     * @access {private}
     * @param  {String}   key   Cache key.
     * @param  {Function} value Function
     * @return {Function}
     */
	function _propfunc(callback)
	{
		GUID++;
			
		let key = `#JSX_FUNC_${GUID}`;

		INTERPOLATE_MAP[key] = (attribute) =>
		{
			delete INTERPOLATE_MAP[key];

			return attribute[0] === 'o' && attribute[1] === 'n' ? callback : callback();
		}

		return key;
	}

	frontbx.set('jsx', jsx);

	frontbx.set('props', props);
	
})();