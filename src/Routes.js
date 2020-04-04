import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MenuScene from './scenes/MenuScene/MenuScene';
import LevelsListScene from './scenes/LevelsScene/LevelsListScene';
import LevelScene from './scenes/LevelScene/LevelScene';


const Routing = [
    {
        path: "/",
        component: MenuScene
    },
    {
        path: "/levels",
        component: LevelsListScene
    },
    {
        path: "/level/:id",
        component: LevelScene
    },
    // {
    //     path: "/speed-test",
    //     component: SpeedTestScreen,
    // },
    // {
    //     path: "score",
    // },
]

const Routes = ({ location }) => {
    return (
        <Switch location={location}>
            {Routing.map((route =>
                <Route key={route.path} exact path={route.path} component={route.component} />
            ))}
        </Switch>
    )
}

export default Routes;