var TestRelease = (function () {
  'use strict';

  const sum = (a, b) => {
    if (a && b) return a + b;
    console.log('test');
    return 0;
  };

  return sum;

})();
