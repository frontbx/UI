/**
 * Get an element's inline style if it exists
 *
 * @access {public}
 * @param  {DOMElement}   el   Target element
 * @param  {string} prop CSS property to check
 * @return {string}
 */
_.prototype.inline_style = function(element, prop)
{
    const elementStyle = element.style;

    prop = this.css_prop_to_hyphen_case(prop);

    // Native
    if (!this.is_undefined(elementStyle[prop]) && elementStyle[prop] !== '')
    {
        const val = elementStyle.getPropertyValue(elementStyle[prop]) || elementStyle[prop];
        
        return val === '' ? undefined : val;
    }

    let styles = element.getAttribute('style');

    if (styles && styles.includes(prop))
    {
        let style = styles.match(new RegExp(`${prop}\s?:[^;]+;?`));

        if (style)
        {
            return this.rtrim(style[0].split(':').pop().trim(), ';').trim();
        }
    }
}