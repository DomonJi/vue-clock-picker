<template lang="jade">

div(class="time-picker-modal-container")
	div(class="time-picker-modal-header")
		span(@click="handleStepChange(0)") {{hour}}
		&nbsp;:&nbsp;
		span(@click="handleStepChange(1)"){{minute}}
	div(class="picker-caontainer")
		time-picker-generator(v-bind:handleTimePointerClick="handleTimePointerClick")

</template>

<script>
import {
	HOURS,
	MINUTES,
	POINTER_RADIUS,
	PICKER_RADIUS,
	MAX_ABSOLUTE_POSITION,
	MIN_ABSOLUTE_POSITION
} from '../ConstValue.js'
import TimePickerGenetator from './TimePickerGenerator'
export default {
	props: {
		initStep: {
			type: Number,
			default: 0
		},
		initHour: {
			type: [Number, String],
			default: '00'
		},
		initMinute: {
			type: [Number, String],
			default: '00'
		},
		handleHourChange: {
			type: Function,
			default: () => {}
		},
		handleMinuteChange: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			step: initStep,
			pointerRotate,
			hour: initHour,
			minute: initMinute
		}
	},
	components: {
		TimePickerGenetator: TimePickerGenerator(this.step == 0 ? 'hour' : 'minute')
	},
	methods: {
		handleStepChange(s) {
			if (s != this.step) {
				this.step = s
				this.pointerRotate = s == 0 ? this.resetHourDegree() : this.resetMinuteDegree()
			}
		},
		handleTimePointerClick(time, pointerRotate) {
			this.pointerRotate = pointerRotate
			this.handleTimeChange(time)
		},
		handleTimeChange(time) {
			time = parseInt(time)
			this.step == 0 ?
				this.handleHourChange && this.handleHourChange() :
				this.handleMinuteChange && this.handleMinuteChange()
		},
		resetHourDegree() {
			let h = parseInt(this.hour)
			let pointR = 0
			HOURS.forEach((hour, index) => {
				if (h === index + 1) {
					pointerR = index < 12 ? 360 * (index + 1) / 12 : 360 * (index + 1 - 12) / 12
				}
			})
			return pointerR
		},
		resetMinuteDegree() {
			let m = parseInt(this.minute)
			let pointR = 0
			MINUTES.forEach((m, index) => {
				if (minute === index) {
					pointerR = 360 * index / 60
				}
			})
			return pointerR
		}
	},
	created() {
		this.pointerRotate = this.resetHourDegree()
	}
}
</script>

<style lang="css">
</style>
