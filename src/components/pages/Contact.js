// import react

// contact info page
// export

import React from 'react';
// import { Button, Form } from 'react-bootstrap';
import '../style/contact.css';
import { ExternalLink } from 'react-external-link';
// import Mailto from 'react-mailto';
// import { Link } from 'react-router-dom'
// import { send } from 'emailjs-com';
// import validator from 'validator';

export default function Contact() {
    // const ButtonMailto = ({ mailto, label }) => {

    
    // const [toSend, setToSend] = useState({
    //     from_name:'',
    //     message:'',
    //     reply_to:'',
    // });

    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (e) => {
    //     const userEmail = e.target.value

    //     if (validator.isEmail(userEmail)){
    //         setEmailError('')
    //     } else {
    //         setEmailError('Invalid email, please enter a valid email.')
    //     }
    // }

    // // to send emails :)
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     send(
    //         'service_vpm15qa',
    //         'template_r7r2l2e',
    //         toSend,
    //         // 'USER ID'
    //     )
    //     .then((res) => {
    //         console.log('success!', res.status, res.text);
    //     })
    //     .catch((err) => {
    //         console.log('Failed to send', err);
    //     });
    // };

    // const handleChange = (e) => {
    //     setToSend({...toSend, [e.target.name]: e.target.value});
    //     validateEmail([e.target.value])
    // };

    return (
        <section className='pageCon d-flex flex-column'>
            <h1 id='title'>Contact Me</h1>

            <p id='thanks'>I would love to hear from you.</p>
            <p id='sendEm'>Please feel free to send me an email:</p>
            <p id='myEmail'>lmschwehr@gmail.com</p>
            <br></br>
            <p id='orReach'>You may also reach me on my socials.</p>
            <ExternalLink href='https://github.com/lindslewis' id='contactGit'>Github</ExternalLink>
            <ExternalLink href='https://www.linkedin.com/in/lewis-lindsay/' id='contactLinked'>LinkedIn</ExternalLink>
            {/* <Link
                to='#'
                onClick = {(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link> */}
           
            {/* <Form onSubmit={onSubmit} id="formCon">
            <h1 id='title'>Contact Me</h1>
                <Form.Group controlId='formName'>
                    <Form.Label className='contactLabel fs-5'>
                        Your Name
                    </Form.Label>
                    <Form.Control className="input fs-5" name="from_name" value={toSend.from_name} onChange={handleChange} placeholder='Enter Name Here'>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='formEmail'>
                    <Form.Label className='contactLabel fs-5'>
                        Email Address
                    </Form.Label>
                    <Form.Control className="input fs-5" name="reply_to" value={toSend.reply_to} onChange={handleChange} type='email' placeholder='Enter Email Here'/>
                    <span id="emailVal" aria-describedby='validation for email'>
                        {emailError}
                    </span>
                </Form.Group>
                <Form.Group controlId='formText'>
                    <Form.Label className='contactLabel fs-5'>
                        Enter your message here.
                    </Form.Label>
                    <Form.Control className="input fs-5" name="message" value={toSend.message} onChange={handleChange} as="textarea" rows={5} />
                </Form.Group>
                <Form.Group className='sendBtn d-flex justify-content-center'>
                    <Button className="px-5 py-2 fs-4" type="submit">Send</Button>
                </Form.Group>

            </Form> */}

            {/* not sure the below is necessary... */}
            {/* <p className='mt-4 fs-5'>If you'd like to reach out, be sure to email me via the form above, or you can also reach out at:</p>

            <ul>
                <li>
                    Github
                </li>
                <li>
                    LinkedIn
                </li>
            </ul> */}
            
        </section>

    );
}