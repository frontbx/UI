_.prototype.traverse_up = function(DOMElement, callback, origional)
{    
    origional = typeof origional === "undefined" ? DOMElement : origional;

    // Stop on document
    if (DOMElement === document || typeof DOMElement === "undefined" || DOMElement === null) return;

    if (callback(DOMElement))
    {
        return origional;
    }

    return this.traverse_up(DOMElement.parentNode, callback, origional);
}

_.prototype.traverse_down = function(DOMElement, callback)
{
    if (typeof DOMElement === "undefined" || DOMElement === null) return;

    let children = this.find_all('*', DOMElement);

    let ret = false;

    this.each(children, (i, child) => 
    {
        if (callback(child))
        {
            ret = child;

            return false;
        }
    });

    return ret;
}

_.prototype.traverse_next = function(DOMElement, callback)
{
    // Stop on document
    if (DOMElement === document || typeof DOMElement === "undefined" || DOMElement === null) return;

    if (callback(DOMElement)) return true;

    return this.traverse_next(DOMElement.nextSibling, callback);
}

_.prototype.traverse_prev = function(DOMElement, callback)
{
    // Stop on document
    if (DOMElement === document || typeof DOMElement === "undefined" || DOMElement === null) return;

    if (callback(DOMElement))  return true;

    return this.traverse_prev(DOMElement.previousSibling, callback);
}
