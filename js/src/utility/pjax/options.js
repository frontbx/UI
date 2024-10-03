Pjax.prototype._normalizeOptions = function(url, options)
{
    // Store URL in options for callbacks
    url = normalize_url(url.trim());

    // Merge options with defaults
    options = typeof options === 'undefined' ? { ...DEFAULT_OPTIONS, url  } : { ...DEFAULT_OPTIONS, ...options, url };

    if (options.element === 'body') options.element = document.body;

    return options;
}