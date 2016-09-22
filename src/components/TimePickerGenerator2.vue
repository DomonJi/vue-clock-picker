<template lang="jade">



div(v-if="type=='minute'" class="picker_pointer_container")
	picker-points(v-for="(m,i) in MINUTES" :index="i" :key="i" :angle="60*i" :handleTimeChange="handleTimePointerClick")
div(v-else class="picker_pointer_container")
	picker-points(v-for="(h,i) in HOURS" :index="i+1" :key="i" :angle="60*i" :handleTimeChange="handleTimePointerClick")



</template>

<script>
import PickerPoints from './PickerPoints'
import {
    MINUTES,
    HOURS,
    TWELVE_HOURS
} from '../ConstValue.js'
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
            default: () => {}
        }
    },
    components: {
        PickerPoints
    }
}
</script>

<style lang="css">
</style>
