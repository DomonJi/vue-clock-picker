<template lang="html">

</template>

<script>
import {
    degree2Radian,
    mousePosition,
    getRotateStyle,
    getInitialPointerStyle,
    getStandardAbsolutePosition
} from '../utils.js'
import {
    PICKER_RADIUS,
    MIN_ABSOLUTE_POSITION,
    MAX_ABSOLUTE_POSITION,
    POINTER_RADIUS
} from '../ConstValue.js'
export default {
    data() {
        return {
            pointerRotate: this.initRotate,
            draging: false
        }
    },
    props: {
        initRotate: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="css">
</style>
