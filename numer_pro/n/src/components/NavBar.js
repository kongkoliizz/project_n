import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Numer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="UnitOne" id="basic-nav-dropdown">
                <NavDropdown.Item href="/bisection">Bisection</NavDropdown.Item>
                <NavDropdown.Item href="/falseposition">FalsePosition</NavDropdown.Item>
                <NavDropdown.Item href="/onepoint">OnePoint</NavDropdown.Item>
                <NavDropdown.Item href="/secant">Secant</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="UnitTwo" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cmr">CramerRule</NavDropdown.Item>
                <NavDropdown.Item href="/ge">GaussElimination</NavDropdown.Item>
                <NavDropdown.Item href="/gj">GaussJordan</NavDropdown.Item>
                <NavDropdown.Item href="/jc">Jacobi</NavDropdown.Item>
                <NavDropdown.Item href="/lu">LU</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interpolation" id="basic-nav-dropdown">
                <NavDropdown.Item href="/newtonsndivideddifferences">NewtonsDividedDifferences</NavDropdown.Item>
                <NavDropdown.Item href="/lagrangepolynomials">Lagrange</NavDropdown.Item>
                <NavDropdown.Item href="/spline">Spline</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Regression" id="basic-nav-dropdown">
                <NavDropdown.Item href="/linearregression">Linear Regression</NavDropdown.Item>
                <NavDropdown.Item href="/polynomialregression">Polynomial Regression</NavDropdown.Item>
                <NavDropdown.Item href="/multiregression">Multi Regression</NavDropdown.Item>
            </NavDropdown>
                <NavDropdown title="Integration and Differentiation" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">#########</NavDropdown.Item>
                <NavDropdown.Item href="#">#########</NavDropdown.Item>
                <NavDropdown.Item href="#">#########</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}