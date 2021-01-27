/* *
*  Author: zhoujun
*  Date: 2021.01.27
*  Description: 函数防抖 指令（v-debounce）
*  params: 300 (限制0.3s内点击多次只执行最后一次)
* */
export default {
    inserted: function (el, binding) {
        let timer
        el.addEventListener('click', () => {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                binding.value()
            }, 300)
        })
    }
}
