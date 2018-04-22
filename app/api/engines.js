import * as store from './localstore'

// 获取支持的所有搜素引擎
export const allEngines = [{
    name: "Google",
    icon: "./static/engines/google.png",
    action: "https://www.google.com/search",
    inputName: "q"
}, {
    name: "Bing",
    icon: "./static/engines/bing.png",
    action: "https://www.bing.com/search",
    inputName: "q"
}, {
    name: "Baidu",
    icon: "./static/engines/baidu.png",
    action: "https://www.baidu.com/s?",
    inputName: "wd"
}, {
    name: "Yahoo",
    icon: "./static/engines/yahoo.png",
    action: "https://search.yahoo.com/search?",
    inputName: "p"

}]

import KEYS from './storekeys'

/**
 * 获取默认的搜索引擎 index 
 */
export const getEngineIndx = store.getData(KEYS.ENGINIE).then(data => {
     
    /**
     * 设置默认搜索引擎
     */
    if (store.isEmptyData(data)) {
        let defaults = {
            [KEYS.ENGINIE]: 0
        }
        store.storeData(defaults)
        return defaults[KEYS.ENGINIE]
    }    
    return data[KEYS.ENGINIE]
})

/**
 *  设置新的搜索引擎
 * @param {number} index 
 */
export const setEngineIndx = index => {
    store.storeData({
        [KEYS.ENGINIE]: index
    })
}