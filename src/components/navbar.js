// import react

// more imports??
// this will structure the usage of the navbar and the tabs, likely what's active or not, and a decent chunk of page changes I assume??

import React from 'react';

function Navbar({ currentPage, handleChange }) {
    return (
        <ul>
            <li>
                <a href='#home'
                onClick={() => handleChange('Home')}
                className={ currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            </li>
        </ul>
    )
}

export default Navbar;