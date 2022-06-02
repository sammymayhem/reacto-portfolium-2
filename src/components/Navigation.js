import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Navigation() {
    return (
        <Nav className="ms-auto" id="links">
            <Nav.Link as={Link} to="/">About</Nav.Link>
            <Nav.Link as={Link} to="/project">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
        </Nav>
    )
};

export default Navigation;