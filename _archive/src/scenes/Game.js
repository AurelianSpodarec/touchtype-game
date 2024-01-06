import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import MenuScene from './/MenuScene/MenuScene';
import LevelsListScene from './/LevelsScene/LevelsListScene';
import LevelScene from './/LevelScene/LevelScene';
import Routes from '../Routes';
import { AudioButton } from '../components';


const browserHistory = createBrowserHistory();

function Game() {

    return (
        <div className="bg">
            <Router history={browserHistory}>
                {/* IF root, don't show */}

                {/* 
                <AudioButton>
                    <Link>
                        <div>{"<=="}</div>
                    </Link>
                </AudioButton> */}
                <Route render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={{ enter: 350, exit: 350 }}
                            classNames="page"
                        >
                            <Routes location={location} />
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </Router >
        </div>
    );
}

export default Game;

