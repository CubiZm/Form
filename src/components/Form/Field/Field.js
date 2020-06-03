import React from "react";
import "./field.scss";

function Field(props) {
  return (
    <div className="field-wrap">
      <label className="field-label">
        <span className="field-label__title">{props.title}</span>
        <input
          className="field-label__input"
          type={props.type}
          required
        ></input>
      </label>
    </div>
  );
}

export default Field;
