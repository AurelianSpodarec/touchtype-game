import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLevel } from '../../../../store/actions/gameActions';


function LevelBox({ level, isLocked }) {
    const dispatch = useDispatch()

    let audio = new Audio("assets/audio/click/locked-2.mp3");
    console.log("levelbox audio", audio)
    function onClick() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0
        }
    }


    // change redux current level? 

    if (isLocked) {
        return (
            <div key={level + 1} onClick={onClick} className="box">
                <div className="lock">
                    <div className="key-hole"></div>
                </div>
                <div key={level + 1}>
                    {level && level}
                    {isLocked && isLocked ? "LOCKED" : "Unlocked"}
                </div>
            </div>
        )
    }


    return (
        <Link className="box" to={`/level/${level}`}>
            <div>
                {level && level}
                {isLocked && isLocked ? "LOCKED" : "Unlocked"}
            </div>
        </Link>
    );
}

export default LevelBox;
