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

    let response = callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className.trim());

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
_.prototype.traverse_down = function(DOMElement, callback)
{
    if (this.is_undefined(DOMElement) || DOMElement === null) return;

    let children = this.find_all('*', DOMElement);

    let ret = false;

    this.each(children, (i, child) => 
    {
        let response = callback(child, child.tagName.toLowerCase(), child.className.trim());

        if (response || response === false)
        {
            ret = response !== false ? DOMElement : response;

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
    // Stop on document
    if (DOMElement === document || this.is_undefined(DOMElement) || DOMElement === null) return;

    let response = callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className.trim());

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

    let response = callback(DOMElement, DOMElement.tagName.toLowerCase(), DOMElement.className.trim());

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
