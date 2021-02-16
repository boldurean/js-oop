const magic = (...args) => {
  const sum = args.reduce((acc, num) => acc + num, 0);
  const cb = (...args2) => magic(sum, ...args2);
  cb.valueOf = () => sum;
  return cb;
};
export default magic;
