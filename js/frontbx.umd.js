/**
 * --------------------------------------------------------------------------
 * Frontbx UMD
 * 
 * @version  {0.0.4}
 * @see      {https://github.com/frontbx/ui}
 * @licensed {https://github.com/frontbx/ui/blob/main/LICENSE}
 * --------------------------------------------------------------------------
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object' && typeof module === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Global variable
    root.myModule = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  
    import './frontbx.js';

    return frontbx;
});