'use strict';

class PThreshold {
  constructor (limit = 0) {
    let _resolve;
    let _reject;
    let value = 0;
    const pt = new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    Object.defineProperties(pt, {
      limit: {
        configurable: true,
        visible: true,
        get: () => limit,
        set: x => {
          if (!checkNumber(x)) return
          limit = x;
        }
      },
      value: {
        configurable: true,
        visible: true,
        get: () => value,
        set: x => {
          if (!checkNumber(x)) return
          value = x;
          if (value >= limit) _resolve(value);
        }
      }
    });
    return pt
    function checkNumber (x) {
      if (typeof x === 'number') return true
      _reject(new TypeError('Must be a number'));
      return false
    }
  }
}

module.exports = PThreshold;
