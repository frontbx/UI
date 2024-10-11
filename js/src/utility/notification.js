(function()
{
    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [find, find_all, add_class, on, in_dom, remove_class, remove_from_dom, dom_element] = frontbx.import(['find','find_all','add_class','on','in_dom','remove_class','remove_from_dom','dom_element']).from('_');

    /**
     * Default options
     * 
     * @var {array}
     */
    const DEFAULT_OPTIONS =
    {
        text:             '',
        variant:          '',
        closebtn:         false,
        responsive:       false,
        btn:              false,
        stacked:          false,
        dense:            true,
        icon:             '',
        position:         'bottom',
        timeout:          6000,
        btnVariant:       'primary',
        callbackBuilt:    () => {},
        callbackRender:   () => {},
        callbackDismiss:  () => {},        
        callbackValidate: () => { return true; }
    };

    /**
     * Notification
     *
     * The Notification class is a utility class used to
     * display a notification.
     *
     */
    const Notification = function(options)
    {
        this._options = {...DEFAULT_OPTIONS, ...options };

        this._buildNotificationContainer();

        this._build();

        this._render();

        this._bindListeners();
    }

    /**
     * Returns the notification element.
     *
     * @access {public}
     */
    Notification.prototype.domElement = function()
    {
        return this._notification;
    }

    /**
     * Remove the notification.
     *
     * @access {public}
     */
    Notification.prototype.remove = function()
    {
        clearTimeout(this._timeout);

        const wrappper = this._DOMElementWrapper;

        add_class(this._notification, this._animateOutClass);
        
        remove_class(this._notification, this._animateInClass);

        this._makeCallback(this._options.callbackDismiss);

        setTimeout(() =>
        {
            if (wrappper.children.length === 0) remove_class(wrappper, 'active');

            remove_from_dom(this._notification);

        }, 300);
    }

    /**
     * Build the notification container
     *
     * @access {private}
     */
    Notification.prototype._buildNotificationContainer = function()
    {
        this._wrapperClass = `.js-nofification-wrap.position-${this._options.position}`;

        let wrapper = find(this._wrapperClass);

        if (!wrapper)
        {
            wrapper = dom_element({tag: 'div', class: `notification-wrap position-${this._options.position} js-nofification-wrap`}, document.body);
        }

        this._DOMElementWrapper = wrapper;
    }

    /**
     * Build the notification
     *
     * @access {private}
     */
    Notification.prototype._build = function()
    {        
        let options = this._options;

        this._animateInClass = this._animateIn();

        this._animateOutClass = this._animateOut();

        let notif = dom_element({tag: 'div', class: `msg ${options.closebtn || options.btn ? 'msg-with-btn' : ''} ${options.responsive ? 'msg-responsive' : ''} ${options.stacked ? 'msg-stacked' : ''} ${options.variant ? `msg-${options.variant}` : ''} ${options.dense ? 'msg-dense' : ''} ${this._animateInClass}`} );
        
        if (options.closebtn)
        {
            dom_element({tag: 'button', type: 'button', role: 'button', ariaLabel: 'close', class: 'btn btn-pure btn-xs btn-circle btn-msg-close js-notif-btn' }, notif, dom_element({tag: 'span', class: 'fa fa-xmark' }));
        }

        if (options.icon)
        {
            dom_element({tag: 'div', class: 'msg-icon' }, notif, dom_element({tag: 'span', class: `fa fa-${options.icon}` }));
        }

        dom_element({tag: 'div', class: 'msg-body'}, notif, options.text.trim().startsWith('<') ? options.text : dom_element({tag: 'p', innerHTML: options.text }) );

        if (options.btn)
        {
            this._btn = dom_element({tag: 'div', class: 'msg-btn' }, notif, options.btn.trim().startsWith('<') ? options.btn : dom_element({tag: 'button', class: `btn btn-pure btn-${options.btnVariant} btn-sm js-notif-btn`, innerText: options.btn }));
            
            add_class(find_all('button', this._btn), 'js-notif-btn');
        }

        this._notification = notif;

        this._makeCallback(this._options.callbackBuilt);
    }

    /**
     * Build the notification
     *
     * @access {private}
     */
    Notification.prototype._animateIn = function()
    {
        if (this._options.position.includes('top')) return 'animate-in-down';

        return 'animate-in-up';
    }

     /**
     * Build the notification
     *
     * @access {private}
     */
    Notification.prototype._animateOut = function()
    {
        if (this._options.position.includes('top')) return 'animate-out-up';

        return 'animate-out-down';
    }

    /**
     * Render the notification.
     *
     * @access {private}
     */
    Notification.prototype._render = function()
    {
        add_class(this._DOMElementWrapper, 'active');

        this._DOMElementWrapper.appendChild(this._notification);

        this._notification.offsetHeight;

        this._makeCallback(this._options.callbackRender);

    }

    /**
     * Render the notification.
     *
     * @access {private}
     */
    Notification.prototype._removeValidate = function()
    {
        if (this._makeCallback(this._options.callbackValidate)) this.remove();
    }

    /**
     * Render the notification.
     *
     * @access {private}
     */
    Notification.prototype._bindListeners = function()
    {
        if (this._options.timeout !== false)
        {
            this._timeout = setTimeout(() => this._removeValidate(), this._options.timeout);
        }

        on(this._options.closebtn || this._options.btn ? find_all('.js-notif-btn', this._notification) : this._notification, 'click', this._removeValidate, this);
    }

    /**
     * Fire callbacks.
     *
     * @access {private}
     */
    Notification.prototype._makeCallback = function(callback,)
    {
        if (callback) return callback(this._notification);
    }

    // Add to container
    frontbx.set('Notification', Notification);

})();