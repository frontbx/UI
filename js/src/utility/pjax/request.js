Pjax.prototype.request = function(url, options, success, error, complete, abort, headers)
{
    // Create ajax instance
    this.ajax = frontbx.Ajax();

    // Normalise options
    options = this._normalizeOptions(url, options);

    // Cache options
    this.options = options;

    // cache headers
    this.headers = !is_object(headers) ? { 'X-PJAX': true } : { 'X-PJAX': true, ...headers };

    // If we are already loading a pjax, cancel it and
    this._preAbort();

    // Set current request
    CURRENT_REQUESTS.set(options.element, this.ajax);

    // Cache user defined callbacks
    this.callbacks = { success, error, complete, abort };

    // Cache current state
    this._saveState();

    // Fire the start event
    trigger_event(window, 'frontbx:pjax:start', options);

    // Start nprogress
    frontbx.NProgress().start();

    this._sendAjax();
}

Pjax.prototype._sendAjax = function()
{
    let options = this.options;

    this.ajax.headers(this.headers)
    
    .success((response) => this._onsuccess(response.trim()))

    .error((response) => this._onerror(response))
    
    .abort((response) => this._onabort(response))
    
    .complete((response, successfull) => this._oncomplete(response, successfull))
    
    .get(options.url, options.nocache ? { t: Date.now().toString() } : {});
}