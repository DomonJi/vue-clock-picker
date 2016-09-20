<template lang="pug">

div(class="time-picker-container")
	div(@click="onFocus" class="time-picker-panel")
		div(class="panel-container") {{time}}

</template>

<script>
export default {
	props: {
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
		onFocus() {},
		onClearFocus() {},
		onHandleHourChange() {},
		onHandleMinuteChange() {},
		renderTimePickerModal() {}
	}
}
</script>

<style lang="css">
</style>
