// portfolio container will likely include:
// import react and use state
// importing in all the other pages that make up the portfolio site
// export it so that app can grab it


// render pages for about, contact, portfolio, and home.
// how to handle a page change

import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navbar from './Navbar';
import Resume from './pages/Resume';
import Image from 'react-bootstrap/Image'
import Home from './pages/Home'


import './style/header.css'
// starting on home :)
export default function PortContainer() {
    const [ currentPage, setCurrent ] = useState('Home');

    // below are all the navbar selects with what info it renders for the users
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        } if (currentPage === 'Resume') {
            return <Resume />;
        } if (currentPage === 'Home') {
            return <Home />;
        }
        return <Portfolio />
    };

    const handleChange = (page) => setCurrent(page);

    // this is where it tells it to run to render
    return (
        <section>
                {/* <Routes>
                    <Route> */}
        <Navbar currentPage = {currentPage} handleChange = {handleChange} />
                 
                    {/* </Route>
                </Routes> */}

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
                                    <Image className="figure" src="https://cdn.jsdelivr.net/npm/simple-icons@7.8.0/icons/github.svg" alt="Github badge"></Image>
                                   
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