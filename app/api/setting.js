import * as store from './localstore.js'
import KEYS from './storekeys.js'


export const defaluts = {
    application: {
        name: 'application',
        status: true,
        storeKey: KEYS.SETTING_APPLICATION
    },
    bookmark: {
        name: 'bookmark',
        status: true,
        storeKey: KEYS.SETTING_BOOKMARK
    },
    lovesites: {
        name: 'lovesites',
        status: true,
        storeKey: KEYS.SETTING_LOVESITES
    }
}
export const bing = {
    name: 'bing',
    status: true
}

/**
 * 获取一个配置项
 * 当配置项在本地存储不存在时 
 * 需要指定一个默认值 写入本地存储
 * @param {string} key 
 * @param {Object} value 
 */
function fetch(key, value) {
    return new Promise((resolve, reject) => {
        store.getData(key).then(data => {
            if (store.isEmptyData(data)) { //maybe frist store this data
                store.storeData({
                    [key]: value
                })
                resolve(value)
            }
            resolve(data[key])
        })
    })
}

export const fetchApplication = fetch(KEYS.SETTING_APPLICATION, defaluts.application)
export const fetchBookmark = fetch(KEYS.SETTING_BOOKMARK, defaluts.bookmark)
export const fetchLovesites = fetch(KEYS.SETTING_LOVESITES, defaluts.lovesites)
export const fetchBing = fetch(KEYS.SETTING_BING, bing)


// 获取上面3个的数据数组
export const fetchFeatures = Promise.all([fetchApplication, fetchBookmark, fetchLovesites]).then(datas => {

    let data = {
        application: datas[0],
        bookmark: datas[1],
        lovesites: datas[2]
    }
    return Promise.resolve(data)
})



export const modify = (name, value) => {
    switch (name) {
        case 'application':
            set(KEYS.SETTING_APPLICATION, value, defaluts.application)
            break;
        case 'bookmark':
            set(KEYS.SETTING_BOOKMARK, value, defaluts.bookmark)
            break;
        case 'lovesites':
            set(KEYS.SETTING_LOVESITES, value, defaluts.lovesites)
            break;
        case 'bing':
            set(KEYS.SETTING_BING, value, bing)
            break;
        default:
            break;
    }
}

function set(key, value, source) {
    if (typeof value === 'boolean') {

        Object.assign(source, {
            status: value
        })
        store.storeData({
            [key]: source
        })
    }
}


//colors

export const colors = ['#5bc0de','#337ab7','#f0ad4e','#5cb85c','#cdbfe3','#d9534f']
export const setColor = value => {
    store.storeData({
        [KEYS.SETTING_COLOR] : value
    })
}
export const fetchColor = fetch(KEYS.SETTING_COLOR,colors[0])