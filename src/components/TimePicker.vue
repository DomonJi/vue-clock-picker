<template lang="html">
	<div class="time-picker-container">
		<div class="time-picker-panel" @click="onFocus">
			<div class="panel-container">
				{{hourString}}:{{minuteString}}
			</div>
		</div>
		<outside-click-handler :on-outside-click="onClearFocus">
			<time-picker-modal
				:init-hour="hour" :init-minute="minute" slot="modal"
				:handle-hour-change="handleHourChange" :handle-minute-change="handleMinuteChange"
				:handle-time-change="handleTimeChange" v-if="focused"
			/>
		</outside-click-handler>
	</div>
</template>

<script>
import OutsideClickHandler from './OutsideClickHandler'
import TimePickerModal from './TimePickerModal'
export default {
	components: {
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
		hourString() {
			return this.hour < 10 ? '0' + this.hour : this.hour
		},
		minuteString() {
			return this.minute < 10 ? '0' + this.minute : this.minute
		}
	},
	methods: {
		onFocus() {
			this.focused = true
			this.onFocusChanged && this.onFocusChanged(true)
		},
		onClearFocus() {
			this.focused = false
			this.onFocusChanged && this.onFocusChanged(false)
		},
		handleHourChange(hour) {
			this.hour = hour
			this.onHourChanged && this.onHourChanged(this.hour)
			this.handleTimeChange({
				hour: this.hour
			})
		},
		handleMinuteChange(minute) {
			this.minute = minute
			this.onMinuteChanged && this.onMinuteChanged(this.minute)
			this.handleTimeChange({
				minute: this.minute
			})
		},
		handleTimeChange(timeObj) {
			this.hour = timeObj['hour'] ? timeObj['hour'] : this.hour
			this.minute = timeObj['minute'] ? timeObj['minute'] : this.minute
			this.onTimeChanged && this.onTimeChanged({
				hour: this.hour,
				minute: this.minute
			})
		}
	}
}
</script>

<style lang="css">
</style>
