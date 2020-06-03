import React from "react";
import "./checkbox.scss";

function Checkbox(props) {
  return (
    <div className="field-checkbox">
      <input
        id="remember-me"
        className="field-checkbox__input"
        type="checkbox"
        value={props.option}
      />
      <label className="field-checkbox__label" htmlFor="remember-me">
        {props.option}
      </label>
    </div>
  );
}

export default Checkbox;
