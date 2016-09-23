<template lang="pug">

div(ref="childnode")
	slot(name="modal")

</template>

<script>
export default {
	props: {
		onOutsideClick: {
			type: Function,
			default: () => {}
		}
	},
	methods: {
		onOutsideClickHandler: function(e) {
			let isDescendantOfRoot = true //this.$refs.childnode.contains(e.target) //
			if (!isDescendantOfRoot) {
				this.onOutsideClick && this.onOutsideClick()
			}
		}
	},
	mounted() {
		document.addEventListener('click', this.onOutsideClickHandler)
	},
	deforeDestroy() {
		document.removeEventListener('click', this.onOutsideClickHandler)
	}
}
</script>

<style lang="css">
</style>
