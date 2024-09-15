/**
 * Gets an input element's value
 *
 * @access {public}
 * @param  {DOMElement}   input Target element
 * @return {mixed}
 */
_.prototype.input_value = function(input)
{
    if (input.type == 'checkbox')
    {
        return this.attr(input, 'checked');
    }
    if (input.type == 'radio')
    {
        return this.attr(input, 'checked') ? this.attr(input, 'value') : undefined;
    }
    if (input.type == 'number')
    {
        return input.value.includes('.') ? parseInt(input.value) : parseFloat(input.value);
    }
    if (input.type == 'file')
    {
        if (input.multiple == true)
        {
            return input.files;
        }

        return input.files[0];
    }

    let ret = input.type == 'select' ? input.options[input.selectedIndex].value : input.value;

    return this.is_numeric(ret) ? (input.value.includes('.') ? parseInt(input.value) : parseFloat(input.value)) : ret.trim();
}