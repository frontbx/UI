/**
 * Checks if HtmlElement is in current DOM
 *
 * @param   {HTMLElement}  element  Element to check
 * @returns {boolean}
 */
_.prototype.in_dom = function(element)
{
    if (element === window || element === document || element === document.body || element === document.documentElement)
    {
        return true;
    }

    if (!this.is_htmlElement(element))
    {
        return false;
    }

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

    let matches = this.find_all(selector);
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