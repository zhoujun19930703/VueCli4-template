import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'style/index.scss'

// 引入路由守卫
import 'utils/permission'
// 方法注入到vue原型上
import init from './utils'
// 自定义指令
import directive from './directive'
for (const n in directive) {
    Vue.directive(n, directive[n])
}
init(Vue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
