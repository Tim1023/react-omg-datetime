# react-omg-datetime
A date and time picker in the same React.js component.

[![npm version](https://badge.fury.io/js/react-omg-datetime.svg)](https://badge.fury.io/js/react-omg-datetime)
## Demo
[Show Case](https://tim1023.github.io/react-omg-datetime/)

## Installation

```sh
npm install --save react-omg-datetime
```


## Usage

**[React.js](http://facebook.github.io/react/) is the only peer dependencies** for react-omg-datetime. **No moment.js required.**

You can then use the datepicker like in the example below.


```js
import DateTimeInput from 'react-omg-datetime'
import 'react-omg-datetime/lib/styles.css'
...

render: function() {
    return <DateTimeInput value={new Date(2018, 3, 4, 2, 0, 0)}
                     onChange={onChange}
                     label={'DateTimePicker'}
                  // seconds
      />
}
```

**Don't forget to add the [CSS stylesheet](https://github.com/Tim1023/react-omg-datetime/blob/master/src/lib/styles.css) to make it work out of the box.**

## API

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **value** | `Date` | `new Date()` | Represents the selected date by the component.  |
| **label** | `Date` | `null` | Represents the label name by the component|
| **onChange** | `function` | empty function | Callback trigger when the date changes. The callback receives the selected `Date` object as only parameter. |
| **seconds** | `boolean` | `false` | When `true` seconds view and config will be reprenseted.

### [MIT Licensed](LICENSE.md)

Welcome to fork and clone.
