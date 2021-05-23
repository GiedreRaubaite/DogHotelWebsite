import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import dogImage from '../assets/dog.png';
import SignUpModal from './modalComponent';
import styled from 'styled-components';



const Styles = styled.div`

  .navbar {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2em;
    background-color: #fff;
    text-align:center;
    background-image: url("${dogImage}");
    background-size: cover;
    height: 300px;
    cursor: pointer;
  }
  .navbar-light  .navbar-toggler-icon {
    background-image: url("${logo}");
    width: 90px;
    height: 90px;
 }
  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
  .navbar-light .navbar-toggler {
    border: none;
  }
  a, .navbar-nav .nav-link {
    color: #CB894C;
    cursor: pointer;
    &:hover {
      color: #DC920A; 
      border-radius:4px;
      text-decoration: none;
}`


class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedUp: localStorage.getItem('isSignedUp'),
            modalShow: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }
    handleClose() {
        this.setState(state => ({
            modalShow: false
        }))
    }
    handleOpen() {
        this.setState(state => ({
            modalShow: true
        }))
    }
    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/" className="d-none d-lg-block">
                        <img
                            src={logo}
                            alt="Dog Hotel Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/">Apie Mus</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/Services">Paslaugos</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/album">Galerija</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/contact">Susisiekime</Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="signup">
                            <Nav.Item>
                                <Nav.Link>
                                    <Button onClick={this.handleOpen}>
                                        {(this.state.isSignedUp && localStorage.getItem('SignUpName')) ? localStorage.getItem('SignUpName') : "Prisijungti"}
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse >
                </Navbar >
                <SignUpModal show={this.state.modalShow} closeEvent={this.handleClose} />
            </Styles >
        )
    }
};


export default NavigationBar
