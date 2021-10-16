import {def} from "./utils";

const arrayPrototype = Array.prototype
const arrayNewPrototype = Object.create(arrayPrototype)
const arrayMethods = ['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse']
arrayMethods.forEach(function (methodName) {
  const originalMethod = arrayPrototype[methodName]
  def(arrayNewPrototype, methodName, function () {
    console.log('响应式 处理 数组')
    console.log(this)
    return originalMethod.apply(this, arguments);
    
  }, false)
})

export default function defineArray(arr) {
  Object.setPrototypeOf(arr, arrayNewPrototype)
}
