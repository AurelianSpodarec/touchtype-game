import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Container } from '../../components';


function MenuScreen() {


    return (
        <div>
            <Container>
                <h2>Select Game Mode</h2>

                <button><Link to="/levels">Touch Typing Game</Link></button>
                <button>Speed Test</button>
                <button>Scores</button>
            </Container>
        </div>
    )
}


export default MenuScreen;
