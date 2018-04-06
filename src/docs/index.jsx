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
      <DateTimeInput value={new Date(2018, 4, 4, 2, 0, 0)} onChange={onChange} />
      <div style={{width:500,height:500,backgroundColor:'grey'}}></div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
