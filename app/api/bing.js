import * as store from './localstore.js'
import KEYS from './storekeys'

/**
 * format : 默认返回JSON格式
 * idx:   -1最多获取到明天,1 今天
 * n:     数量
 */
let defaults = {
    format: 'js',
    idx: -1,
    n: 1
}

/**
 * 返回数组
 */
const getBingImages = options => {

    let xhr = new XMLHttpRequest(),
        data, config, result, id

    if (typeof options === 'undefined') {
        config = defaults
    } else {
        config = {}
        Object.assign(config, defaults, options)
    }

    xhr.open('GET', `http://cn.bing.com/HPImageArchive.aspx?format=${config.format}&idx=${config.idx}&n=${config.n}`, true)
    xhr.send(null)
    // handler
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    data = JSON.parse(xhr.responseText)
                    result = []
                    id = 0

                    data.images.forEach(image => {
                        result.push({
                            id: id++,
                            url: `https://cn.bing.com${image.url}`,
                            date: image.enddate,
                            copyright: image.copyright
                        })
                    })
                    resolve(result.reverse())
                } else {
                    reject('ERROR.')
                }
            }
        }
    })
}


/**
 * 保存bing图片的url到本地存储
 * @param {string} url 
 */
export const saveBgr = url => {
    store.storeData({
        [KEYS.BACKGROUND]: url
    })
}


const getBgr = () => {
    return new Promise((resolve, reject) => {
        store.getData(KEYS.BACKGROUND).then(data => {
            if (store.isEmptyData(data)) {
                resolve(undefined)
            } else {
                resolve(data[KEYS.BACKGROUND])
            }
        })
    })
}

export const getBing = new Promise((resolve, reject) => {

    let background

    getBgr().then(data => {
        background = data
    })
 
    getBingImages({
        n: 8
    }).then(images => {       
        // 如果没有默认的背景图片设置     
        if (typeof background === 'undefined') {
            background = images[7]            
        }
        resolve({background,images })
    })
})