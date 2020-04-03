import React from 'react';
import { Router } from 'react-router-dom';

import Routes from '../Routes';
import { createBrowserHistory } from 'history';


const browserHistory = createBrowserHistory();
function Game() {


    return (
        <div className="Game">
            <Router history={browserHistory}>

                <Routes />

            </Router>
        </div>
    );
}

export default Game;
