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
                    <p className="repoCon">
                        See the repository <a href="https://github.com/lindslewis/music-generator">here</a>.
                    </p>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        shelf space
                    </h3>
                    
                        <a href="https://shelf-space.herokuapp.com/">
                            <Image id="shelfImg" src={require('../shelfspace.jpg')}/>
                        </a>
                    <p className="repoCon">
                        See the repository <a href="https://github.com/thegabe101/Lindsay-Noah-Gabe-Rojas-Project-2">here</a>.
                    </p>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        studio ghibli quiz
                    </h3>
                    
                        <a href="https://lindslewis.github.io/studio-ghibli-quiz/">
                            <Image id="ghibliImg" src={require('../FRONTPAGE.jpg')}/>
                        </a>
                    <p className="repoCon">
                        See the repository <a href="https://github.com/lindslewis/studio-ghibli-quiz">here</a>.
                    </p>

                </section>
            </section>

            <section id='portRow2'>
                <section className='portfolio'>
                    <h3 className='portTitle'>
                        note taker
                    </h3>
                    
                        <a href="https://lindslewis-note-taker.herokuapp.com/">
                            <Image id="notesImg" src={require('../notetaker.jpg')}/>
                        </a>
                    <p className="repoCon">
                        See the repository <a href="https://github.com/lindslewis/note-taker">here</a>.
                    </p>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        weather radar
                    </h3>
                    
                        <a href="https://lindslewis.github.io/weather-radar/">
                            <Image id="radarImg" src={require('../weatherradar.jpg')}/>
                        </a>
                    <p className="repoCon">
                        See the repository <a href="https://github.com/lindslewis/weather-radar">here</a>.
                    </p>

                </section>

                <section className='portfolio'>
                    <h3 className='portTitle'>
                        The Hollow Reach
                    </h3>
                    
                        <a href="https://funny-meerkat-dcfce3.netlify.app/">
                            <Image id="rpsImg" src={require('../unknown.png')}/>
                        </a>
                    <p className="repoCon">
                        See the repository <a href="https://github.com/alonpatashnik/rpg-word-game-frontend">here</a>.
                    </p>

                </section>
            </section>
        </section>
    );
}