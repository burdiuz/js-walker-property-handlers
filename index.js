'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var hasOwn = _interopDefault(require('@actualwave/has-own'));

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
