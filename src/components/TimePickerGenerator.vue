<template lang="pug">

div
	div(v-if="type=='minute'" id="picker-pointer-container")
		picker-points(v-for="(m,i) in MINUTES" v-if="i%5==0" ':index'="i" ':key'="i" ':angle'="6*i" ':handle-time-change'="handleTimePointerClick" ':picked'="i==minute")
	div(v-else id="picker_pointer_container")
		picker-points(v-for="(h,i) in TWELVE_HOURS" ':index'="interval=='AM'?i:i+12" ':key'="interval=='AM'?i:i+12" ':angle'="30*i" ':handle-time-change'="handleTimePointerClick" ':picked'="interval=='AM'?i==hour:(i+12)==hour")
		div(class="interval-container")
			span(@click="handleIntervalChange('AM')" class="time-picker-interval" ':class'="{active:interval=='AM'}") AM
			| &nbsp;|&nbsp;
			span(@click="handleIntervalChange('PM')" class="time-picker-interval" ':class'="{active:interval=='PM'}") PM

</template>

<script>
import PickerPoints from './PickerPoints'
import {
  MINUTES,
  HOURS,
  TWELVE_HOURS
} from '../constValues.js'
export default {
  props: {
    type: {
      type: String,
      default: 'hour'
    },
    mode: {
      type: [Number, String],
      default: 24
    },
    handleTimePointerClick: {
      type: Function,
      required: true,
      default: () => {}
    },
    hour: {
      type: [Number, String],
      default: 0
    },
    minute: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      MINUTES,
      HOURS,
      TWELVE_HOURS,
      interval: this.hour < 12 ? 'AM' : 'PM'
    }
  },
  components: {
    PickerPoints
  },
  methods: {
    handleIntervalChange(itv) {
      this.interval = itv
    }
  }
}
</script>

<style lang="css">
#picker-pointer-container {
  opacity: 1;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

#picker-pointer-container.animation {
  opacity: 0;
  transform: scale3d(0.85, 0.85, 1);
}

.interval-container {
	transform: translateY(-150%);
	transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

.time-picker-interval {
  cursor: pointer;
}
.time-picker-interval.active {
  color: #3498db;
  cursor: default;
}
.time-picker-interval:hover {
  color: #3498db;
}
</style>
