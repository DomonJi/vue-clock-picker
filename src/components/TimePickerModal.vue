<template lang="pug">

div(class="time-picker-modal-container")
	div(class="time-picker-modal-header")
		span(@click="handleStepChange(0)" class="time-picker-header" ':class'="{active:!step}") {{hourString}}
		| &nbsp;:&nbsp;
		span(@click="handleStepChange(1)" class="time-picker-header" ':class'="{active:step}") {{minuteString}}
	div(class="picker-container")
		time-picker-generator(':handle-time-pointer-click'="handleTimePointerClick" ':type'="timeType" ':hour'="hour" ':minute'="minute")

</template>

<script>
import {
  HOURS,
  MINUTES
} from '../constValues.js'
import TimePickerGenerator from './TimePickerGenerator.vue'
export default {
  props: {
    initStep: {
      type: Number,
      default: 0
    },
    initHour: {
      type: [Number, String],
      default: '00'
    },
    initMinute: {
      type: [Number, String],
      default: '00'
    },
    handleHourChange: {
      type: Function,
      default: () => {}
    },
    handleMinuteChange: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      step: this.initStep,
      pointerRotate: () => {
        this.resetHourDegree()
      },
      hour: this.initHour,
      minute: this.initMinute
    }
  },
  computed: {
    timeType() {
      return this.step == 0 ? 'hour' : 'minute'
    },
    hourString() {
      return this.hour < 10 ? '0' + this.hour : this.hour
    },
    minuteString() {
      return this.minute < 10 ? '0' + this.minute : this.minute
    }
  },
  components: {
    TimePickerGenerator
  },
  methods: {
    handleStepChange(s) {
      if (s != this.step) {
        this.step = s
        this.pointerRotate = s == 0 ? this.resetHourDegree() : this.resetMinuteDegree()
      }
    },
    handleTimePointerClick(time, rotate) {
      this.pointerRotate = rotate
      this.handleTimeChange(time)
    },
    handleTimeChange(time) {
      time = parseInt(time)
      if (this.step == 0) {
        this.hour = time
        this.handleHourChange && this.handleHourChange(time)
      } else {
        this.minute = time
        this.handleMinuteChange && this.handleMinuteChange(time)
      }
    },
    resetHourDegree() {
      let h = parseInt(this.hour)
      let pointerR = 0
      HOURS.forEach((hour, index) => {
        if (h === index + 1) {
          pointerR = index < 12 ? 360 * (index + 1) / 12 : 360 * (index + 1 - 12) / 12
        }
      })
      return pointerR
    },
    resetMinuteDegree() {
      let m = parseInt(this.minute)
      let pointerR = 0
      MINUTES.forEach((minute, index) => {
        if (m === index) {
          pointerR = 360 * index / 60
        }
      })
      return pointerR
    }
  }
}
</script>

<style lang="css">
.time-picker-modal-container {
	width:250px;
  /*position: absolute;*/
  opacity: 1;
  z-index: 2;
  padding: 25px;
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: #fff;
  border-radius: 2px;
  top: 100%;
  left: 0;
  transform: translateY(20px);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12), 0 0 4px 0 rgba(0, 0, 0, 0.08);
}
.time-picker-modal-container:hover{
	box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.12), 0 0 8px 0 rgba(0, 0, 0, 0.08);
}
.time-picker-modal-header {
  height: 80px;
  line-height: 40px;
  text-align: center;
  font-size: 2.5em;
  position: relative;
}

.time-picker-modal-header .time-picker-header {
  cursor: pointer;
}
.time-picker-modal-header .time-picker-header.active {
  color: #3498db;
  cursor: default;
}
.time-picker-modal-header .time-picker-header:hover {
  color: #3498db;
}

.picker-container {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #e5e5e5;
  position: relative;
}
.picker-center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3498db;
  transform: translate(-50%, -50%);
}
.picker-pointer {
  position: absolute;
  width: 4px;
  height: 110px;
  left: 50%;
  top: 20px;
  background-color: #3498db;
  transform-origin: center bottom;
}

.picker-pointer.animation {
  transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
