import React from "react";
import { render } from "react-dom";
import DateTimeInput from "../../lib";

const onChange = (value) => {
  console.log(value)
}

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <DateTimeInput value={new Date(2018, 3, 4, 2, 0, 0)}
                     onChange={onChange}
                  // seconds
      />
      <div style={{width: 500, height: 200, backgroundColor: '#009688',color:'white',fontSize:20,padding:10,marginTop:25}}>
        <p>In this showcase, value will be print trough console.log when you change the DataTimePicker changes.</p>
        <p>Native Js Date object, no moment.js required.</p>
        <p>See more on <a style={{color:'white'}} href="https://github.com/Tim1023/react-omg-datetime">Github</a></p>
      </div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
