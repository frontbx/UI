(function()
{
    /**
     * Component base
     * 
     * @var {class}
     */
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    /**
     * JS Helper reference
     * 
     * @var {object}
     */
    const [attr, extend] = frontbx.import(['attr','extend']).from('_');

    /**
     * Masks.
     * 
     * @var {Map}
     */
    const MASK_HANDLERS = new Map;

    /**
     * Input masker
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const InputMasks = function()
    {

        this.super('.js-mask');
    }

    /**
     * Event binder - Binds all events on button click
     *
     * @access {private}
     */
    InputMasks.prototype.bind = function(node)
    {
        let mask = attr(node, 'data-mask');

        let format = attr(node, 'data-format');

        if (mask && mask.startsWith('regex(')) mask = mask.trim().replace('regex(', '').slice(0, -1);

        if (mask)
        {
            MASK_HANDLERS.set(node, frontbx.InputMasker(node, mask, format));
        }
    }

    /**
     * Event unbinder - Removes all events on button click
     *
     * @access {private}
     */
    InputMasks.prototype.unbind = function(node)
    {
        let handler = MASK_HANDLERS.get(node);

        if (handler) handler.destroy();

        MASK_HANDLERS.delete(node);
    }

    // Load into frontbx DOM core
    frontbx.dom().register('InputMasks', extend(Component, InputMasks));

})();