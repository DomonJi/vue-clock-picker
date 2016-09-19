import Vue from 'Vue'
import Vuex from 'Vuex'
import {CHANGE_HOUR, CHANGE_MINUTE} from './mutation-types'

Vue.use(Vuex)

const state = {
    hour: new Date().getHours(),
    minute: new Date().getMinutes()
}

const mutations = {
    [CHANGE_HOUR](state, hour) {
        state.hour = hour
    },
    [CHANGE_MINUTE](state, hour) {
        state.minute = minute
    }
}

export default new Vuex.Store({state, mutations})
