(function()
{
    const EXCLUDED_SERVICES = ['services','boot','set','singleton','has','delete','get','import','bind','_setproto','_singletonfunc','_isinvokable','_isinvoked','_newinstance','_storeobj','_normalizekey','_is_func'];

    /**
     * Application core
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Application = function()
    {
        this.version_major = '0';

        this.version_minor = '0';

        this.version_patch = '2';

        this.version = `${this.version_major}.${this.version_minor}.${this.version_patch }`;
    }

    /**
     * Returns registered services.
     *
     * @access {public}
     * @return {Object}
     */
    Application.prototype.services = function()
    {
        let proto = this.prototype || Object.getPrototypeOf(this);

        let ret = {};

        for (let key in proto)
        {
            let val = proto[key];

            if (!EXCLUDED_SERVICES.includes(key.toLowerCase()) && {}.toString.call(val) === '[object Function]')
            {
                ret[key] = val;
            }
        }

        return ret;
    }

    /**
     * Called when the application is first initialized
     *
     * @access {public}
     */
    Application.prototype.boot = function()
    {
        this.dom().boot();

        this._().trigger_event(window, 'frontbx:ready', this);
    }

    /**
     * Get the DOM component
     *
     * @access {public}
     * @return {object}
     */
    Application.prototype.dom = function()
    {
        return this.Dom();
    }

    Container._().trigger_event(window, 'frontbx:loading');

    const app = Container._().extend(Container, new Application);

    window.Container = undefined;

    delete window['Container'];

    // Set global
    window.frontbx = app;

})();