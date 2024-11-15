/**
 * Returns object properties and methods as array of keys.
 * 
 * @param   {mixed}    mixed_var    Variable to test
 * @param   {boolean}  withMethods  Return methods and props (optional) (default "true")
 * @returns {array}
 */
_.prototype.object_props = function(mixed_var, deep)
{
    if (!mixed_var) return [];

    deep = typeof deep === 'undefined' ? false : deep;
    
    let keys = deep ?this.array_unique([...Object.keys(mixed_var), ...Object.getOwnPropertyNames(mixed_var)]) : Object.keys(mixed_var);

    if (deep)
    {
        let protos = this.prototypes(mixed_var);

        this.each(protos, (i, proto) => keys = [...keys, ...this.object_props(proto, true)] );
    }
    
    return this.array_unique(keys.filter((key) => !EMPTY_OBJ_KEYS.includes(key) && !FORBIDDEN_OBJ_KEYS.includes(key)));
}
