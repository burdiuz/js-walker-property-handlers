import hasOwn from '@actualwave/has-own';

const getHandler = (data, [name]) => (data ? data[name] : undefined);

const hasHandler = (data, [name]) => hasOwn(data, name);

const setHandler = (data, [name, value]) => {
  if (!data) {
    return false;
  }

  data[name] = value;
  return true;
};

const deletePropertyHandler = (data, [name]) => (data ? delete data[name] : false);

const defaultDataGetter = (node) => node;

const preHandler = (getData, handler) => (target, adapter, ...args) =>
  handler(getData(adapter.toNode(target)), ...args);

export const createROHandlers = (getData = defaultDataGetter) => ({
  get: preHandler(getData, getHandler),
  has: preHandler(getData, hasHandler),
});

export const createHandlers = (getData = defaultDataGetter) => ({
  ...createROHandlers(getData),
  set: preHandler(getData, setHandler),
  deleteProperty: preHandler(getData, deletePropertyHandler),
});
