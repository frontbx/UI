/**
 * Closest parent node by class
 *
 * @access {public}
 * @param  {DOMElement}   el   Target element
 * @param  {string} clas Node class to find
 * @return {node\null}
 */
_.prototype.closest_class = function(el, classNames)
{    
    let ret = false;

    this.traverse_up(el, (parent) =>
    {
        ret = this.has_class(parent, classNames) ? parent : ret;
        
        if (ret) return false;
    });

    return ret;
}