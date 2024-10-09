(function()
{
    /**
     * Component base
     * 
     * @var {class}
     */
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [is_undefined, map, dom_element, extend] = frontbx.import(['is_undefined','map','dom_element','extend']).from('_');

    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const AVAILABLE_OPTIONS = ['background', 'lazy', 'ratio', 'placeholder', 'src', 'grayscale'];

    /**
     * Toggle active on lists
     *
     * @author    {Joe J. Howard}
     * @copyright {Joe J. Howard}
     * @license   {https://raw.githubusercontent.comfrontbx/uimaster/LICENSE}
     */
    const Image = function()
    { 
        this.super();
    }

    /**
     * @inheritdoc
     * 
     */
    Image.prototype.render = function(props)
    {
        let attrs        = map({...props}, (k, v) => !AVAILABLE_OPTIONS.includes(k) ? v : false );
        let isBackground = props.background;
        let isRatio      = !is_undefined(props.ratio);
        let isLazy       = is_undefined(props.lazy) ? false : props.lazy;
        let src          = isLazy ? (props.placeholder || window.LAZY_FALLBACK_IMAGE) : props.src;
        let dataSrc      = isLazy ? props.src : false;
        
        if (!attrs.style) attrs.style = '';
        if (!attrs.class) attrs.class = '';

        if (isLazy)
        {
            attrs.class  += ` lazyload js-lazyload ${props.grayscale ? 'grayscale' : ''}`;
            attrs.dataSrc = dataSrc;
        }

        // Background image
        if (isBackground)
        {
            attrs.class += ' bg-image';
            attrs.style += `;background-image: url(${src})`;
            
            if (isRatio) attrs.class += ` ratio-${props.ratio}`;

            return dom_element({...attrs, tag: 'div'});
        }

        attrs.src = src;

        let image = dom_element({...attrs, src: src, dataSrc: dataSrc, tag: 'img'})

        // Ratio image
        if (isRatio)
        {
            return dom_element({tag: 'div', class: `ratio-img ratio-${props.ratio}`}, null, image);
        }

        return image;
    }

    // Load into frontbx DOM core
    frontbx.dom().register('Image', extend(Component, Image));
    
})();