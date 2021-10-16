import observe from "./observe";

export default class Vue {
  constructor(options) {
    this._init(options)
    observe(this._data)
  }
  
  _init(options) {
    const vm = this;
    vm.$options = options;
    vm._data = vm.$options.data
    if (typeof vm.$options.data === 'function') {
      vm._data = vm.$options.data()
    }
    
    for (let key in vm._data) {
      this._proxy(vm, '_data', key)
    }
  }
  
  _proxy(vm, sourceKey, key) {
    Object.defineProperty(vm, key, {
      get() {
        return vm[sourceKey][key];
      },
      set(newValue) {
        vm[sourceKey][key] = newValue;
      }
    })
  }
}