'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hasOwn_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

const hasOwn = (
  (has) =>
  (target, property) =>
  Boolean(target && has.call(target, property))
)(Object.prototype.hasOwnProperty);

exports.hasOwn = hasOwn;
exports.default = hasOwn;
});

var hasOwn = unwrapExports(hasOwn_1);
var hasOwn_2 = hasOwn_1.hasOwn;

const getHandler = (data, [name]) => data ? data[name] : undefined;

const hasHandler = (data, [name]) => hasOwn(data, name);

const setHandler = (data, [name, value]) => {
  if (!data) {
    return false;
  }

  data[name] = value;
  return true;
};

const deletePropertyHandler = (data, [name]) => data ? delete data[name] : false;

const defaultDataGetter = node => node;

const preHandler = (getData, handler) => (target, adapter, ...args) => handler(getData(adapter.toNode(target)), ...args);

const createROHandlers = (getData = defaultDataGetter) => ({
  get: preHandler(getData, getHandler),
  has: preHandler(getData, hasHandler)
});

const createHandlers = (getData = defaultDataGetter) => Object.assign({}, createROHandlers(getData), {
  set: preHandler(getData, setHandler),
  deleteProperty: preHandler(getData, deletePropertyHandler)
});

exports.createROHandlers = createROHandlers;
exports.createHandlers = createHandlers;
//# sourceMappingURL=index.js.map
