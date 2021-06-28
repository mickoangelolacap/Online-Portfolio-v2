import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import { useState } from 'react'
import Dark from '../../assets/images/Dark.png'
import Light from '../../assets/images/Light.png'
import ContactModal from '../ContactModal'
import NavbarCollapse from '../../assets/images/NavbarCollapse.png'

const Header = ({theme, toggleTheme}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <Navbar id="header" variant={theme} expand="lg">
            <Container fluid className="p-0">
                <Navbar.Brand href="#header" id="navbarBrand">MA<span className="text-primary">C</span>L<span className="text-primary">.</span></Navbar.Brand>
                <button className="iconToggleContainer">
                    <Image id="iconToggle" src={theme === "light" ? Dark : Light} onClick={toggleTheme} fluid/>
                </button>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Image src={NavbarCollapse} fluid/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="" href="#about">About</Nav.Link>
                        <Nav.Link className="navLinks" href="#works">Works</Nav.Link>
                        <Nav.Link className="navLinks text-primary" onClick={() => setShowModal(true)}>Let's Talk</Nav.Link>
                        <Nav.Link className="navLinks" href="#">Resume / CV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ContactModal show={showModal} onHide={() => setShowModal(false)}/>
        </Navbar>
    )
}

export default Header
