<template lang="pug">

div(':style'="inlineStyle" '@click'="handleTimeChange(index,angle)" class="picker-point" ':class'="[pointClass,{current:picked}]")
	div(class="pointer-wrapper" ':style'="wrapperStyle") {{index}}

</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },
    angle: {
      type: Number
    },
    handleTimeChange: {
      type: Function,
      required: true,
      default: () => {}
    },
    pointClass: {
      type: String,
      default: 'point-outter'
    },
    picked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getInlineRotateStyle(degree) {
      return {
        transform: `translateX(-50%) rotate(${degree}deg)`
      }
    },
    getRotateStyle(degree) {
      return {
        transform: `rotate(${degree}deg)`
      }
    }
  },
  computed: {
    inlineStyle() {
      return this.getInlineRotateStyle(this.angle)
    },
    wrapperStyle() {
      return this.getRotateStyle(-this.angle)
    }
  }
}
</script>

<style lang="css">
.picker-point {
  left: 50%;
  cursor: pointer;
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
}
.picker-point.current{
	background-color:#3498db;
	color:#fff !important;
	transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.picker-point.point-outter {
  top: 10px;
  color: #5f5f5f;
  transform-origin: center 115px;
}

.picker-point.point-inner {
  top: 40px;
  color: #a7a7a7;
  transform-origin: center 90px;
}
</style>
