import Vue from 'vue'
import TimePicker from '../../../src/components/TimePicker.vue'

describe('TimePicker.vue', () => {
  it('hour and minute has lengthOf 2', () => {
    const timePicker = Vue.extend(TimePicker)
    const vm = new timePicker().$mount()
    expect(vm.hourString).to.have.lengthOf(2)
    expect(vm.minuteString).to.have.lengthOf(2)
  })
}})
