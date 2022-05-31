import './App.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar collapseOnSelect id="navbar" expand="lg">
          <Container>
            <Navbar.Brand id="title">Sam Wallace</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" id="links">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <div className="vr" id="break" />
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                <div className="vr" id="break" />
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <div className="vr" id="break" />
                <Nav.Link href="https://www.dropbox.com/s/55z2vo38fwm03tw/Resume%20-%20Sam%20Wallace.pdf?dl=0">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


