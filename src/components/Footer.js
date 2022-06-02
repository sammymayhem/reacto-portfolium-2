import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <div className="sticky-bottom footer">
            <Navbar bg="dark">
                <Container>
                    <div><a href="https://github.com/sammymayhem"><FaGithub /></a></div>
                    <div className="linked-in"><a href="https://www.linkedin.com/in/sam-wallace-92b6238/"><FaLinkedin /></a></div>
                    <div><a href="https://www.facebook.com/sammymayhem/"><FaFacebook /></a></div>
                </Container>
            </Navbar>
        </div>
    )
}