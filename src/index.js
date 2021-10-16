import Vue from "vue";

let vm = new Vue({
  el: '#app',
  data() {
    return {
      a: {
        m: {
          n: 5
        }
      },
      b: [2, 4, 6]
    }
  }
})
console.log(`index.js vm`, vm);