import Observer from "./Observer";

export default function observe(value) {
  if (typeof value !== 'object') {
    return
  }
  
  let ob;
  if (value.__ob__ === undefined) {
    ob = new Observer(value)
    value.__ob__ = ob;
  } else {
    ob = value.__ob__
  }
  return ob;
}