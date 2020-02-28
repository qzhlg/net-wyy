import Vue from 'vue'
import vuex from 'vuex'
import Topic from './module/topic'
import createLogger from 'vuex/dist/logger'
Vue.use(vuex)
const store =new vuex.Store({
    // 非严格模式
    strict:false,
    modules:{
        Topic
    },
    plugins: [createLogger()]
})
window.store=store
export default store
