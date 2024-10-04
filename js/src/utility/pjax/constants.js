/**
 * Helper functions.
 * 
 * @var {Function}
 */
const [on, add_class, remove_class, animate, css, dom_element, each, find, find_all, first_children, height, in_array, in_dom, inline_style, inner_HTML, is_empty, is_string, map, normalize_url, remove_from_dom, rendered_style, scroll_pos, trigger_event, width, is_object, is_htmlElement] = frontbx.import(['on','add_class','remove_class','animate','css','dom_element','each','find','find_all','first_children','height','in_array','in_dom','inline_style','inner_HTML','is_empty','is_string','map','normalize_url','remove_from_dom','rendered_style','scroll_pos','trigger_event','width','is_object','is_htmlElement']).from('_');

/**
 * Are we listening for state changes ?
 * 
 * @var {bool}
 */
var POP_LISTENING = false;

/**
 * Default options
 * 
 * @var {object}
 */
const DEFAULT_OPTIONS = 
{
    element:   'body',
    nocache:    true,
    once:       false,
    scrolltop:  false,
    pushstate:  false,
    urlhash:    false,
    animate:    false,
};

/**
 * Wrappers that need "position:relative" to hide overflow.
 * 
 * @var {Array}
 */
const STATIC_POSITIONS = ['static', 'unset', 'initial'];

/**
 * AnimationTimeout
 * 
 * @var {Object}
 */
const CURRENT_REQUESTS = new Map;

/**
 * AnimationTimeout
 * 
 * @var {Object}
 */
const TRANSITION_TIMERS = new Map;