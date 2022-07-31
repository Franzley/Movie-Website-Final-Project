import React from "react";
import { Form } from "react-bootstrap";

//Create a new input field for every prop created
const FormGroupFields = (props) => {
  return (
    <Form.Group id={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} ref={props.refs} required />
    </Form.Group>
  );
};

export default FormGroupFields;
