import {CHANGE_HOUR, CHANGE_MINUTE} from './mutation-types'
export const changeHour = (store, hour) => store.commit(CHANGE_HOUR, hour)

export const changeMinute = (store, minute) => store.commit(CHANGE_MINUTE, minute)
