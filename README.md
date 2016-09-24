# Vue-Clock-Picker

> A lite time picker based on Vue.js

[![npm version](https://badge.fury.io/js/vue-clock-picker.svg)](https://badge.fury.io/js/vue-clock-picker) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DomonJi/vue-clock-picker/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/vue-clock-picker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-clock-picker/)

> A lite time picker vue-component, writing in es6 standrad style.

## SHOW

> 24 Hours Mode, with Material Design. Try the [Live Demo](https://domonji.github.io/vue-clock-picker)

![24HoursMode](./intro_src/24M.png) ![vue-clock-picker](./intro_src/24M.gif)

## HAVE A TRY

```bash
$ git clone https://github.com/DomonJi/vue-clock-picker.git

$ npm install

$ npm run dev
```

## INSTALL

```bash
$ npm install vue-clock-picker
```

dependencies:

- [`vue@^2.0.0`](https://github.com/vuejs/vue)

Because this is a vue-based component, you should already have `vue` dependencies in your project. If not:

```bash
$ npm install react vue@next --save-dev
```

## USAGE

Until now, this Component has only one theme -- The Material Theme. I'll working on more themes later.

```html

// in some vue component
<template>
    <div>
        <vue-clock-picker
            mode="24" :defaultHour="defaultHour"
            :defaultMinute="defaultMinute"
            :onTimeChange="timeChangeHandler"
        >
        </vue-clock-picker>
    </div>
</template>
```

```javascript
<script>
import VueClockPicker from 'vue-clock-picker'
export default {
    components: {
        VueClockPicker
    },
    data(){
        return {
            defaultHour:new Date().getHours(),
            defaultMinute:new Date().getMinutes()
        }
    },
    methods:{
        timeChangeHandler(){

        }
    }
}
</script>
```

> For more detail usage, you can see the source code.

## APIS

### Props

- `defaultHour`
- `defaultMinute`

`String or Number`

```javascript
defaultHour="12"
```

- `defaultFocused`

`Boolean`

Whether the picker pannel is focused or not when it did mount. Default `false`

```javascript
defaultFocused="false"
```

- `onFocusChange`

`Function`

The callback func when component `focused` state is changed.

- `onHourChange`

`Function`

The callback func when component `hour` state is changed.

```javascript
onHourChange(hour) {
  // ...
}
```

- `onMinuteChange`

`Function`

The callback func when component `minute` state is changed.

```javascript
onMinuteChange(minute) {
  // ...
}
```

- `onTimeChange`

`Function`

The callback func when component `hour` or `minute` is changed.

```javascript
onTimeChange(time) {
  // ...
}
```

## TODOS

- Test

  - [ ] Vue Component Test

    - [x] TimePicker Component
    - [x] PickerPointGenerator Component
    - [x] TimePickerModal Component
    - [x] PickerPoint Component
    - [ ] OutsideClickHandler Component

- Themes

  - [x] Material Theme
  - [ ] Classical Theme

- Mode

  - [ ] 12h mode
  - [x] 24h mode
  - [ ] Inner Points

- Animations

  - [x] Panel Animations
  - [ ] PickerModal Animations

## THANK

Thanks to the Ecmadao's open source project: [react-times](https://github.com/ecmadao/react-times), I have learn a lot from that. Thanks.

## LICENSE

```
MIT License

Copyright (c) 2016 Domon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
