import React from "react";
import "./checkbox.scss";

function Checkbox(props) {
  return (
    <div className="field-checkbox">
      <input
        id="remember-me"
        className="field-input"
        type="checkbox"
        value={props.option}
      />
      <label htmlFor="remember-me">{props.option}</label>
    </div>
  );
}

export default Checkbox;
