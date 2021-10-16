export default function defineReactive(target, key, val){
  if (arguments.length === 2) {
    val = target[key]
  }
  
  Object.defineProperty(target, key,{
    configurable: true,
    enumerable: true,
    get() {
      console.log(`响应式 获取值`)
      console.log(`key: ${key}`)
      console.log(`val:`, val)
      return val
    },
    set(newValue) {
      console.log('响应式 更新值')
      console.log(`key: ${key}`)
      console.log(`newValue: `, newValue)
      val = newValue
    }
  })
}