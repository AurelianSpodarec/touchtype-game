import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MenuScreen from './screens/MenuScreen/MenuScreen';
import LevelsListScreen from './screens/LevelsScreen/LevelsListScreen';
import LevelScreen from './screens/LevelScreen/LevelScreen';


const Routing = [
    {
        path: "/",
        component: MenuScreen
    },
    {
        path: "/levels",
        component: LevelsListScreen
    },
    {
        path: "/levels/:id",
        component: LevelScreen
    },
    // {
    //     path: "/speed-test",
    //     component: SpeedTestScreen,
    // },
    // {
    //     path: "score",
    // },
]

const Routes = () => {
    return <Switch>
        {Routing.map((route =>
            <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
    </Switch>
}

export default Routes;