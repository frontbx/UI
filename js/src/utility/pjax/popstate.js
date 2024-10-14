/**
 * State change event handler (back/forward clicks)
 *
 * Popstate is treated as another pjax request essentially
 * 
 * @access {private}
 * @param  {e}       event JavaScript 'popstate' event
 */
Pjax.prototype._popStateHandler = function(e)
{
    // State obj exists 
    if (e.state && typeof e.state.id !== 'undefined')
    {
        let options = e.state;

        this.request(options.id, {...options, nocache: false, pushstate: false });

        return false;
    }
}

/**
 * Push state after complete.
 *
 * @access {private}
 */
Pjax.prototype._pushState = function()
{    
    if (this.options.pushstate)
    {            
        let state = { ...this.options, id: this.options.url, scrolltop: false, scroll: scroll_pos() };

        window.history.pushState(state, '', state.id);
    }
    // Adjust hash
    else if (this.options.urlhash)
    {
        let url = window.location.href.split('#').shift();

        window.history.replaceState({}, '', `${url}#${this._optionsElement().id}`);
    }
}

/**
 * Save state before requesting.
 *
 * @access {private}
 */
Pjax.prototype._saveState = function()
{    
    if (this.options.pushstate)
    {            
        let state = { ...this.options, id: normalize_url(window.location.href), scrolltop: false, scroll: scroll_pos() };

        window.history.pushState(state, '', state.id);
    }
    // Adjust hash
    else if (this.options.urlhash)
    {
        window.history.replaceState({}, '', window.location.href);
    }
}