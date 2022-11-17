// import react

// all the stuffs, so gotta layout my page look
// export

import React from 'react';
import '../style/portfolio.css'
import { Image } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <section id="portCon">
            <section id='portRow'>
                <section className='beats'>
                    <h3 className='portTitle'>
                        beats collective
                    </h3>
                    
                        <a href="https://lindslewis.github.io/music-generator/">
                            <Image id="beatsImg" src={require('../images/browserHomePagecopy.jpg')}/>
                        </a>
                </section>

                <section className='hollow'>
                    <h3 className='portTitle'>
                        The Hollow Reach
                    </h3>
                    
                        <a href="https://funny-meerkat-dcfce3.netlify.app/">
                            <Image id="HollowImg" src={require('../images/unknowncopy.png')}/>
                        </a>

                </section>

            </section>
        </section>
    );
}