/* *
*  Author: zhoujun
*  Date: 2021.01.26
*  Description: Config International Language
* */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    en: {

    },
    // 中文默认为zh,因为平台中文传参为cn,替换掉方便传参
    cn: {

    }
}

export default new VueI18n({
    locale: 'cn',
    messages
})
