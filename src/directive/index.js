const files = require.context('./', false, /\.js$/)
const directives = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    directives[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default directives
