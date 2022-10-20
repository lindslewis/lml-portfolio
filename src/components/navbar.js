// import react

// more imports??
// this will structure the usage of the navbar and the tabs, likely what's active or not, and a decent chunk of page changes I assume??

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style/header.css'
import avatar from './images/LindsayBG.png'

function PageNavbar({ currentPage, handleChange }) {
    return (
    <section className="header p-2" role="navigation">
        <Navbar id="navCon" role="navigation">
                <Navbar.Brand href='#home' id="brand" onClick={() => handleChange('Home')} className = { currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    <img alt=''
                    src={avatar}
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
        </Navbar>
    </section>
    );
}

export default PageNavbar;