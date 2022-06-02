import Navigation from './Navigation';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect id="navbar-cont" expand="lg">
                <Container>
                    <Navbar.Brand id="title">Sam Wallace</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navigation />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;




