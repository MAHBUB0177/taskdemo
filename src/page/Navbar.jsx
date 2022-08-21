import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
function BasicExample() {
  return (
    <Navbar  expand="lg" className='nav-data'>
      <Container>
      <Link to='#' style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

                    <Link to='/create' style={{textDecoration:'none'}}>
                    <li class="nav-item" style={{marginRight:'30px',fontSize:'20px',color:'#f29d96'}}>
                    Product Create
                    </li>
                    </Link>
    
                    <Link to='/list' style={{textDecoration:'none'}}>
                    <li class="nav-item" style={{marginRight:'30px',fontSize:'20px',color:'#f29d96'}}>
                    Product List
                    </li>
                    </Link>
       

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;