/**
 * Checks if HtmlElement is in current DOM
 *
 * @param   {HTMLElement}  element  Element to check
 * @returns {boolean}
 */
_.prototype.in_dom = function(element)
{
    // Element types
    if (element === window || element === document || element === document.body || element === document.documentElement)
    {
        return true;
    }

    // Not an HTML element
    if (!this.is_htmlElement(element))
    {
        return false;
    }

    // No parent node
    if (!element.parentNode) return false;

    // Matching by selector is faster than traversing up the
    // DOM tree - especially if element is deeply nested.
    let selector = element.tagName.toLowerCase();

    if (element.id && element.id.trim() !== '')
    {
        selector = `#${element.id}`;
    }
    else if (element.className && element.className.trim() !== '')
    {
        let classNames = this.class_names(element);

        selector = classNames.length === 1 ? `.${classNames[0]}` : `.${classNames.join('.')}`;
    }
    else
    {
        let classNames = this.class_names(element.parentNode);

        if (classNames.length >= 1) selector = classNames.length === 1 ? `.${classNames[0]} ${selector}` : `.${classNames.join('.')} ${selector}`;
    }

    let matches = this.find_all(selector);

    // Fast check
    if (matches.length === 1 && matches[0] === element) return true;

    // Loop through
    let ret = false;

    this.each(matches, (i, match) =>
    {
        if (match === element)
        {
            ret = true;

            return false;
        }
    });

    return ret;
}