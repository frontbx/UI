/*!
  * frontbx v0.1.0
  * 
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.frontbx = factory());
})(this, (function () { 'use strict';
  
    import './frontbx.js';
 	
    const index_umd = frontbx;

 	return index_umd;
}));