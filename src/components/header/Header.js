import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './Header.css'

const Header = () => {
    return (
        <header>

            <Navbar bg="light" expand="lg" className="d-flex space-between">
                <Container className="ms-5">
                    <LinkContainer to="/">
                        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="me-auto">
                            <LinkContainer to="/about">
                                <Nav.Link>AboutMe</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>Certifications</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>ContactMe</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header

