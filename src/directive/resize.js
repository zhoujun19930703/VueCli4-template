/* *
*  Author: zhoujun
*  Date: 2021.01.27
*  Description: 元素宽高改变时触发(用于折叠、页面像素改变echarts重新刷新) 指令（v-resize）
* */
export default {
    bind (el, binding) {
        let width = ''; let height = ''

        function get () {
            const style = document.defaultView.getComputedStyle(el)
            if (width !== style.width || height !== style.height) {
                binding.value({ width, height })
            }
            width = style.width
            height = style.height
        }

        el.__vueResize__ = setInterval(get, 500)
    },
    unbind (el) {
        clearInterval(el.__vueResize__)
    }
}
