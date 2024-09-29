/**
 * Fast Demo component
 *
 */
(function()
{
	const [Component] = frontbx.get('Component');

	const [on, off, is_array_last, extend] = frontbx.import(['on','off','is_array_last','extend']).from('_');

	let GUIID = 0;

    const DemoComponent = function()
    {
    	this.bound = false;

        this.super(this.selector);
    }

    DemoComponent.prototype.bind = function(node)
    {
        on(node, 'click', this._handler, this);

        this.bound = true;
    }

    DemoComponent.prototype.unbind = function(node)
    {        
        off(node, 'click', this._handler, this);
        
        if (this.unbinder) this.unbinder();
    }

    DemoComponent.prototype._handler = function(e, node)
    {
        return this.handler.call(this, e, node);
    }

    function docsDemo(selector, handler, unbinder)
   	{
   		let demo = extend(Component, DemoComponent);

   		demo.prototype.selector = selector;

   		demo.prototype.handler = handler;

   		demo.prototype.unbinder = unbinder;

   		demo.prototype._ = frontbx._();

   		frontbx.Dom().register(`_DOCS_DEMO_${GUIID++}`, demo);
   	}

    frontbx.set('docsDemo', docsDemo);

})();