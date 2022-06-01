import '../styles/Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { About } from './pages/About';
import Project from './pages/Project';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';

function Navigation() {
    return (
        <Router>
            <div className="App">
                <Navbar collapseOnSelect id="navbar" expand="lg">
                    <Container>
                        <Navbar.Brand id="title">Sam Wallace</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto" id="links">
                                <Nav.Link as={Link} to="/">About</Nav.Link>
                                <div className="vr break" />
                                <Nav.Link as={Link} to="/project">Projects</Nav.Link>
                                <div className="vr break" />
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                <div className="vr break" />
                                <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Routes>
                        <Route exact path="/" element={<About />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
};

export default Navigation;