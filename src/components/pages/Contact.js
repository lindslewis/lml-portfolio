// import react

// contact info page
// export

import React from 'react';
import { Form } from 'react-bootstrap';

export default function Contact() {
    return (
        <section className='pageCon'>
            <Form>
                <Form.Group controlId='formEmail'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control type='email' placeholder='Enter Email Here'/>
                </Form.Group>
            </Form>
        </section>

    );
}