/**
 * Fades / in out content.
 *
 * 
 * @access {private}
 */
Pjax.prototype._animateSwap = function(target, content)
{
    // Cache wrapper height and width and so we can transition content without changing layout
    const h           = height(target);
    const w           = width(target);
    const padW        = width(target, true);
    const padH        = height(target, true);
    const padL        = parseInt(rendered_style(target, 'padding-left'));
    const padT        = parseInt(rendered_style(target, 'padding-top'));
    const position    = rendered_style(target, 'position');
    const InlOverflow = inline_style(target, 'overflow') || false;
    const InlPosition = inline_style(target, 'overflow') || false;
    const InlHeight   = inline_style(target, 'height') || false;
    const InlWidth    = inline_style(target, 'width') || false;
    const InlStyles   = { overflow: InlOverflow, position: InlPosition, height: InlHeight, width: InlWidth };
    const newStyles   = { overflow: 'hidden', height: `${h}px`, width: `${w}px` };
    const tmpStyles   = { left: `${padL}px`, top: `${padT}px`, height: `${padH}px`, width: `${padW}px` };

    if (STATIC_POSITIONS.includes(position)) newStyles.position = 'relative';

    // Cache content for afterwards
    const oldContnet = first_children(target);
    const newContent = first_children(content);

    // Prep content for inserting
    let tempWrapper = dom_element({tag: 'div', class: 'pjax-temp-swap-wrapper', style: tmpStyles}, null, newContent);

    // Fix dimensions, overflow and positioning while transition.
    css(target, newStyles);

    // Add wrapper class to position content swap while transitioning
    add_class(target, 'pjax-swapping-content');

    // Transition out
    each(oldContnet, (i, node) => add_class(node, 'pjax-prev-content'));

    // Finally append content
    target.appendChild(tempWrapper);

    // Offset height for CSS transitions
    tempWrapper.offsetHeight;

    // Activate animation
    add_class(target, 'active');

    // On complete
    let completedTransition = setTimeout(() =>
    {
        // Remove old content
        each(oldContnet, (i, child) => remove_from_dom(child));

        // Move new content to direct child
        each(newContent, (i, child) => target.appendChild(child));

        // Remove the temp wrapper
        if (tempWrapper.parentNode) tempWrapper.parentNode.removeChild(tempWrapper);

        // Remove pjax swap class on parent
        remove_class(target, ['pjax-swapping-content', 'active']);

        // Set inline styles back to original
        css(target, InlStyles);

        // Append scripts
        this._appendScripts();

    }, 500);

    this._abortAnimations = () =>
    {
        if (tempWrapper.parentNode) tempWrapper.parentNode.removeChild(tempWrapper);

        remove_class(target, ['pjax-swapping-content', 'active']);

        css(target, InlStyles);
    }

    // Wait for transition to end
    TRANSITION_TIMERS.set(target, completedTransition);
}