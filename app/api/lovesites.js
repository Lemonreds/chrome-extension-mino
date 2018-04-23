import * as store from './localstore.js'
import KEYS from './storekeys'

const path = './static/sites/'
/**
 * 默认的 lovesites
 */
const defaults = [
    {
        name: "Youtube",
        url: "https://www.youtube.com/",
        icon: `${path}youtube.png`
    },
    {
        name: "500px",
        url: "https://500px.com/",
        icon: `${path}500px.png`
    }, {

        name: "Github",
        url: "https://github.com/",
        icon: `${path}github.png`
    },
    {
        name: "Weibo",
        url: "https://weibo.com/",
        icon: `${path}weibo.png`
    },
    {
        name: "维基百科",
        url: "https://www.wikipedia.org/",
        icon: `${path}wiki.png`
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        icon: `${path}instagram.png`
    },
    {
        name: "Bilibili",
        url: "https://www.bilibili.com/",
        icon: `${path}bilibili.png`
    }
]
/**
 * 获取所有lovesites
 * @return {Array}
 */
export const getLovesites = store.getData(KEYS.LOVESITES).then(data => {

    // 常用网站为空
    if (store.isEmptyData(data)) {
        store.storeData({
            [KEYS.LOVESITES]: defaults
        })
        return defaults
    }

    return data[KEYS.LOVESITES]
})