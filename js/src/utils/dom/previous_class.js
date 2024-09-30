/**
 * Traverse previousSibling untill class
 *
 * @access {public}
 * @param  {DOMElement}   el        Target element
 * @param  {string} className Target node classname
 * @return {node\null}
 */
_.prototype.previous_class = function(el, classNames)
{
    let ret = false;

    this.traverse_prev(el, (sibling) =>
    {
        ret = this.has_class(sibling, classNames) ? sibling : ret;
        
        if (ret) return false;
    });

    return ret;
}