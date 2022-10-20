// import react

// home page, would like this to be the first page but readme wants it to be the about me page as the first page :(
    // export

import React from 'react';
import '../style/home.css';
import illustration from '../images/LindsayBG2.png';

export default function Home() {
    return (
        <section id="fullHome">
            <img src={illustration} alt="illustration of Lindsay created by Jovi Barrow" id="homeImg"></img>
            <section id='fullName'>
                <p id='firstName'>Lindsay</p>
                <p id='lastName'>Lewis</p>
            </section>
            <p id="fullStack">Full-Stack Developer</p>
        </section>

    );
}