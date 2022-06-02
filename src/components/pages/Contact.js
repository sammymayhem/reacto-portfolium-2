import React from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap'
import '../../styles/Contact.css'

export const Contact = () => {
    return (
        <Container id='container'>
            {/* <Row>
                <Col> */}
            <div id="contact-form">
                <div>
                    <h1>Contact Me</h1>
                </div>
                <Form>
                    <Form.Group className="mb-3" id="name" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" id="email" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group id="user-text">
                        <Form.Label>How can I help you?</Form.Label>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </Form.Group>

                    <Button variant="outline-info" id="submit-button" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    )
}