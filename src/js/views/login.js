//React
import React, { useRef, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

//Styles CSS
import "../../styles/login.css";

//Images
import littlepopcorn from "../../images/littlepopcorn.png";

//Context
import { useAuth } from "../firebase/AuthContext.js";

//Components
import InputFields from "../component/InputFields.jsx";
import BubblePopcorn from "../component/BubblePopcorn.jsx";


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
    <div className="vh-100 login-card-background">
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
        {/* Popcorn animation */}
        <BubblePopcorn howMany={27} src={littlepopcorn} />
      </div>
    </div>
  );
};
