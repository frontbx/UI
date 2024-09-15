/**
 * Get an array of name/value objects for all inputs in a form
 *
 * @access {public}
 * @param  {DOMElement}   form Target element
 * @return {array}
 */
_.prototype.form_values = function(form)
{
    var inputs = this.form_inputs(form);
    var ret    = {};
    
    this.each(inputs, (i, input) =>
    {
        let key = this.attr(input, 'name');

        let val = this.input_value(input);

        if (input.type !== 'radio')
        {
            ret[key] = val;
        }
        else
        {
            if (val) ret[key] = val;
        }

        if (key.includes('[]'))
        {
            if (!ret[key] || !this.is_array(ret[key]))
            {
                ret[key] = [];
            }

            ret[key].push(val);
        }
    });
   
    return ret;
}