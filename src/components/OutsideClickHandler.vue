<template lang="pug">

div(ref="childnode" class="outside-click-container" @mouseover="overModal=true" @mouseout="overModal=false")
	slot(name="modal")

</template>

<script>
export default {
  props: {
    onOutsideClick: {
      type: Function,
      default: () => {}
    },
    focused: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      overModal: false
    }
  },
  methods: {
    onOutsideClickHandler: function(e) {
      if (!this.overModal && this.focused) {
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
  width:300px;
  height : 405px;
  position: absolute;
  opacity: 1;
  z-index: 2;
  top: 100%;
  left: 0;
}
</style>
