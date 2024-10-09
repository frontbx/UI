/**
 * Set, get or remove DOM attribute.
 *
 * No third arg returns attribute value, third arg set to null or false removes attribute.
 * 
 * @param {HTMLElement}  DOMElement  Dom node
 * @param {string}       name        Property name
 * @apram {mixed}        value       Property value
 */
_.prototype.attrs = function(DOMElement)
{
	let ret = {};

	this.each(DOMElement.attributes, (i, attribute) => ret[attribute.nodeName] = this.attr(DOMElement, attribute.nodeName));
	
	return ret;
}