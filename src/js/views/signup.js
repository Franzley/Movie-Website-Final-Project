//React
import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

//Styles CSS
import "../../styles/signup.css";

//Images
import littlepopcorn from "../../images/littlepopcorn.png";

//Context
import { useAuth } from "../firebase/AuthContext.js";

//Components
import BubblePopcorn from "../component/BubblePopcorn.jsx";
import InputFields from "../component/InputFields.jsx";


export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    //Do not reload page when submitting
    e.preventDefault();

    //Confirm passwords match when creating an account
    //Return an error if passwords do not match and prevent creation
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (passwordRef.current.value.length < 6) {
      return setError("Password must be minimum 6 characters");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="vh-100 signup-card">
      <Card>
        <div className="signup-card-body">
          <Card.Body>
            <h2 className="signup-title text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="signup-input-fields">
              <form onSubmit={handleSubmit}>
                <InputFields
                  className="signup-email-input"
                  id="email"
                  placeholder="Email"
                  type="email"
                  refs={emailRef}
                />
                <InputFields
                  className="signup-password-input"
                  id="password"
                  placeholder="Password"
                  type="password"
                  refs={passwordRef}
                />
                <InputFields
                  className="signup-password-confirm"
                  id="password-confirm"
                  placeholder="Password Confirm"
                  type="password"
                  refs={passwordConfirmRef}
                />

                <Button
                  disabled={loading}
                  className="signup-button w-100 mt-3"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </Card.Body>
          <div className=" have-account w-100 text-center mt-2">
            Already have an account?{" "}
            <Link className="signup" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </Card>
      {/* Popcorn animation */}
      <BubblePopcorn howMany={27} src={littlepopcorn} />
    </div>
  );
};
