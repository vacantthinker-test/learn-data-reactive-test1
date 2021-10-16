export function def(target, key, val, isEumerable) {
  Object.defineProperty(target, key, {
    value: val,
    enumerable: isEumerable,
    configurable: true,
    writable: true
  })
}