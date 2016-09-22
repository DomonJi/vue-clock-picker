<template lang="jade">

div(v-bind:style="inlineStyle" @click="handleTimeChange(index,angle)" class="picker-outter")
	div(class="pointer-wrapper" :style="wrapperStyle") {{index}}

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
			type: Function
		}
	},
	data() {
		return {
			inlineStyle: this.getInlineRotateStyle(angle),
			wrapperStyle: this.getRotateStyle(-angle)
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
	}
}
</script>

<style lang="css">
</style>
