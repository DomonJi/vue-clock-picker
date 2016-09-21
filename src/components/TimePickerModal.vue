<template lang="jade">


div(class="time-picker-modal-container")
	div(class="time-picker-modal-header")
		span(@click="handleStepChange(0)") {{hour}}
		&nbsp;:&nbsp;
		span(@click="handleStepChange(1)"){{minute}}
	div(class="picker-caontainer")
		time-picker-generator(v-bind:handleTimePointerClick="handleTimePointerClick")
		picker-drag-handler(
			v-bind:pointerRotate="pointerRotate"
			:time="step==0?parseInt(hour):parseInt(minute)"
			:handleTimePointerClick="handleTimePointerClick"
		)

</template>

<script>
import TimePickerGenetator from './TimePickerGenerator'
import PickerDragHandler from './PickerDargHandler'
export default {
    data() {
        return {
            step: 0,
            pointerRotate: 0,
            hour,
            minute
        }
    },
    components: {
        TimePickerGenetator: TimePickerGenerator(this.step == 0 ? 'hour' : 'minute'),
        PickerDragHandler
    },
    methods: {
        handleStepChange(step) {},
        handleTimePointerClick(time, pointerRotate) {},
        resetHourDegree() {},
        resetMinuteDegree() {}
    }
}
</script>

<style lang="css">
</style>
