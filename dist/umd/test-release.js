(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TestRelease = factory());
})(this, (function () { 'use strict';

  const sum = (a, b) => {
    if (a && b) return a + b;
    console.log('test');
    return 0;
  };

  return sum;

}));
