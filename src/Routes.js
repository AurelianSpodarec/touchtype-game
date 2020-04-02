import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Game from './screens/Game';

const Routing = [
    {
        path: "/",
        component: Game,
    },
]

const Routes = () => {
    return <Switch>
        {Routing.map((route =>
            <Route key={route.path} exact path={route.path} component={route.component} />
        ))}
    </Switch>
}

export default Routes;