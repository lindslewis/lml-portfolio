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
                <h3>I'm a full-stack developer, excited to create some beautiful apps.</h3>
            </section>
            <section id='avatarCon'>
                <Image src={require("../avatar.jpg")} alt='avatar of Lindsay'></Image>
            </section>
            
            
        </section>
        
        // this is where my html will go
    );
}