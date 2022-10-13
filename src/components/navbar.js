// import react

// more imports??
// this will structure the usage of the navbar and the tabs, likely what's active or not, and a decent chunk of page changes I assume??

import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './style/header.css'


function PageNavbar({ currentPage, handleChange }) {
    return (
    <section className="header p-2" role="navigation">
        <Navbar role="navigation">
            <Container id="navCon">
                <Navbar.Brand href='#home' id="brand" onClick={() => handleChange('Home')} className = { currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    <img alt=''
                    src='../images/LindsayBG.png'
                    width='30'
                    height='30'
                    className='d-inline-block align-top'/>
                    Lindsay Lewis
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href='#about' id="aboutLink" onClick={() => handleChange('About')} className = { currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
                    
                    <Nav.Link href='#portfolio' id="portLink" onClick={() => handleChange('Contact')} className = { currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link> 
                    
                    <Nav.Link href='#contact' id="contactLink" onClick={() => handleChange('Contact')} className = { currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                </Nav>
            </Container>

        </Navbar>
    </section>
    );
}

export default PageNavbar;