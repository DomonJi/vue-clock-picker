<template lang="pug">

div(ref="childnode" class="outside-click-container")
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
.outside-click-container {
  /*width:300px;
  height : 405px;
  position: absolute;
  opacity: 1;
  z-index: 2;
  top: 100%;
  left: 0;*/
}
</style>
