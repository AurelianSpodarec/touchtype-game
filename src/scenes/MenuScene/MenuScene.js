import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function MenuScreen() {


    return (
        <div>
            <h2>Select Game Mode</h2>

            <button><Link to="/levels">Touch Typing Game</Link></button>
            <button>Speed Test</button>
            <button>Scores</button>
        </div>
    )
}


export default MenuScreen;
