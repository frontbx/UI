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
    let selector = this.options.element;
    
    let swapTimer = TRANSITION_TIMERS.get(selector);

    if (swapTimer) clearTimeout(swapTimer);

    CURRENT_REQUESTS.delete(selector);

    TRANSITION_TIMERS.delete(selector);

    if (this._abortAnimations) this._abortAnimations();

    frontbx.NProgress().done();

    trigger_event(window, 'frontbx:pjax:abort', this.options);

    this.ajax._makeCallback(this.callbacks.abort, this._xhr, [response, false]);
}

Pjax.prototype._oncomplete = function(response, successfull)
{
    if (this.options.scrolltop) animate(window, { property : 'scrollTo', to: '0, 0', duration: 150, callback: () => this._pushState() });

    trigger_event(window, 'frontbx:pjax:complete', this.options);

    this.ajax._makeCallback(this.callbacks.complete, this._xhr, [response, successfull]);

    frontbx.NProgress().done();
}

Pjax.prototype._contentComplete = function()
{
    if (!this.options.scrolltop) this._pushState(); 
   
    CURRENT_REQUESTS.delete(this.options.element);

    TRANSITION_TIMERS.delete(this.options.element);

    let _elem = this._optionsElement();

    frontbx.dom().refresh(_elem === document.body ? document : _elem);

    this.completed = true;
}

Pjax.prototype._preAbort = function()
{
    let ajax = CURRENT_REQUESTS.get(this.options.element);

    if (ajax) ajax.abort();
}