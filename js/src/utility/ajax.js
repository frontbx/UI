(function()
{
    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [each, is_function, is_object, is_empty, callable_name, array_filter] = frontbx.import(['each','is_function','is_object','is_empty','callable_name', 'array_filter']).from('_');

    /**
     * Named callbacks
     * 
     * @var {array}
     */
    const NAMED_CALLBACKS = ['success', 'error', 'complete', 'abort', 'progress'];

    /**
     * JS Queue
     *
     * @class
     * @see {https://medium.com/@griffinmichl/asynchronous-javascript-queue-920828f6327}
     */
    const Queue = function(concurrency)
    {
        this.running = 0;
        this.concurrency = concurrency;
        this.taskQueue = [];
    };

    Queue.prototype.add = function(task, _this, _args)
    {
        if (this.running < this.concurrency)
        {
            this._runTask(task, _this, _args);
        }
        else
        {
            this._enqueueTask(task, _this, _args);
        }
    }

    Queue.prototype.next = function()
    {
        this.running--;

        if (this.taskQueue.length > 0)
        {
            var task = this.taskQueue.shift();

            this._runTask(task['callback'], task['_this'], task['_args']);
        }
    }

    Queue.prototype._runTask = function(task, _this, _args)
    {
        this.running++;

        task.apply(_this, _args);
    }

    Queue.prototype._enqueueTask = function(task, _this, _args)
    {
        this.taskQueue.push(
        {
            'callback': task,
            '_this': _this,
            '_args': _args
        });
    }

    const AJAX_QUEUE = new Queue(15);

    /**
     * Module constructor
     *
     * @access {public}
     * @class
     */
    const Ajax = function()
    {
        this._settings =
        {
            'url': '',
            'async': true,
            'timeout': 10000,
            'headers':
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accepts': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            },
        };

        this._complete = () => {};
        this._success  = () => {};
        this._error    = () => {};
        this._abort    = () => {};
        this._progress = () => {};
        this._xhr      = null;
    }

    /**
     * Ajax Methods 
     *
     * @access {public}
     * @param  {string}        url     Destination URL
     * @param  {string|object} data    Data (optional)
     * @param  {function}      success Success callback (optional)
     * @param  {function}      error   Error callback (optional)
     * @param  {function}      abort   Abort callback (optional)
     * @param  {object}        headers Request headers (optional)
     * @return {this}
     */
    Ajax.prototype.post = function(url, data, success, error, complete, abort, headers)
    {
        this._setResponseHandlers('POST', url, data, success, error, complete, abort, headers);

        AJAX_QUEUE.add(this._call, this);

        return this;
    }
    Ajax.prototype.get = function(url, data, success, error, complete, abort, headers)
    {
        this._setResponseHandlers('GET', url, data, success, error, complete, abort, headers);

        AJAX_QUEUE.add(this._call, this);

        return this;
    }
    Ajax.prototype.head = function(url, data, success, error, complete, abort, headers)
    {
        this._setResponseHandlers('HEAD', url, data, success, error, complete, abort, headers);

        AJAX_QUEUE.add(this._call, this);

        return this;
    }
    Ajax.prototype.put = function(url, data, success, error, complete, abort, headers)
    {
        this._setResponseHandlers('PUT', url, data, success, error, complete, abort, headers);

        AJAX_QUEUE.add(this._call, this);

        return this;
    }
    Ajax.prototype.delete = function(url, data, success, error, complete, abort, headers)
    {
        this._setResponseHandlers('DELETE', url, data, success, error, complete, abort, headers);

        AJAX_QUEUE.add(this._call, this);

        return this;
    }
    Ajax.prototype.upload = function(url, data, success, error, complete, abort, progress, headers)
    {
        this._settings.async = true;

        this._setResponseHandlers('UPLOAD', url, data, success, error, complete, abort, headers, progress);

        AJAX_QUEUE.add(this._call, this);

        return this;
    }


    /**
     * Set async
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype.async = function(bool)
    {
        this._settings.async = bool;

        return this;
    }

    /**
     * Adds headers
     *
     * @param  {object}  headers
     * @return {this}
     */
    Ajax.prototype.headers = function(_headers)
    {
        this._settings.headers = {...this._settings.headers, ..._headers};

        return this;
    }

    /**
     * Adds progress handler
     *
     * @param  {object}  headers
     * @return {this}
     */
    Ajax.prototype.progress = function(callback)
    {
        this._progress = callback;

        return this;
    }

    /**
     * Success function
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype.success = function(callback)
    {
        this._success = callback;

        return this;
    }

    /**
     * Error function
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype.error = function(callback)
    {
        this._error = callback;

        return this;
    }

    /**
     * Alias for complete
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype.then = function(callback)
    {
        return this.complete(callback);
    }

    /**
     * Complete function
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype.complete = function(callback)
    {
        this._complete = callback;

        return this;
    }

    /**
     * Abort an ajax call
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype.abort = function(callback)
    {
        let xhr = this._xhr;

        // Called before XHR request
        if (!xhr)
        {
            this._abort = callback;

            return this;
        }

        // Already completed
        if (!xhr.readyState >= 4)
        {
            return this;
        }

        xhr.onreadystatechange = () => {};
        this._complete = null;
        this._success  = null;
        xhr.abort();

        this._makeCallback(this._abort, this, [xhr.responseText, false]);

        this._makeCallback(this._error, this, [xhr.responseText]);
    }

    /**
     * Call callback function
     *
     * @param  {function}  callback Callback function
     * @return {this}
     */
    Ajax.prototype._makeCallback = function(callback, _this, args)
    {
        if (is_function(callback)) callback.apply(_this, args);
    }

    /**
     * Ajax call 
     *
     * @access {private}
     * @param  {string}        method   Request method
     * @param  {string}        url      Destination URL
     * @param  {string|object} data     Data (optional)
     * @param  {function}      success  Success callback (optional)
     * @param  {function}      error    Error callback (optional)
     * @param  {function}      complete Complete callback (optional)
     * @param  {function}      abort    Abort callback (optional)
     * @param  {object}        headers  Request headers (optional)
     * @return {this}
     */
    Ajax.prototype._call = function()
    {
        let [method, url] = [this.method, this.url];

        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        this._xhr = xhr;

        xhr.requestURL = url;

        xhr.mthod = method === 'UPLOAD' ? 'POST' : method;

        if (method === 'UPLOAD' && is_function(this._progress))
        {
            xhr.upload.addEventListener('progress', this._progress, false);
        }

        if (method === 'UPLOAD')
        {
            if (is_function(this._progress)) xhr.upload.addEventListener('progress', this._progress, false);

            if (is_function(this._complete)) xhr.upload.addEventListener('load', this._complete, false);
        }

        xhr.open(method, url, this._settings.async);

        xhr.timeout = this._settings.timeout;

        this._sendHeaders();

        if (this._settings.async)
        {
            xhr.onreadystatechange = () => { this._ready() };

            xhr.send(this.data || null);
        }
        else
        {
            xhr.send(this.data || null);

            this._ready();
        }

        return this;
    }

    /**
     * Send XHR headers
     *
     * @access {private}
     * @param  {object}    xhr     XHR object
     * @param  {object}    headers Request headers (optional)
     * @return {This}
     */
    Ajax.prototype._sendHeaders = function()
    {
        if (this.method === 'POST') this._settings.headers['REQUESTED-WITH'] = 'XMLHttpRequest';

        each(this._settings.headers, (k,v) => this._xhr.setRequestHeader(k, v));
    }

    /**
     * Normalise arguments from original call function
     *
     * @param  {string}        method   Request method
     * @param  {string}        url      Destination URL
     * @param  {string|object} data     Data (optional)
     * @param  {function}      success  Success callback (optional)
     * @param  {function}      error    Error callback (optional)
     * @param  {function}      complete Complete callback (optional)
     * @param  {function}      error    Abort callback (optional)
     * @param  {object}        headers  Request headers (optional)
     * @return {This}
     */
    Ajax.prototype._setResponseHandlers = function()
    {
        // Cleanup
        let args    = Array.prototype.slice.call(arguments);
        let method  = args.shift();
        let url     = args.shift();
        let data    = is_object(args[0]) ? args.shift() : null;
        let headers = null;
        let argmap  = ['success', 'error', 'complete', 'abort', 'headers', 'progress'];
        
        each(args, (i, arg) =>
        {
            if (is_function(arg))
            {
                let funcname = callable_name(arg).toLowerCase();

                let k = NAMED_CALLBACKS.includes(funcname) ? funcname : argmap[i];

                this[k](arg);
            }
            else if (is_object(arg))
            {
                this.headers(arg);
            }
        });

        // Ajax.get('foo.com?foo=bar&baz')
        if (is_object(data) && !is_empty(data))
        {
            if (method === 'UPLOAD')
            {
                let form = new FormData();

                each(data, (k, v) => form.append(k, v, v.type));

                data = form;
            }
            else if (method !== 'POST')
            {   
                let suffix = url.includes('?') ? '&' : '?';
                let params = this._params(data);
                url  = `${url}${suffix}${params}`;
                data = undefined;
            }
            else
            {
                data = this._params(data);
            }
        }

        this.method = method;
        this.data   = data;
        this.url    = url;
    }

    /**
     * Ready callback
     *
     * @param  {XMLHttpRequest} xhr     XHR Object
     * @param  {function}      success  Success callback (optional)
     * @param  {function}      error    Error callback (optional)
     * @param  {function}      complete Complete callback (optional)
     * @param  {function}      abort    Abort callback (optional)
     */
    Ajax.prototype._ready = function()
    {        
        let xhr = this._xhr;

        if (xhr.readyState == 4)
        {
            let successfull = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304;

            let response = xhr.responseText;

            this._makeCallback(successfull ? this._success : this._error, xhr, [response]);

            this._makeCallback(this._complete, xhr, [response, successfull]);

            // Next queue
            AJAX_QUEUE.next();
        }
    }

    /**
     * Converts parameters to string
     *
     * @param  {Object} obj
     * @return {String}
     */
    Ajax.prototype._params = function(obj)
    {
        let s = [];

        each(obj, (k,v) => s.push(encodeURIComponent(k) + '=' + encodeURIComponent(v)))

        return s.join('&');
    }

    frontbx.set('Ajax', Ajax);
})();