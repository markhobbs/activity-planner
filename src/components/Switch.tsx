// switch.js
import React, { useState } from "react";

/*
<label class="switch">
  <input type="checkbox">
  <span class="slider"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider"></span>
</label><br><br>

<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>

<label class="switch">
  <input type="checkbox" checked>
  <span class="slider round"></span>
</label>*/

export default function Switch(props : any) {

    const [state, setState] = useState(false);
    
    return (
    <label 
      data-testid="switcher"
      className={ state === true ? "switcher switch__off" : "switcher switch__on" }>
      <input 
        type = "checkbox" 
        onClick={() => {
          setState(previousState => !previousState);
          props.onChange(!state);
        }}
      />
      {props.label} 
      {/*state === true ? "OFF" : "ON"*/}
      <span className="slider round" />
    </label>
    );
};
