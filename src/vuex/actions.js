import {CHANGE_HOUR, CHANGE_MINUTE} from './mutation-types'
export function changeHour(store, hour) {
    store.dispatch(CHANGE_HOUR)
}
export function changeMinute(store, hour) {
    store.dispatch(CHANGE_MINUTE)
}
