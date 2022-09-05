// import react

// more imports??
// this will structure the usage of the navbar and the tabs, likely what's active or not, and a decent chunk of page changes I assume??

import React from 'react';
import './style/header.css'

function Navbar({ currentPage, handleChange }) {
    return (
    <section className="header p-2" role="navigation">

        <ul className='nav nav-tabs mt-1'>
            {/* <li className='nav-item'>
                <a href='#home'
                onClick={() => handleChange('Home')}
                className = { currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li> */}
            <li className='nav-item'>
                <a href='#about'
                onClick={() => handleChange('About')} className = { currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About
                </a>
            </li>
            <li className='nav-item'>
                <a href='#portfolio'
                onClick={() => handleChange('Portfolio')}
                className = { currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                    {/* would like to change the names of all these but they'll work for now */}
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a href='#contact'
                onClick={() => handleChange('Contact')}
                className = { currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li className='nav-item'>
                <a href='#resume'
                onClick={() => handleChange('Resume')}
                className= { currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>

        </ul>

    </section>
    
        
    );
}

export default Navbar;