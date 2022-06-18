import React, { useState } from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap'
import '../../styles/Contact.css'

export const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <Container id='container'>
            <div id="contact-form">
                <div className='contact-title'>
                    <h1>Contact Me</h1>
                </div>
                {/* <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id="name" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            I will never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group id="user-text">
                        <Form.Label>How can I help you?</Form.Label>
                        <FormControl as="textarea" id="message" aria-label="With textarea" />
                    </Form.Group>

                    <Button variant="outline-info" id="submit" type="submit">
                        {status}
                    </Button>
                </Form> */}
            </div>
            <div id='email-link'>
                <h3>Email me at: <a href="mailto: contact.samwallace@gmail.com">contact.samwallace@gmail.com</a></h3>
            </div>
        </Container>
    )
}