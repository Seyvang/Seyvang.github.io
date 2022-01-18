import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';


function HeadNav() {
    return (
        <div>
            <Navbar fixed="top" expand="lg" bg='light'>
                <Container>
                <Navbar.Brand href="#home">Youtube History Analysis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#start">Start Here</Nav.Link>
                    <Nav.Link href="#explain">How it Works</Nav.Link>
                    <Nav.Link href="#upload">Upload JSON</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeadNav
