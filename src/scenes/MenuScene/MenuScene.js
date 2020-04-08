import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container, AudioButton, Button } from '../../components';


function MenuScreen() {

    const audio = new Audio("/assets/audio/click/tiny-push.mp3")

    function launch() {
        console.log("Hello")
    }

    function onClick() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0
        }
    }


    return (
        <Container className="menu-scene">

            <div className="align-vertical-center height-100vh flex-column">

                <div>
                    <h1>Touch Type Game</h1>
                </div>

                <div className="menu-buttons">
                    <AudioButton audioURL="/assets/audio/click/tiny-push.mp3">
                        <Button className="menu-button" >
                            <Link className="menu-button-link" to="/levels">Touch Type Practice</Link>
                        </Button>
                    </AudioButton>


                    <Button onClick={() => {
                        audio.play()
                        launch()
                    }}>touch type</Button>

                    <AudioButton audioURL="/assets/audio/click/tiny-push.mp3">
                        <Button className="menu-button">
                            <Link className="menu-button-link">Speed Test</Link>
                        </Button>
                    </AudioButton>

                    <AudioButton audioURL="/assets/audio/click/tiny-push.mp3">
                        <Button className="menu-button" >
                            <Link className="menu-button-link">Scores</Link>
                        </Button>
                    </AudioButton>
                </div>
            </div>

        </Container>
    )
}


export default MenuScreen;
