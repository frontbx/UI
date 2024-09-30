/**
 * Closest parent node by type/class or array of either
 *
 * @access {public}
 * @param  {DOMElement}   el   Target element
 * @param  {string} type Node type to find
 * @return {node\null}
 */
_.prototype.closest = function(el, type)
{    
    // Match OR split by comma
    if (this.is_string(type) && type.includes(',')) type = type.split(',').filter((x) => x.trim() !== '').map((x) => x.trim());

    // Match OR as an array
    if (this.is_array(type))
    {        
        let ret = false;

        this.each(type, (i , itype) =>
        {
            ret = this.closest(el, itype);

            if (ret) return false;
        });

        return ret;
    }
    
    let isElement = this.is_htmlElement(type);
    let isClass   = !isElement && type.includes('.');
    let isType    = !isElement && !isClass;
    let ret       = false;

    this.traverse_up(el, (parent, pType) =>
    {
        if (isElement && parent === type)
        {
            ret = parent;

            return false;
        }
        else if (isClass && this.has_class(parent, type))
        {
            ret = parent;

            return false;
        }
        else if (isType && type === pType)
        {
            ret = parent;

            return false;
        }
    });

    return ret;
}
