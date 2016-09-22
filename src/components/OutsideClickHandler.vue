<template lang="pug">

div(ref="childnode")
	slot(name="children")

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
		onOutsideClickHandler: (function(e) {
			const isDescendantOfRoot = this.$ref.childnode.contains(e.target) //
			if (!isDescendantOfRoot) {
				this.onOutsideClick && this.onOutsideClick()
			}
		}).bind(this)
	},
	created() {
		document.addEventListener('click', onOutsideClickHandler)
	},
	destroyed() {
		document.removeEventListener('click', onOutsideClickHandler)
	}
}
</script>

<style lang="css">
</style>
