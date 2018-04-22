
/**
 * 获取整个书签树
 */
const getRoot = new Promise((resolve, reject) => {
    chrome.bookmarks.getTree(root => {
        resolve(root[0])
    })
})

/**
 * 获取一级分类
 */
export const getCategories = getRoot.then(root => {

    return new Promise((resolve, reject) => {
        chrome.bookmarks.getChildren(root.id, (categories) => {
            let data = []
            categories.forEach(category => {
                data.push({
                    id: category.id,
                    title: category.title
                })
            })
            resolve(data)
        })
    })
})

/**
 * 获取分类下所有书签
 * @param {string} id
 */
export const getBookMarksById = id => {

    if (typeof id === 'number') {
        id = id.toString()
    }
    return new Promise((resolve, reject) => {
        chrome.bookmarks.getChildren(id, bookmarks => {           
            bookmarks.forEach(bookmark => {
                bookmark.icon = `chrome://favicon/${bookmark.url}`
            })
            resolve(bookmarks)
        })
    })
}