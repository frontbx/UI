/**
 * Get an element's actual width in px
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @return {object}
 */
_.prototype.width = function(DOMElement, borderBox)
{
	if (DOMElement === window || DOMElement === document || DOMElement === document.documentElement ) return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

	if (borderBox)
    {
        let w    = parseInt(this.rendered_style(DOMElement, 'width'));
        let padL = parseInt(this.rendered_style(DOMElement, 'padding-left'));
        let padR = parseInt(this.rendered_style(DOMElement, 'padding-right'));

        return parseInt(w - padL - padR);
    }

    return this.css_unit_value(this.rendered_style(DOMElement, 'width'));
}