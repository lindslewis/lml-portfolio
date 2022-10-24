// import react

// more imports??
// this will structure the usage of the navbar and the tabs, likely what's active or not, and a decent chunk of page changes I assume??

import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './style/header.css'
import avatar from './images/LindsayBGsmol.png'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Image from 'react-bootstrap/Image';
import Home from './pages/Home';

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
                    <img alt=''
                    src={avatar}
                    width='40'
                    height='40'
                    className='d-inline-block align-top rounded-circle'/>
                    {/* Lindsay Lewis */}
                </Navbar.Brand>
                <Nav>
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
                <a href="https://stackoverflow.com/users/19833916/lindslewis">
                    <Image className="figure" src="https://cdn.jsdelivr.net/npm/simple-icons@7.8.0/icons/stackoverflow.svg" alt="Stack Overflow badge"></Image>
                {/* <FontAwesomeIcon className="figure" icon="fa-brands fa-stack-overflow" /> */}
                </a>
            </li>
            <li className='footerList'>
            <a href="https://github.com/lindslewis">
                <icon icon="fa-brands fa-github" />
            </a>
            </li>
            <li className='footerList'>
                <a href="https://www.linkedin.com/in/lewis-lindsay/">
                    <Image className="figure" src="https://cdn.jsdelivr.net/npm/simple-icons@7.8.0/icons/linkedin.svg" alt="LinkedIn badge"></Image>
                {/* <FontAwesomeIcon className="figure" icon="fa-brands fa-linkedin" /> */}
                </a>
            </li>

        </ul>

    </footer>
    </section>
    );
}

// export default PageNavbar;