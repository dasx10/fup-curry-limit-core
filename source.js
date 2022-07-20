const curryLimitCore = (limit, executor, ...parameters) => parameters.length < limit
  ? Object.defineProperty((...nextParameters) => curryLimitCore(limit, executor, ...parameters, ...nextParameters), 'length', {
    enumerable   : false,
    configurable : false,
    writable     : false,
    value        : limit - parameters.length
  })
  : executor(...parameters);

module.exports = curryLimitCore;
