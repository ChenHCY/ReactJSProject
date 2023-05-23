import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavbarComp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            
        }
    }

    render(){
        return<div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Chenyu Yang Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/project">Project</Nav.Link>
                        <Nav.Link href="resume">Resume</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    }
}

export default NavbarComp;