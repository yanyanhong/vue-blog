
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        list: []
      },
      mutations: {
        initList (state,list) {
           state.list = list
        },
        updateList (state,list) {
            state.list = list
        },
        reverse(state){
            state.list.reverse();
        }
      },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})