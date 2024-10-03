/**
 * Get an element's actual height in px
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @return {object}
 */
_.prototype.height = function(DOMElement, borderBox)
{
    if (DOMElement === window || DOMElement === document || DOMElement === document.documentElement) return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    if (borderBox)
    {
        let h    = parseInt(this.rendered_style(DOMElement, 'height'));
        let padT = parseInt(this.rendered_style(DOMElement, 'padding-top'));
        let padB = parseInt(this.rendered_style(DOMElement, 'padding-bottom'));

        return parseInt(h - padT - padB);
    }

    return this.css_unit_value(this.rendered_style(DOMElement, 'height'));
}