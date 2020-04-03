import React from 'react';

import Routes from '../Routes';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const browserHistory = createBrowserHistory();
function Game() {

    return (
        <div className="Game">
            <div className="bg">
                <Router history={browserHistory}>

                    <Routes />

                </Router>
            </div>
        </div>
    );
}

export default Game;
