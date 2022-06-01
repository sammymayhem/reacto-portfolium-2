import React from 'react';
import { Form, FormControl, Button, InputGroup, Container, Row, Col } from 'react-bootstrap'
import '../../styles/Contact.css'

export const Contact = () => {
    return (
        <Container id='container'>
            <Row>
                <Col>
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

                            <InputGroup id="user-text">
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>

                            <Button variant="outline-info" id="submit-button" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}