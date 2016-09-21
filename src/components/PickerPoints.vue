<template lang="jade">

div(v-bind:style="inlineStyle" @click="handleTimeChange(index,angle)" @mousedown="disableMouseDown")
	div(class="pointer-wrapper" :style="wrapperStyle") {{index}}

</template>

<script>
import {
    getInlineRotateStyle,
    getInitialPointerStyle,
    disableMouseDown
} from '../utils'
export default {
    props: {
        index: {
            type: Number,
        },
        angle: {
            type: Number
        },
        handleTimeChange: {
            type: Function
        }
    },
    data() {
        return {
            inlineStyle: getInlineRotateStyle(angle),
            wrapperStyle: getRotateStyle(-angle)
        }
    }
}
</script>

<style lang="css">
</style>
