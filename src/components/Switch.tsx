import React, { useState } from "react";

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
      <span className="slider round" />
    </label>
    );
};
