import { ajax } from './ajax'

// 方法调用过多,挂载到Vue原型上
function init (Vue) {
    Vue.prototype.$ajax = ajax
}

export default init
