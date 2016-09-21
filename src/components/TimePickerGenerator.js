import Vue from 'vue'
import PickerPoints from './PickerPoints'
import {MINUTES, HOURS, TWELVE_HOURS} from '../ConstValue.js'
export const TimePickerGenerator = (type = 'hour', mode = 24) => {
    return Vue.component('TimePickerGenetator', {
        props: {
            handleTimePointerClick: {
                type: Function,
                default: () => {}
            }
        },
        created() {
            this.handleTimePointerClick = this.handleTimePointerClick.bind(this)
        },
        methods: {
            renderMinutePointes() {
                return MINUTES.map((m, index) => {
                    let angle = 360 * index / 60
                    if (index % 5 === 0) {
                        return (<PickerPoint index={index} key={index} angle={angle} handleTimeChange={this.handleTimePointerClick}/>)
                    }
                })
            },
            renderHourPointes() {
                const hours = parseInt(mode) === 24
                    ? HOURS
                    : TWELVE_HOURS
                return hours.map((h, index) => {
                    let pointClass = index < 12
                        ? "picker_point point_inner"
                        : "picker_point point_outter"
                    let angle = index < 12
                        ? 360 * (index + 1) / 12
                        : 360 * (index + 1 - 12) / 12
                    return (<PickerPoint index={index + 1} key={index} angle={angle} pointClass={pointClass} handleTimeChange={this.handleTimePointerClick}/>)
                })
            }
        },
        render(h) {
            return <div id="picker_pointer_container">
                {type === 'hour'
                    ? this.renderHourPointes()
                    : this.renderMinutePointes()}
            </div>
        }
    })
}
