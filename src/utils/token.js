/* *
*  Author: zhoujun
*  Date: 2020.01.26
*  Description: storage token
*  Reason: cookie、localstorage同一浏览器多窗口打开重新登录。存储token会被共享覆盖
* */

// import Cookies from 'js-cookie'

import store from 'utils/storage'

const TokenKey = 'Admin-Token'

export function getToken () {
    return store.session.get(TokenKey)
}

export function setToken (token) {
    return store.session.set(TokenKey, token)
}

export function removeToken () {
    return store.session.remove(TokenKey)
}

export function clearStorage () {
    return store.session.clear()
}
