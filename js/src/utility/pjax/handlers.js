Pjax.prototype._onsuccess = function(response)
{
    this._insertResponse(response);

    trigger_event(window, 'frontbx:pjax:success', this.options);

    this.ajax._makeCallback(this.callbacks.success, this._xhr, [response]);
}

Pjax.prototype._onerror = function(response)
{
    trigger_event(window, 'frontbx:pjax:abort', this.options);

    this.ajax._makeCallback(this.callbacks.error, this._xhr, [response, false]);
}

Pjax.prototype._onabort = function(response)
{
    let element = this.options.element;
    
    let swapTimer = TRANSITION_TIMERS.get(element);

    if (swapTimer) clearTimeout(swapTimer);

    CURRENT_REQUESTS.delete(element);

    TRANSITION_TIMERS.delete(element);

    frontbx.NProgress().done();

    trigger_event(window, 'frontbx:pjax:abort', this.options);

    this.ajax._makeCallback(this.callbacks.abort, this._xhr, [response, false]);
}

Pjax.prototype._oncomplete = function(response, successfull)
{
    trigger_event(window, 'frontbx:pjax:complete', this.options);

    this.ajax._makeCallback(this.callbacks.complete, this._xhr, [response, successfull]);

    frontbx.NProgress().done();
}

Pjax.prototype._contentComplete = function()
{
    let element = this.options.element;

    if (this.options.scrolltop)
    {
        animate(window, { property : 'scrollTo', to: '0, 0', duration: 150, callback: () => this._pushState() });
    }

    CURRENT_REQUESTS.delete(element);

    TRANSITION_TIMERS.delete(element);

    frontbx.dom().refresh(element === document.body ? document : element);
}

Pjax.prototype._preAbort = function()
{
    let element = this.options.element;

    let ajax = CURRENT_REQUESTS.get(element);

    if (ajax) ajax.abort();
}