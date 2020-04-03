import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLevel } from '../../../../store/actions/gameActions';


function LevelBox({ level, isLocked }) {
    const dispatch = useDispatch()

    // function loadLevel() {

    //     dispatch(setLevel(level))
    // }

    // change redux current level?
    console.log("BOX", level)
    return (
        <Link className="box" to={`/level/${level}`}>
            <div key={level + 1}>
                {level && level}
                {isLocked && isLocked ? "LOCKED" : "Unlocked"}
            </div>
        </Link>
    );
}

export default LevelBox;
