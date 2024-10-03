/**
 * Insert response.
 *
 * @access {private}
 * @param  {string}  HTML HTML string response from server
 */
Pjax.prototype._insertResponse = function(HTML)
{
    // Parse the HTML
    this._parseResponse(HTML);

    // Update meta
    this._updateMeta();

    // Insert content
    if (this.options.animate)
    {
        this._animateSwap(this._targetElem, this._responseElem);
    }
    else
    {
        inner_HTML(this._targetElem, this._responseElem.innerHTML);

        this._appendScripts();
    }
}

/**
 * Parse response from server.
 *
 * @access {private}
 * @param  {string}  HTML HTML string response from server
 */
Pjax.prototype._parseResponse = function(HTML)
{
    let responseDoc = this._parseHTML(HTML);

    this._responseTitle = this._findDomTitle(responseDoc);

    this._responseDesc = this._findDomDesc(responseDoc);

    let currScripts = this._getScripts(document);

    let newScripts = this._getScripts(responseDoc);

    this._newScripts = this._scriptsDiff(currScripts, newScripts);

    this._responseDoc = this._removeScripts(responseDoc);

    console.log(this._newScripts);

    // Move scripts to head incase we're replacing content
    each(currScripts, (i, script) => script.node.parentNode.nodeName.toLowerCase() !== 'head' ? find('head').appendChild(script.node) : null);

    this._findElems();
}

/**
 * Finds target and response DOM elements.
 *
 * @access {private}
 */
Pjax.prototype._findElems = function()
{
    // Default to document bodys
    let targetEl   = document.body;
    let responseEl = this._responseDoc.body;
    let options    = this.options;

    // Selector
    if (options.element && options.element !== document.body)
    {
        if (is_string(options.element))
        {
            targetEl = find(options.element);

            // Try to find the target element in the response
            let tmpResponseEl = find(options.element, this._responseDoc);

            if (tmpResponseEl) responseEl = tmpResponseEl;

        }
        // DOM Node
        else if (in_dom(options.element))
        {
            // Target is options.element
            targetEl = options.element;
        }
    }

    this._targetElem   = targetEl;
    this._responseElem = responseEl;
}

/**
 * Append new scripts.
 * 
 * Note that appending or replacing content via 'innerHTML' or even
 * native Nodes with scripts inside their 'innerHTML'
 * will not load scripts so we need to compare what scripts have loaded
 * on the current page with any scripts that are in the new DOM tree 
 * and load any that don't already exist
 *
 * @access {private}
 */
Pjax.prototype._appendScripts = function()
{
    if (this._newScripts.length > 0)
    {
        return each(scripts, (i, script) =>  this._appendScript(script, i === scripts.length -1));
    }

    this._contentComplete();
}

/**
 * Append individual script or stylsheet.
 *
 * @access {private}
 * @param  {Object}  scriptObj Parse script config
 * @param  {Boolean} isLast    Is this the last script to load
 */
Pjax.prototype._appendScript = function(scriptObj, isLast)
{
    let element = document.createElement(scriptObj.type);

    element.type = scriptObj.type === 'script' ? 'text/javascript' : 'text/css';

    if (scriptObj.type === 'script')
    {
        element.async = false;

        if (!scriptObj.inline)
        {
            element.src = scriptObj.src;

            if (isLast) element.onload = () => this._contentComplete();
        }
        else
        {
            element.innerHTML = scriptObj.src;

            if (isLast) this._contentComplete()
        }
    }
    else
    {
        element.rel = 'stylesheet';
        
        element.href = scriptObj.src;

        if (isLast) element.onload = () => this._contentComplete();
    }

    find('head').appendChild(element);
}

/**
 * Filter scripts with unique key/values into an array
 *
 * @access {private}
 * @param  {Document}  doc Document element
 * @return {array}
 */
Pjax.prototype._getScripts = function(doc)
{
    var ret     = [];
    var scripts = find_all('script, link[rel=stylesheet]', doc);

    each(scripts, function(i, script)
    {
        let type    = script.nodeName.toLowerCase();
        let src     = type === 'link' ? normalize_url(script.getAttribute('href')) : normalize_url(script.getAttribute('src'));
        let inline  = false;
        let content = null;
        let node    = script;

        if (!src)
        {
            inline  = true;
            src     = null;
            content = script.innerHTML.trim()
        }

        ret.push({type, src, inline, node, content });
    });

    return ret;
}

/**
 * Remove all scripts from a document
 *
 * @access {private}
 * @param  {Document} doc Document element
 * @return {Document}
 */
Pjax.prototype._removeScripts = function(doc)
{
    var scripts = find_all('script, link[rel=stylesheet]', doc);

    each(scripts, (i, script) => script.parentNode.removeChild(script));

    return doc;
}

/**
 * Try to find the page title in a DOM tree.
 *
 * @access {private}
 * @param  {Document}     doc Document element
 * @return {string|false}
 */
Pjax.prototype._findDomTitle = function(doc)
{
    var title = doc.getElementsByTagName('title');

    if (title.length)
    {
        return title[0].innerHTML.trim();
    }

    return false;
}

/**
 * Try to find the page meta description.
 *
 * @access {private}
 * @param  {Document}     doc Document element
 * @return {string|false}
 */
Pjax.prototype._findDomDesc = function(doc)
{
    var desc = find('meta[name=description]', doc);

    if (desc)
    {
        return desc.content.trim();
    }

    return false;
}

/**
 * Parse HTML from string into a document
 *
 * @access {private}
 * @param  {string}    html HTML as a string (with or without full doctype)
 * @return {Document}
 */
Pjax.prototype._parseHTML = function(html)
{
    var parser = new DOMParser();

    return parser.parseFromString(html, 'text/html');
}

/**
 * Diff current scripts with new scripts
 *
 * @access {private}
 * @param  {Array}   currScripts Parsed current scripts array
 * @param  {Array}   newScripts  Parsed new scripts array
 * @param  {Array}
 */
Pjax.prototype._scriptsDiff = function(currScripts, newScripts)
{
    return map(newScripts, (j, script) =>
    {
        let ret = script;

        each(currScripts, (i, cScript) =>
        {   
            // Inline scripts
            if (script.inline && cScript.inline && cScript.content === script.content)
            {
                currScripts.splice(i, 1);

                ret = false;

                return false;
            }
            if (!script.inline && !cScript.inline && cScript.src === script.src)
            {
                currScripts.splice(i, 1);

                ret = false;

                return false;
            }
        });

        return ret;
    });
}

/**
 * Updated Meta title and description.
 *
 * @access {private}
 */
Pjax.prototype._updateMeta = function()
{
    let descrMeta = find('meta[name=description]');

    if (this._responseTitle) document.title = this._responseTitle;

    if (this._responseDesc && descrMeta) descrMeta.content = this._responseDesc;
}
