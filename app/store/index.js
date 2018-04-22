/**
 * vuex store 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as Setting from '../api/setting.js'



// 默认设置
const state = {
    featrues: null,
    bing: null,
    color: null
}
// 初始化
Setting.fetchFeatures.then(data => {
    state.featrues = data
})    
Setting.fetchBing.then(v => {
    state.bing = v
}) 
Setting.fetchColor.then(v=>{
    state.color = v
})

// getters
const getters = {
    featrues: state => state.featrues ,
    application: state => state.featrues ? state.featrues.application : null,
    bookmark: state => state.featrues ? state.featrues.bookmark : null,
    lovesites: state => state.featrues ? state.featrues.lovesites : null,
    bing: state => state.bing,
    color: state => state.color
}


const types = {
    SET_BING_VALUE: 'SET_BING_VALUE',
    SET_FEATRUES_VALUE: 'SET_FEATRUES_VALUE',
    SET_COLOR: 'SET_COLOR' 
}

const mutations = {
    [types.SET_BING_VALUE](state, value) {
        state.bing.status = value
    },
    [types.SET_FEATRUES_VALUE](state,{type,value}){
        state.featrues[type].status = value
    },
    [types.SET_COLOR](state,value){
        state.color = value
    } 
}
const actions = {

    // 修改 featrues
    modifyFeatrues({commit,state},{type,value}){       
        commit(types.SET_FEATRUES_VALUE,{type,value})
        Setting.modify(type, value)  
    },  
    // 修改背景图片
    moidfyBing({commit,state},{type,value}) {
        // set value 
        commit(types.SET_BING_VALUE,value)
        // local store
        Setting.modify(type,value)    
    },
    // 设置pure背景颜色
    modifyColor({commit,state},value){        
        commit(types.SET_COLOR,value)
        Setting.setColor(value)
    }
    
}


Vue.use(Vuex)
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})