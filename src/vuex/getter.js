export const hour = state => state.hour < 10
    ? '0' + state.hour
    : state.hour

export const minute = state => {
    return state.minute < 10
        ? '0' + state.minute
        : state.minute
}
