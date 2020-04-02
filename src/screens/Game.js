import React from 'react';
import LevelsListScreen from './LevelsScreen/LevelsListScreen';


import Routes from '../Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Choose mode screen
// Game Typing: Show different levels, click the level
// Speed Test: Get right to it


// Keep track of different screens
// Game mode, score, settings

// Function, get game mode

const browserHistory = createBrowserHistory();
function Game() {


    return (
        <div className="Game">
            <Router history={browserHistory}>
                s
                <Routes />
                {/* <LevelsListScreen /> */}

            </Router>
        </div>
    );
}

export default Game;
