/**
 * Closest parent node by class
 *
 * @access {public}
 * @param  {DOMElement}   el   Target element
 * @param  {string} clas Node class to find
 * @return {node\null}
 */
_.prototype.closest_class = function(el, clas)
{    
    // Type is class
    if (this.is_array(clas))
    {
        for (var i = 0; i < clas.length; i++)
        {
            var response = this.closest_class(el, clas[i]);

            if (response)
            {
                return response;
            }
        }

        return null;
    }

    if (this.has_class(el, clas))
    {
        return el;
    }

    if (this.has_class(el.parentNode, clas))
    {
        return el.parentNode;
    }

    let ret = null;

    this.traverse_up(el, (parent) =>
    {
        if (this.has_class(parent, clas))
        {
            ret = parent;

            return true;
        }
    });
    
    return ret;
}