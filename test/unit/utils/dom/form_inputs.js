/**
 * Get all input elements from a form
 *
 * @access {public}
 * @param  {DOMElement}   form Target element
 * @return {array}
 */
_.prototype.form_inputs = function(form)
{
    return this.find_all('input, textarea, select', form);
}