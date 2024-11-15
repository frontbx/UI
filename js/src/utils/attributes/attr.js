/**
 * Set, get or remove DOM attribute.
 *
 * No third arg returns attribute value, third arg set to null or false removes attribute.
 * 
 * @param {HTMLElement}  DOMElement  Dom node
 * @param {string}       name        Property name
 * @apram {mixed}        value       Property value
 */
_.prototype.attr = function(DOMElement, name, value)
{            
    // Get attribute
    // e.g attr(node, style)
    if ((TO_ARR.call(arguments)).length === 2 && this.is_string(name))
    {
        return this.__get_attribute(DOMElement, name);
    }

    // attr(node, {foo : 'bar', baz: 'bar'})
    if (this.is_object(name))
    {
        this.each(name, function(prop, value)
        {
            this.attr(DOMElement, prop, value);

        }, this);

        return;
    }

    // Set or remove attibute.
    switch (name)
    {
        // innerHTML
        case 'innerHTML':
            DOMElement.innerHTML = !value ? '' : value;
            break;

        // innerText
        case 'innerText':
            DOMElement.innerText = !value ? '' : value;
            break;

        // Children
        case 'children':

            this.each(DOMElement.children, function(node)
            {
                this.remove_from_dom(node);
            
            }, this);

            this.each(value, function(node)
            {
                DOMElement.appendChild(node);
            });

            break;

        // Class
        case 'class':
        case 'className':

            // Cleanup classname
            value = this.is_string(value) ? this.str_replace(value, ['undefined', 'null', 'false', 'true'], '').replace(/\s\s+/g, ' ').trim() : value;

            if (this.is_empty(value))
            {
                DOMElement.removeAttribute('class');
            }
            else
            {
                DOMElement.className = value;
            }

            break;

        // Style
        case 'style':

            // remove all styles completely
            if (this.is_empty(value))
            {
                DOMElement.removeAttribute('style');
            }

            DOMElement.style = '';

            let style = this.is_string(value) ? this.css_to_object(value) : value;

            this.each(style, (prop, value) => this.css(DOMElement, prop, value));
           
            break;

        // Events / attributes
        default:

            // Events
            if (name[0] === 'o' && name[1] === 'n')
            {
                var evt = name.slice(2).toLowerCase();

                // Remove old listeners
                this.off(DOMElement, evt);

                // Add new listener if one provided
                if (value)
                {
                    this.on(DOMElement, evt, value);
                }
            }
            // All other node attributes
            else
            {
                let isEmpty    = this.is_empty(value);
                let isData     = name.startsWith('data');
                let isAria     = name.startsWith('aria');
                let camelName  = name.includes('-') ? this.to_camel_case(name) : name;
                let hyphenName = name.includes('-') ? name : this.camel_case_to_hyphen(name);
                let isBoolean  = this.in_array(camelName, BOOLEAN_ATTRS);

                if (value === 'false' || value === 'null' || value === 'undefined') value = isBoolean ? false : isAria || isData ? 'false' : '';

                // Special data
                if (isData)
                {
                    if (isEmpty)
                    {
                        DOMElement.removeAttribute(hyphenName);

                        delete DOMElement.dataset[this.lc_first(camelName.substring(4))];
                    }
                    else
                    {
                        DOMElement.setAttribute(hyphenName, value);

                        DOMElement.dataset[this.lc_first(camelName.substring(4))] = value;
                    }

                    break;
                }

                if (camelName !== 'viewBox')
                    
                    try
                    {                        
                        DOMElement[camelName] = value;

                    } catch (e) {}

                if (isEmpty)
                {
                    DOMElement.removeAttribute(hyphenName);
                }
                else
                {
                    DOMElement.setAttribute(hyphenName, value);
                }
            }

            break;
    }
}

/**
 * Simple get html attribute.
 *
 * No third arg returns attribute value, third arg set to null or false removes attribute.
 * 
 * @access {private}
 * @param  {HTMLElement}      DOMElement  Dom node
 * @param  {string}           name        Property name
 * @return {string|undefined}
 */
_.prototype.__get_attribute = function(DOMElement, name)
{
    let camelName  = name.includes('-') ? this.to_camel_case(name) : name;
    let hyphenName = name.includes('-') ? name : this.camel_case_to_hyphen(name);

    // Data need to check dataset
    if (name.startsWith('data'))
    {
        if (!DOMElement.dataset) return DOMElement.getAttribute(hyphenName);

        return DOMElement.dataset[this.lc_first(camelName.substring(4))];
    }

    // Special booleans
    if (this.in_array(name, BOOLEAN_ATTRS))
    {
        if (DOMElement[name] === '' || DOMElement[name] === 'true' || DOMElement[name] === true) return true;

        return DOMElement[name] === 'false' || !DOMElement[name] ? false : true;
    }

    let retCamel = DOMElement[camelName];
    let retAttr  = DOMElement.getAttribute(hyphenName);

    if (retAttr && retAttr !== '') return retAttr;

    if (retCamel && retCamel !== '') return retCamel;

    return retCamel || retAttr;
}