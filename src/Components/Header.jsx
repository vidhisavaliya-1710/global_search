import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          
          <Nav.Link href="/addbook" className='me-5 fs-5 hover_btn fw-medium'>Add Book</Nav.Link>
          <Nav.Link href="/" className='me-5 fs-5 hover_btn fw-medium'>Add Student</Nav.Link>
          <Nav.Link href='/view' className='me-5 fs-5 hover_btn fw-medium'>View Data</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
