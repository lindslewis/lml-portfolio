import React from 'react';
import '../style/about.css'
import profile from '../images/avatar1.jpg'

export default function About() {
    return (
        <section id='aboutCon' className='d-flex flex-column justify-content-center align-items-center'>
            {/* <section id="accentIntro">
                <p id="intro">
                    Hi there!
                </p>
                <p id="myName">
                    I'm
                </p>
                <p id="introName">
                    Lindsay
                </p>
                <p id="gladAb">
                    I'm so glad that you are here! 
                </p>
            </section> */}
            <img src={profile} alt="headshot of Lindsay" className="rounded-circle " width="300"></img>
            <p id="devAb">
                I'm a full-stack developer and recent University of Washington Coding Bootcamp graduate. I'm always looking for a challenge and opportunities to grow, not only as a developer, but as a human. 
            </p>
            <p id="backgroundAb"> 
                Having a background in English, I offer a lot of flexibility and differing perspectives to projects.   
            </p>
            <p id="aboutMe">
                I love working in the front-end, playing with colors, and pushing the envelope on my own skills. I prefer to go above and beyond the expectations set for me, and I have the perseverence to make that happen.
            </p>
            <p id="aboutEnd">
                Want to talk? Feel free to reach out!
            </p>
        </section>
    );
}