<template lang="pug">

div
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
            const isDescendantOfRoot = false //
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
