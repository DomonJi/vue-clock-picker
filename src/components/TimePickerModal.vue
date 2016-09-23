<template lang="pug">

div(class="time-picker-modal-container")
	div(class="time-picker-modal-header")
		span(@click="handleStepChange(0)") {{hourString}}
		| &nbsp;:&nbsp;
		span(@click="handleStepChange(1)") {{minuteString}}
	div(class="picker-caontainer")
		time-picker-generator(':handle-time-pointer-click'="handleTimePointerClick" ':type'="timeType")

</template>

<script>
import {
	HOURS,
	MINUTES
} from '../constValues.js'
import TimePickerGenerator from './TimePickerGenerator.vue'
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
			step: this.initStep,
			pointerRotate: () => {
				this.resetHourDegree()
			},
			hour: this.initHour,
			minute: this.initMinute
		}
	},
	computed: {
		timeType() {
			return this.step == 0 ? 'hour' : 'minute'
		},
		hourString() {
			return this.hour < 10 ? '0' + this.hour : this.hour
		},
		minuteString() {
			return this.minute < 10 ? '0' + this.minute : this.minute
		}
	},
	components: {
		TimePickerGenerator
	},
	methods: {
		handleStepChange(s) {
			if (s != this.step) {
				this.step = s
				this.pointerRotate = s == 0 ? this.resetHourDegree() : this.resetMinuteDegree()
			}
		},
		handleTimePointerClick(time, rotate) {
			this.pointerRotate = rotate
			this.handleTimeChange(time)
			console.log('time changed')
		},
		handleTimeChange(time) {
			time = parseInt(time)
			if (this.step == 0) {
				this.hour = time
				this.handleHourChange && this.handleHourChange(time)
			} else {
				this.minute = time
				this.handleMinuteChange && this.handleMinuteChange(time)
			}
		},
		resetHourDegree() {
			let h = parseInt(this.hour)
			let pointerR = 0
			HOURS.forEach((hour, index) => {
				if (h === index + 1) {
					pointerR = index < 12 ? 360 * (index + 1) / 12 : 360 * (index + 1 - 12) / 12
				}
			})
			return pointerR
		},
		resetMinuteDegree() {
			let m = parseInt(this.minute)
			let pointerR = 0
			MINUTES.forEach((minute, index) => {
				if (m === index) {
					pointerR = 360 * index / 60
				}
			})
			return pointerR
		}
	}
}
</script>

<style lang="css">
</style>
