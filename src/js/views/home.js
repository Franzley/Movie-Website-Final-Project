import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";

export const Home = () => {
	function handleLogout(){
	}

return(
	<>
	<Card>
		<Card.Body>
		<h2 className="text-center mb-4">Home</h2>
		</Card.Body>
	</Card>
	<div className="w-100 text-center mt-2">
		<Button variant="link" onClick={handleLogout}>Log Out</Button>
    </div>
	</>
)
}
