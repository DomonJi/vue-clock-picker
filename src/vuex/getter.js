import store from './store'
export function getHour() {
    return store.state.hour < 10
        ? '0' + store.state.hour
        : store.state.hour
}
export function getMinute() {
    return store.state.minute < 10
        ? '0' + store.state.minute
        : store.state.minute
}
