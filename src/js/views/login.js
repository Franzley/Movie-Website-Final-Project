import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import InputFields from "../component/InputFields.jsx";
import { useAuth } from "../firebase/AuthContext.js";
import { Link, useHistory } from "react-router-dom";
import "../../styles/login.css";
import littlepopcorn from "../../images/littlepopcorn.png";

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
      <div className="login-card-background">
        <div className="login-card">
          <Card>
            <div className="login-card-body">
              <Card.Body>
                <h2 className="text-center login-title">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="login-input-fields">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <InputFields
                        className="login-email-input"
                        id="email"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        refs={emailRef}
                      />
                    </div>
                    <div>
                      <InputFields
                        className="login-password-input"
                        id="password"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        refs={passwordRef}
                      />
                    </div>
                    <Button
                      disabled={loading}
                      className=" login-button w-100 mt-3"
                      type="submit"
                    >
                      Log In
                    </Button>
                  </form>
                </div>
                <div className=" need-account w-100 text-center mt-2">
                  Need an account? <Link to="/signup">Sign Up</Link>
                </div>
              </Card.Body>
            </div>
          </Card>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>{" "}
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>
          <div className="bubble">
            <img className="littlepopcorn" src={littlepopcorn} />
          </div>        
          </div>
      </div>
    </>
  );
};
