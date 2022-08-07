import React from "react";

//Create a new input field for every prop created
const InputFields = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      type={props.type}
      ref={props.refs}
      required
    ></input>
  );
};

export default InputFields;
