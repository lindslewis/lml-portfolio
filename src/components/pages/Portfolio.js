// import react

// all the stuffs, so gotta layout my page look
// export

import React from 'react';
import '../style/porfolio.css'
import { Image } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <section id="portCon">
            <section id='portRow'>
                <section className='portfolio'>
                    <h3 className='portTitle'>
                        beats collective
                    </h3>
                    
                        <a href="https://lindslewis.github.io/music-generator/">
                            <Image id="beatsImg" src={require('../browserHomePagejpg.jpg')}/>
                        </a>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        shelf space
                    </h3>
                    
                        <a href="https://shelf-space.herokuapp.com/">
                            <Image id="beatsImg" src={require('../browserHomePagejpg.jpg')}/>
                        </a>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        beats collective
                    </h3>
                    
                        <a href="https://lindslewis.github.io/music-generator/">
                            <Image id="beatsImg" src={require('../browserHomePagejpg.jpg')}/>
                        </a>

                </section>
            </section>

            <section id='portRow2'>
                <section className='portfolio'>
                    <h3 className='portTitle'>
                        beats collective
                    </h3>
                    
                        <a href="https://lindslewis.github.io/music-generator/">
                            <Image id="beatsImg" src={require('../browserHomePagejpg.jpg')}/>
                        </a>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        beats collective
                    </h3>
                    
                        <a href="https://lindslewis.github.io/music-generator/">
                            <Image id="beatsImg" src={require('../browserHomePagejpg.jpg')}/>
                        </a>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        beats collective
                    </h3>
                    
                        <a href="https://lindslewis.github.io/music-generator/">
                            <Image id="beatsImg" src={require('../browserHomePagejpg.jpg')}/>
                        </a>

                </section>
            </section>
        </section>
    );
}