_.prototype.traverse_up = function(DOMElement, callback)
{    
    // Stop on document
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    if (callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className.trim()))
    {
        return DOMElement;
    }

    return this.traverse_up(DOMElement.parentNode, callback);
}

_.prototype.traverse_down = function(DOMElement, callback)
{
    if (this.is_undefined(DOMElement) || DOMElement === null) return;

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
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    if (callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className.trim())) return true;

    return this.traverse_next(DOMElement.nextSibling, callback);
}

_.prototype.traverse_prev = function(DOMElement, callback)
{
    // Stop on document
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    if (callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className.trim()))  return true;

    return this.traverse_prev(DOMElement.previousSibling, callback);
}
