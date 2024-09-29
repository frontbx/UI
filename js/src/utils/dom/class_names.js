/**
 * Returns element classNames
 *
 * @param   {HTMLElement}  element  Element to check
 * @return  {Array}
 */
_.prototype.class_names = function(element)
{
    if (this.is_htmlElement(element) && element.className && element.className.trim() !== '')
    {
        return element.className.replace( /\s\s+/g, ' ').trim().split(' ');
    }

    return [];
}