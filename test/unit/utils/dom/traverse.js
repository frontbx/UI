/**
 * Traverse up dom tree.
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @param  {Function}     callback   callback
 */
_.prototype.traverse_up = function(DOMElement, callback)
{    
    // Stop on document
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    let response = callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className);

    if (response)
    {
        return DOMElement;
    }
    else if (response === false)
    {
        return;
    }

    return this.traverse_up(DOMElement.parentNode, callback);
}

/**
 * Traverse down dom tree.
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @param  {Function}     callback   callback
 */
_.prototype.traverse_down = function(DOMElement, callback, includeText)
{
    includeText = typeof includeText === 'undefined' ? false : includeText;

    if (this.is_undefined(DOMElement) || DOMElement === null) return;

    let ret;

    this.each(Array.prototype.slice.call(includeText ? DOMElement.childNodes : DOMElement.children), (i, child) => 
    {
        if (includeText && (child.nodeType !== 1 && child.nodeType !== 3)) return;

        let response = callback(child, child.tagName ? child.tagName.toLowerCase() : null, child.className);

        if (response || response === false)
        {
            ret = response === false ? undefined : child;

            return false;
        }

        response = this.traverse_down(child, callback, includeText);

        if (response || response === false)
        {
            ret = response === false ? undefined : child;

            return false;
        }
    });

    return ret;
}

/**
 * Traverse next siblings.
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @param  {Function}     callback   callback
 */
_.prototype.traverse_next = function(DOMElement, callback)
{
    allNodes = typeof allNodes === 'undefined' ? false : allNodes;

    // Stop on document
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    let response = callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className);

    if (response)
    {
        return DOMElement;
    }
    else if (response === false)
    {
        return;
    }

    return this.traverse_next(DOMElement.nextSibling, callback);
}

/**
 * Traverse previous siblings.
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @param  {Function}     callback   callback
 */
_.prototype.traverse_prev = function(DOMElement, callback)
{
    // Stop on document
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    let response = callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className);

    if (response)
    {
        return DOMElement;
    }
    else if (response === false)
    {
        return;
    }

    return this.traverse_prev(DOMElement.previousSibling, callback);
}
