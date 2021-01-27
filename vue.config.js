const timeStamp = new Date().getTime()

module.exports = {
    // 默认值 '/',这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
    publicPath: '/',
    // 打包输出文件夹
    outputDir: 'dist',
    // 打包存放css js的目录，默认为 ''，相对于outputDir的文件夹,static，表示在里面创建了一个static文件夹
    assetsDir: 'static',
    // 默认值 index.html，也是相对于 outputDir, 若是输入为 zhoujun.html,则打包后的html为 zhoujun.html
    indexPath: 'index.html',
    // 文件名hash,默认值为true,默认情况下，生成的静态资源在它们的文件名中包含了hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的如果你无法使用 Vue CLI 生成的 index HTML,你可以通过将这个选项设为false来关闭文件名哈希
    filenameHashing: true,
    // pages 多页配置,默认值是 undefined
    // pages: {
    // },
    // 默认为true,打包生成部分map文件,map文件的作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
    productionSourceMap: false,
    // 设置启动时是否校验eslit的代码格式
    lintOnSave: true,
    configureWebpack: {
    // js文件加上时间戳预防缓存
        output: {
            filename: `js/[name].${timeStamp}.js`,
            chunkFilename: `js/[name].${timeStamp}.js`
        },
        // 配置路径优化
        resolve: {
            alias: {
                views: '@/views',
                assets: '@/assets',
                utils: '@/utils',
                components: '@/components',
                style: '@/style'
            }
        }
    }
}
