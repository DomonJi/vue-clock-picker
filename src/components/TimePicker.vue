<template lang="jade">

div(class="time-picker-container")
	div(@click="onFocus" class="time-picker-panel")
		div(class="panel-container") {{time}}
	outside-click-handler(v-bind:onOutsideClick="onClearFocus")
		time-picker-modal(v-show="focused" :hour="hour" :minute="minute"
		:handleHourChange="handleHourChange" :handleMinuteChange-"handleMinuteChange"
		:handleTimeChange="handleTimeChange")

</template>

<script>
import OutsideClickHandler from './OutsideClickHandler'
import TimePickerModal from './TimePickerModal'
export default {
	component: {
		OutsideClickHandler,
		TimePickerModal
	},
	props: {
		mode: {
			type: [String, Number],
			default: '24',
			validator: value => value == 24 || value == 12
		},
		defaultHour: {
			type: [String, Number],
			default: new Date().getHours(),
			validator: value => value >= 0 && value < 24
		},
		defaultMinute: {
			type: [String, Number],
			default: new Date().getMinutes(),
			validator: value => value >= 0 && value < 60
		},
		defaultFocused: {
			type: Boolean,
			default: false,
		},
		onFocusChanged: {
			type: Function,
			default: () => {}
		},
		onHourChanged: {
			type: Function,
			default: () => {}
		},
		onMinuteChanged: {
			type: Function,
			default: () => {}
		},
		onTimeChanged: {
			type: Function,
			default: () => {}
		}
	},
	data() {
		return {
			hour: this.defaultHour,
			minute: this.defaultMinute,
			focused: this.defaultFocused
		}
	},
	computed: {
		time() {
			return `${this.hour}:${this.minute}`
		}
	},
	methods: {
		onFocus() {
			this.focused = true
			this.onFocusChanged && this.onFocusChanged(true)
		},
		onClearFocus() {
			this.focused = falese,
				this.onFocusChanged && this.onFocusChanged(false)
		},
		HandleHourChange() {
			this.onHourChanged && this.onHourChanged(this.hour)
			this.handleTimeChange({
				hour: this.hour
			})
		},
		HandleMinuteChange() {
			this.onMinuteChanged && this.onMinuteChanged(this.minute)
			this.handleTimeChange({
				minute: this.minute
			})
		},
		HandleTimeChange(timeObj) {
			this.hour = timeObj['hour'] ? timeObj['hour'] : this.hour
			this.minute = timeObj['minute'] ? timeObj['minute'] : this.minute
		}
	}
}
</script>

<style lang="css">
</style>
