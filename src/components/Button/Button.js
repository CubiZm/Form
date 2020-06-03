import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <div className="button-wrap">
    <button className="button" type="submit">
      {props.children}
    </button>
    </div>
  );
}

export default Button;
