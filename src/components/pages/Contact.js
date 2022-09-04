// import react

// contact info page
// export

import React from 'react';
import { Form } from 'react-bootstrap';
import '../style/contact.css'

export default function Contact() {
    return (
        <section className='pageCon'>
            <h1 id='title'>Contact Me</h1>
            <Form>
                <Form.Group controlId='formName'>
                    <Form.Label>
                        Your Name
                    </Form.Label>
                    <Form.Control placeholder='Enter Name Here'>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='formEmail'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type='email' placeholder='Enter Email Here'/>
                </Form.Group>
                <Form.Group controlId='formText'>
                    <Form.Label>
                        Enter your message here.
                    </Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>

            </Form>
        </section>

    );
}