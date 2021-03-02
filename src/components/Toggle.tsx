// toggle.js
import React, { useState } from "react";

export default function Toggle(props : any) {
  const [state, setState] = useState(false);
  return (
    <button className={state === true ? "toggle toggle__off" : "toggle toggle__on"}
      onClick={() => {
        setState(previousState => !previousState);
        props.onChange(!state);
      }}
      data-testid="toggle"
    >
    {state === true ? "Turn off" : "Turn on"}
    </button>
  );
}
