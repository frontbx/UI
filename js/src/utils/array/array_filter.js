/**
 * Filters empty array entries and returns new array
 *
 * @param   {object|array}  object Object to delete from
 * @returns {object|array}
 */
_.prototype.array_filter = function(arr)
{
    return this.map(arr, (k,v) => this.is_empty(v) ? false : v );
}