import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { TransitionGroup, CSSTransition } from "react-transition-group";


import MenuScene from './/MenuScene/MenuScene';
import LevelsListScene from './/LevelsScene/LevelsListScene';
import LevelScene from './/LevelScene/LevelScene';



const browserHistory = createBrowserHistory();
function Game() {
    const [state, setState] = React.useState(false);
    return (
        <>
            {/* // <div className="bg"> */}

            {/* <Router history={browserHistory}>
                <Route render={({ location }) => (


                    <CSSTransition
                        key={location.key}
                        timeout={450}
                        className="fade"
                    >
                        <Routes location={location} />
                    </CSSTransition>
                )} />
            </Router> */}
            <Router history={browserHistory}>
                <Route render={({ location }) => (



                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={{ enter: 500, exit: 500 }}
                            classNames="fade"
                        >

                            <Switch location={location}>
                                <Route exact path="/" component={MenuScene} />
                                <Route path="/levels" component={LevelsListScene} />
                                <Route path="/level/:id" component={LevelScene} />
                            </Switch>

                        </CSSTransition>
                    </TransitionGroup>

                )} />
            </Router >

            {/* // </div> */}
        </>
    );
}

export default Game;

