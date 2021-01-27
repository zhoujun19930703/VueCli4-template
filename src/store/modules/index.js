/* *
*  Author: zhoujun
*  Date: 2021.01.26
*  Description: 自动化整合当前目录文件
* */

const files = require.context('./', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
