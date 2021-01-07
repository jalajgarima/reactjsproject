import React from 'react'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React-Projects</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <LinkContainer to="/projects/wordlearning">
                  <NavDropdown.Item>Word Learning</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/projects/todolist">
                  <NavDropdown.Item>ToDo list</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/projects/shoppingcart">
                  <NavDropdown.Item>Shopping Cart</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/projects/distancecalc">
                  <NavDropdown.Item href="#action/3.4">
                    Google Api Distance Calc
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shoppingcart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
