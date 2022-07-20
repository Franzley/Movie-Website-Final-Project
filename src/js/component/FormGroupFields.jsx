import React from "react";
import { Form } from "react-bootstrap";

const FormGroupFields = (props) => {
  return (
    <Form.Group id={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} ref={props.refs} required />
    </Form.Group>
  );
};

export default FormGroupFields;
