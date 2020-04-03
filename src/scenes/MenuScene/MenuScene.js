import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container } from '../../components';


function MenuScreen() {


    return (
        <Container className="menu-scene">
            <div>
                <h2>Select Game Mode</h2>
            </div>

            <div className="menu-buttons">
                <button className="menu-button"><Link className="menu-button-link" to="/levels">Touch Typing Game</Link></button>
                <button className="menu-button"><Link className="menu-button-link">Speed Test</Link></button>
                <button className="menu-button"><Link className="menu-button-link">Scores</Link></button>
            </div>
        </Container>
    )
}


export default MenuScreen;
