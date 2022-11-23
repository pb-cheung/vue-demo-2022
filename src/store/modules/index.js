
// webpack 内置功能
const files = require.context('.', true, /\.js/)

const modules = {}

files.keys().forEach(key => {
    const path = key.replace(/\.\/|\.js/g, '')
    if (path === 'index') return
    let [ namespace, type ] = path.split('/') // [home, actions]
    if (!modules[namespace]) {
        modules[namespace] = {
            namespaced: true
        }
    }

    // 所有action、mutation、state都被添加到了全局上
    // { home: { namespaced: true, actions: {}, mutaions: {} } }
    modules[namespace][type] = files(key).default // 获取文件导出的默认结果
    // console.log(modules)
})

export default modules;
