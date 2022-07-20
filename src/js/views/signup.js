import React, {useRef, useState} from "react";
import { Card, Button, Form, Alert} from "react-bootstrap";
import FormGroupFields from "../component/FormGroupFields.jsx";
import { useAuth } from "../firebase/AuthContext.js";
import { Link, useHistory } from "react-router-dom";


export const Signup = () => {
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const { signup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const history = useHistory()

async function handleSubmit(e){
  e.preventDefault()

  if (passwordRef.current.value !== passwordConfirmRef.current.value){
    return setError('Passwords do not match')
  }
  if (passwordRef.current.value.length < 6){
    return setError('Password must be minimum 6 characters')
  }
  try {
    setError('')
    setLoading(true)
    await signup(emailRef.current.value, passwordRef.current.value)
    history.push("/")
  } catch {
    setError('Failed to create an account')
  }
  setLoading(false)
}

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <FormGroupFields id="email" label="Email" type="email" refs={emailRef} />
            <FormGroupFields id="password" label="Password" type="password" refs={passwordRef} />
            <FormGroupFields id="password-confirm" label="Password Confirm" type="password" refs={passwordConfirmRef} />
            <Button disabled={loading} className="w-100 mt-3" type="submit">Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to="/login">
      Log In
				</Link>
    </div>
    </>
  )
}