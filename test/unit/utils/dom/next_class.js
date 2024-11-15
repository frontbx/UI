/**
 * Traverse nextSibling untill class type or class or array of either
 *
 * @access {public}
 * @param  {DOMElement}   el         Target element
 * @param  {string}       classNames Target node classname
 * @return {node\null}
 */
_.prototype.next_class = function(el, classNames)
{
    let ret = false;

    this.traverse_next(el, (sibling) =>
    {
        ret = this.has_class(sibling, classNames) ? sibling : ret;
        
        if (ret) return false;
    });

    return ret;
}