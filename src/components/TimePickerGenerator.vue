<template lang="pug">

div
	div(v-if="type=='minute'" class="picker_pointer_container")
		picker-points(v-for="(m,i) in MINUTES" v-if="i%5==0" ':index'="i" ':key'="i" ':angle'="6*i" ':handle-time-change'="handleTimePointerClick")
	div(v-else class="picker_pointer_container")
		picker-points(v-for="(h,i) in HOURS" v-if="i%2==0" ':index'="i" ':key'="i" ':angle'="30*i" ':handle-time-change'="handleTimePointerClick")

</template>

<script>
import PickerPoints from './PickerPoints'
import {
	MINUTES,
	HOURS,
	TWELVE_HOURS
} from '../constValues.js'
export default {
	props: {
		type: {
			type: String,
			default: 'hour'
		},
		mode: {
			type: [Number, String],
			default: 24
		},
		handleTimePointerClick: {
			type: Function,
			required: true,
			default: () => {}
		}
	},
	data() {
		return {
			MINUTES,
			HOURS,
			TWELVE_HOURS
		}
	},
	components: {
		PickerPoints
	}
}
</script>

<style lang="css">
</style>
