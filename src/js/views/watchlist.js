import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import { Link, useHistory } from "react-router-dom";

export const WatchList = () => {
	const [error, setError] = useState("")
	const { currentUser, logout } = useAuth()
	const history = useHistory()
	async function handleLogout() {
		setError('')

		try {
			await logout()
			history.pushState('/login')
		} catch {
			setError('Failed to log out')
		}
	}
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Watch List</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<strong>Email: </strong>{currentUser.email}
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				<Button variant="link" onClick={handleLogout}>Log Out</Button>
			</div>
		</>
	)
}
