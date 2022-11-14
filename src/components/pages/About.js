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
            <img id='headshot' src={profile} alt="headshot of Lindsay" className="rounded-circle " width="300"></img>
            <h1 id="intro" className='mt-5 align-self-center'>Nice to meet you!</h1>
            <h1 id='nameIn'>I'm Lindsay.</h1>
            <p className='devAb mt-3'> 
                I'm a full-stack developer based in Portland, Oregon. This September, I completed a full-time, full-stack web development bootcamp with the University of Washington.
            </p>
            <p className='devAb'>
                I have a background in writing and editing, which lend themselves well to coding. I pride myself in my attention to detail, as well as my stubborn determination to complete any and all tasks that come my way. 
            </p>
            <p className='devAb'>
                I love a challenge. Being able to push myself to go above and beyond brings me immense satisfaction, so I'm excited to keep learning as I continue down this road in web and software development.
            </p>
            <p className='devAb'>
                I'd love to hear from you! Please feel free to contact me<a href="#contact" id='aboutLink'>here</a>, or on my socials. 
            </p>

        </section>
    );
}