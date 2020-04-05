import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container } from '../../components';


function MenuScreen() {

    let audio = new Audio("assets/audio/click/tiny-push.mp3");
    console.log("audio", audio)
    function onClick() {
        audio.play()
    }

    return (
        <Container className="menu-scene">
            <div>
                <h2>Select Game Mode</h2>
            </div>

            <div className="menu-buttons">
                <button onClick={onClick} className="menu-button"><Link className="menu-button-link" to="/levels">Touch Typing Game</Link></button>
                <button onClick={onClick} className="menu-button"><Link className="menu-button-link">Speed Test</Link></button>
                <button onClick={onClick} className="menu-button"><Link className="menu-button-link">Scores</Link></button>
            </div>
        </Container>
    )
}


export default MenuScreen;
