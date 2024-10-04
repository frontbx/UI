/**
 * Normalise provided options.
 *
 * @access {private}
 * @param  {String}  URL     Request url
 * @param  {Object}  options User options
 * @return {Object}
 */
Pjax.prototype._normalizeOptions = function(url, options)
{
    // Store URL in options for callbacks
    url = normalize_url(url.trim());

    // Merge options with defaults
    return typeof options === 'undefined' ? { ...DEFAULT_OPTIONS, url  } : { ...DEFAULT_OPTIONS, ...options, url };
}

/**
 * Returns the element from provided options.
 *
 * @access {private}
 * @return {HTMLElement}
 */
Pjax.prototype._optionsElement = function()
{
    let element = this.options.element;

    if (is_htmlElement(element))
    {
        if (element === document || element === document.documentElement)
        {
           return document.body;
        }

        return element;
    }

    if (is_string(element)) return find(element);

    return element;
}