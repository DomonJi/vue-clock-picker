<template lang="pug">

div(':style'="inlineStyle" '@click'="handleTimeChange(index,angle)" class="picker-outter")
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
		}
	},
	data() {
		return {
			inlineStyle: {},
			wrapperStyle: {}
		}
	},
	methods: {
		getInlineRotateStyle(degree) {
			let transX = Math.cos(degree) * 200
			let transY = Math.sin(degree) * 200
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
	mounted() {
		this.inlineStyle = this.getInlineRotateStyle(this.angle)
		this.wrapperStyle = this.getRotateStyle(-this.angle)
	}
}
</script>

<style lang="css">
</style>
