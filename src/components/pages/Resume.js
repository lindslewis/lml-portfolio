import React from 'react';
import '../style/contact.css';
import { Button } from 'react-bootstrap';

export default function Resume() {
    return (
        <section id='portCon'>
            <section id="resumeCon">
                <section id='downloadCon'>
                    <p>
                        Download my resume!
                    </p>
                    <Button id="resumeBtnCon">
                        <a id="resumeBtn" href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:09d83dc1-97c0-4a02-9824-b73410d05464">Download</a>
                    </Button>
                </section>
                <h3>Proficiencies</h3>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Javascript
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Writing
                    </li>
                    <li>
                        Copy Editing
                    </li>
                </ul>
            </section>
        </section>
    )
}