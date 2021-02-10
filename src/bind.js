export default (obj, fn) => (...number) => fn.call(obj, ...number);
