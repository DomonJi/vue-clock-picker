import Vue from 'vue'
import Vuex from 'vuex'
import {CHANGE_HOUR, CHANGE_MINUTE} from './mutation-types'
import * as actions from './actions'
import * as getters from './getter'

Vue.use(Vuex)

const state = {
    hour: new Date().getHours(),
    minute: new Date().getMinutes()
}

const mutations = {
    [CHANGE_HOUR](state, hour) {
        state.hour += hour
        state.hour = state.hour > 23
            ? state.hour - 24
            : state.hour
    },
    [CHANGE_MINUTE](state, hour) {
        state.minute += minute
        state.minute = state.minute > 59
            ? state.minute - 24
            : state.minute
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production',
    actions,
    getters
})
