/* *
*  Author: zhoujun
*  Data: 2021.01.26
*  Description: Request way
* */

import axios from 'axios'

const baseURL = process.env.VUE_APP_BASE_API

// 创建axios对象,并在拦截器里做逻辑处理
const createService = customization => {
    const service = axios.create({ baseURL })
    // 请求拦截
    service.interceptors.request.use(config => {
        if (customization) {
            config = { ...config, ...customization }
        }
        // 请求头部逻辑处理
        config.headers['Access-Token'] = 'abd876ad3f6a4108fbd26a27decffca6'
        return config
    }, error => {
        Promise.reject(error)
    })

    // 响应拦截
    service.interceptors.response.use(response => {
        const res = response.data
        // 可以在该处拦截错误信息，如下
        // const { code, status, msg } = res
        //
        // if ((code && code === 10114)) {
        //   const errorMsg = msg || 'TOKEN已经过期, 请重新登录!'
        //   return Promise.reject(errorMsg)
        // }
        return res
    }, error => {
        Promise.reject(error)
    })
    return service
}

// 处理请求参数体（method、url、data或者params）
const createConfig = (config, data) => {
    const type = config.method === 'post' ? 'data' : 'params'
    const result = {
        method: config.method,
        url: config.url
    }
    if (data && Object.keys(data).length) {
        result[type] = data
    }
    return result
}

// 封装ajax
const ajaxService = createService()

export function ajax (config, data) {
    return new Promise((resolve, reject) => {
        const requestData = createConfig(config, data)
        ajaxService(requestData).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}
