import router from '@/router'

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('前置守卫开始')
    next()
})

// 全局后置钩子
router.afterEach((to, from) => {
    console.log('后置守卫结束')
})
