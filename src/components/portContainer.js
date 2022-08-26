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
import Home from './pages/Home';
import Navbar from './Navbar';

// starting on home :)
export default function portContainer() {
    const [ currentPage, setCurrent ] = useState('Home');

    // below are all the navbar selects with what info it renders for the users
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Portfolio />
    };

    const handleChange = (page) => setCurrent(page);

    // this is where it tells it to run to render
    return (
        <section>
            <Navbar currentPage = {currentPage} handleChange = {handleChange} />
            {renderPage()}
        </section>
    );
}