<template lang="html">
   <div class="date-panel">
       {{hour}}:{{minute}}
   </div>
</template>

<script>
import {
    getHour,
    getMinute
} from '../vuex/getter'
export default {
    data() {
        return {}
    },
    computed: {
        hour: getHour,
        minute: getMinute
    },
    methods: {},
    components: {}
}
</script>

<style lang="css">
.date-panel {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height:40px;
    width: 100px;
    background-color: #42b983;
    font-size: 24px;
    line-height: 40px;
}
</style>
