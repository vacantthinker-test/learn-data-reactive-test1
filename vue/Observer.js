import {def} from "./utils";
import defineReactive from "./defineReactive";
import defineArray from "./defineArray";
import observe from "./observe";

export default class Observer {
  constructor(value) {
    def(value, '__ob__', this, false)
    if (Array.isArray(value)) {
      defineArray(value)
      this.observerArray(value);
    } else {
      this.walk(value);
    }
  }
  
  walk(obj) {
    for (let key in obj) {
      defineReactive(obj, key)
    }
  }
  
  observerArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i]
      observe(item)
    }
  }
}