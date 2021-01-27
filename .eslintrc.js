module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
    // 能不能console
        'no-console': 0,
        // 能不能debugger
        'no-debugger': 0,
        // 缩进
        indent: [ 2, 4 ],
        // 分号结尾
        semi: [ 0, 'always' ],
        // 一行结束后面不要有空格
        'no-trailing-spaces': 2,
        // 引号
        quotes: [ 1, 'single' ],
        // 对象字面量项尾不能有逗号
        'comma-dangle': [ 2, 'never' ],
        // 强制驼峰法命名
        camelcase: 0,
        // 未定义变量不能使用
        'no-undef': 2,
        // 定义变量后未使用报错
        'no-unused-vars': 0,
        // 块语句中的内容不能为空
        'no-empty': 2,
        // 禁止使用不匹配任何字符串的正则表达式
        'no-empty-character-class': 2,
        // 不能有无法执行的代码
        'no-unreachable': 2,
        // 禁止混用tab和空格
        'no-mixed-spaces-and-tabs': [ 2, false ],
        // this别名
        'consistent-this': [ 0, 'that' ],
        // 数组内前后空格
        'array-bracket-spacing': [ 2, 'always' ],
        // 对象属性左右空格
        'object-curly-spacing': [ 2, 'always' ],
        // 组件未使用
        // "vue/no-unused-components": 0,
        // 未定义的var能不能使用
        'vue/no-unused-vars': 0,
        // 对vue里的script进行缩进 2，表示两个字符
        'vue/script-indent': [ 2, 4, { baseIndent: 1 } ],
        // 对vue的template进行缩进 2
        'vue/html-indent': [ 2, 4 ],
        // 组件名使用大驼峰命名
        'vue/name-property-casing': [ 'error', 'PascalCase' ]
    },
    overrides: [ { files: [ '*.vue' ], rules: { indent: 'off' } } ] // 与上面vue/script-indent共同使用
}
