// import react

// contact info page
// export

import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import '../style/contact.css';
import { send } from 'emailjs-com';

export default function Contact() {
    const [toSend, setToSend] = useState({
        from_name:'',
        message:'',
        reply_to:'',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_vpm15qa',
            'template_r7r2l2e',
            toSend,
            // 'USER ID'
        )
        .then((res) => {
            console.log('success!', res.status, res.text);
        })
        .catch((err) => {
            console.log('Failed to send', err);
        });
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return (
        <section className='pageCon'>
            <h1 id='title'>Contact Me</h1>
            <Form onSubmit={onSubmit} id="formCon">
                <Form.Group controlId='formName'>
                    <Form.Label className='contactLabel'>
                        Your Name
                    </Form.Label>
                    <Form.Control className="input" name="from_name" value={toSend.from_name} onChange={handleChange} placeholder='Enter Name Here'>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='formEmail'>
                    <Form.Label className='contactLabel'>
                        Email Address
                    </Form.Label>
                    <Form.Control className="input" name="reply_to" value={toSend.reply_to} onChange={handleChange} type='email' placeholder='Enter Email Here'/>
                </Form.Group>
                <Form.Group controlId='formText'>
                    <Form.Label className='contactLabel'>
                        Enter your message here.
                    </Form.Label>
                    <Form.Control className="input" name="message" value={toSend.message} onChange={handleChange} as="textarea" rows={5} />
                </Form.Group>
                <Form.Group className='sendBtn'>
                    <Button type="submit">Send</Button>
                </Form.Group>

            </Form>
        </section>

    );
}