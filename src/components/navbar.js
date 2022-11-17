// import react

// more imports??
// this will structure the usage of the navbar and the tabs, likely what's active or not, and a decent chunk of page changes I assume??

import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style/header.css'
// import avatar from './images/LindsayBGsmol.png'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
// import Image from 'react-bootstrap/Image';
import Home from './pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import gitLogo from './images/GitHub-Mark-Light-64px.png'
// import linkLogo from './images/LI-In-Bug.png'
// import { ExternalLink } from 'react-external-link';

export default function PageNavbar() {
    const [ currentPage, setCurrent ] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Home') {
            return <Home />;
        }
        return <Portfolio />
    };

    const handleChange = (page) => setCurrent(page);
    return (
    <section id='portCon'>
        <section className="header p-2" role="navigation">
            <Navbar id="navCon" role="navigation">
                <Navbar.Brand href='#home' id="brand" onClick={() => handleChange('Home')} className = { currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-house" className="d-inline-block align-top"></FontAwesomeIcon> */}
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                    Home
                </Navbar.Brand>
                <Nav id="navLinks">
                    <Nav.Link href='#about' id="aboutLink" onClick={() => handleChange('About')} className = { currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
                    
                    <Nav.Link href='#portfolio' id="portLink" onClick={() => handleChange('Portfolio')} className = { currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link> 
                    
                    <Nav.Link href='#contact' id="contactLink" onClick={() => handleChange('Contact')} className = { currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </section>
    {renderPage()}
    <footer id="footer">
        <ul id="footerUl">
            <li className='footerList'>
                &#169; 2022 Lindsay Lewis
            </li>
            {/* <li className='footerList'>
                <ExternalLink href='https://github.com/lindslewis' id='contactGit'>
                    <img src={gitLogo} alt='Github Logo'/>
                </ExternalLink>
            </li>
            <li className='footerList'>
                <ExternalLink href='https://www.linkedin.com/in/lewis-lindsay/' id='contactLinked'>
                    <img id='linkedLogo' src={linkLogo} alt='LinkedIn Logo'/>
                </ExternalLink>
            </li> */}

        </ul>

    </footer>
    </section>
    );
}

// export default PageNavbar;