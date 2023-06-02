import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className='p-0 d-flex jusify-content-between '>
    <Navbar.Brand as={Link} to="/" className='ml-3' >
    <img src={logo} alt="Logo" width="70" height="70" className="d-inline-block align-top" />
    <span className="mt-2">Mehak Mehal</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarColor01" />
    <Navbar.Collapse id="navbarColor01">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/home" active>Home <span className="visually-hidden">(current)</span></Nav.Link>
        <Nav.Link as={Link} to="/features">Features</Nav.Link>
        <Nav.Link as={Link}  to="/pricing">Pricing</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link} id="dropdown-nav-link" disabled>
            Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link}  to="">Action</Dropdown.Item>
            <Dropdown.Item as={Link}  to="/">Another action</Dropdown.Item>
            <Dropdown.Item as={Link} to="/">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form className="d-flex">
        <FormControl type="search" placeholder="Search" className="me-sm-2" />
        <Button variant="secondary" className="my-2 my-sm-0" type="submit">Search</Button>
      </Form>
      <div className='mr-3'>
      <Nav className='mr-3'>
      <Nav.Link as={Link} to="/cart">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCartShopping} size='2xl' style={{color: "#ffffff",}} /></Nav.Link>

      </Nav>
      </div>
     
      </Nav>
      
      
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header