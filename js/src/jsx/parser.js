(function()
{
    /**
     * Helpers.
     *
     * @var  {Function}
     */
    const [is_array, each, map] = frontbx.import(['is_array','each','map']).from('_');

    /**
     * Cache.
     *
     * @var  {object}
     */
    const CACHE_STR = {};

    /**
     * Helper function.
     *
     * @param  {String} str
     * @return {String}
     */
    function sanitizeQuotes(str)
    {
        return str.replaceAll(/(?<!\\)'/g, '\\\'');
    }

    /**
     * Parser. Parses tokenized input into 'createElement' statement. 
     *
     * @param  {string}  jsxStr  JSX  string
     */
    Parser = function(jsxStr)
    {
        this.jsxStr = jsxStr;
    }

    /**
     * Parse current string.
     *
     * @returns {object}
     */
    Parser.prototype.parse = function()
    {
        let useCache = this.jsxStr.length < 720;

        if (useCache && CACHE_STR[this.jsxStr]) return CACHE_STR[this.jsxStr];

        // tokenize and create
        let funcString = this.genChildren((new Tokenizer(this.jsxStr)).parse());

        if (useCache)
        {
            return CACHE_STR[this.jsxStr] = funcString;
        }

        return funcString;
    }

    /**
     * Generates 'createElement' string tag
     *
     * @param   {object}  el  Token element
     * @returns {strng}
     */
    Parser.prototype.genTag = function(el)
    {
        let children = this.genChildren(el.children, el);
        let props    = this.genProps(el.attrs, el);
        let tag      = el.type === '#component' || el.type === '#fragment' ? el.value : `'${el.value}'`;

        return `h(${tag},${props},${children})`;
    }

    /**
     * Generates props from token
     *
     * @param   {object}  props  Prop values
     * @param   {object}  el     Target token
     * @returns {strng}
     */
    Parser.prototype.genProps = function(props, el)
    {
        if (!props && !el.spreadAttribute) return 'null';

        let spread = el.spreadAttribute;

        let attrs = [];

        each(props, (key, prop) => attrs.push(`'${key}':${this.genPropValue(prop)}`));

        if (spread) return `Object.assign({}, ${spread}, {${attrs.join(', ')}})`;

        return `{${attrs.join(', ')}}`;
    }

    /**
     * Generates props value.
     *
     * @param   {mixed}  val  Prop values
     * @returns {strng}
     */
    Parser.prototype.genPropValue = function(val)
    {
        if (val.startsWith('{')) return val.substring(1).trim().slice(0, -1).trim();

        if (val.startsWith('`')) return val;

        return `'${sanitizeQuotes(val)}'`;
    }

    /**
     * Generates children for tag.
     *
     * @param  {array}  Children  Array of child tokens.
     * @param  {strng}  parent    Parant token
     * @param  {string} glue      Optional glue string
     */
    Parser.prototype.genChildren = function(children, parent, glue)
    {
        if (parent && (!parent.children || !parent.children.length)) return 'null';

        return map(children, (i, child) => 
        {
            if (child.type === '#jsx') return child.value.substring(1).trim().slice(0, -1).trim();
            
            if (child.type === '#text') return `'${sanitizeQuotes(child.value)}'`;

            if (child.type === '#comment') return `h('comment',{},'${sanitizeQuotes(child.value.substring(4).trim().slice(0, -3).trim())}')`;

            if (child.type === '#jsx:function')
            {
                let open  = child.open.trim().substring(1).trim();
                let close = child.close.trim().slice(0, -1).trim();

                return `${open} ${this.genChildren(child.children, null, ' ')} ${close}`;
            }

            if (child) return this.genTag(child);

            return false;

        }).join(glue || ', ');
    }

})();