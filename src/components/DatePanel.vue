<template lang="html">
   <div cursor=pointer class="date-panel" @click="changeHour(1)">
       {{hour}}:{{minute}}
   </div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    computed: mapGetters(['hour', 'minute']),
    methods: mapActions(['changeHour'])
}
</script>

<style scoped>
.date-panel {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    background-color: #42b983;
    font-size: 24px;
    line-height: 40px;
}
</style>
