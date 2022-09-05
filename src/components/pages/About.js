// import react

// need to export the about page? probably not a whole lot here.
import '../style/about.css'
import React from 'react';
import { Image } from 'react-bootstrap';

export default function About() {
    return (
        <section id='pageCon'>
            <section id='introCon'>
                <h1>Hi there, I'm Lindsay</h1>
                <h3>Thanks for being here.</h3>
            </section>
            <section id='aboutCon'>
                <section id='avatarCon'>
                    <Image src={require("../smol-avatar.jpg")} alt='avatar of Lindsay' id='avatar'></Image>
                </section>
                <section id="aboutText">
                    <p>
                    I am a Full Stack Developer, making the transition from the world of academia to web and software development. So far, my transition into coding has been a whirlwind adventure.
                    <br></br>
                    <br></br>
                    As I continue to dive deeper into this career, I hope to learn deeply, create diligently, and continue to face this endeavor with the enthusiasm that I started it with.
                    </p>
                    <ul>
                        <li>
                            I'm based out of the beautiful Portland, Oregon.
                        </li>
                        <li>
                            I'm currently attending the University of Washington Coding Bootcamp-- through 2U -- expecting to receive a Professional Certificate in Coding.
                        </li>
                        <li>
                            I graduated from Oregon State University with a Bachelors in English.
                        </li>
                        <li>
                            If I'm not hitting the books, you can expect to find me crocheting, out exporing, or playing a few games to recharge.
                        </li>
                    </ul>
                </section>
            </section>
            
            
            
        </section>
        
        // this is where my html will go
    );
}