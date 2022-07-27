import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import FormGroupFields from "../component/FormGroupFields.jsx";
import { useAuth } from "../firebase/AuthContext.js";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/watch");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroupFields
              id="email"
              label="Email"
              type="email"
              refs={emailRef}
            />
            <FormGroupFields
              id="password"
              label="Password"
              type="password"
              refs={passwordRef}
            />
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};
