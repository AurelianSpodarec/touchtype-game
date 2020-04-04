import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLevel } from '../../../../store/actions/gameActions';


function LevelBox({ level, isLocked }) {
    const dispatch = useDispatch()

    // function loadLevel() {

    //     dispatch(setLevel(level))
    // }
    let audio = new Audio("assets/audio/click/locked-2.mp3");

    // const start = () => {
    //   audio.play()
    // }


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
            <div onClick={onClick} className="box">
                <div class="lock">
                    <div class="key-hole"></div>
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
            <div key={level + 1}>
                {level && level}
                {isLocked && isLocked ? "LOCKED" : "Unlocked"}
            </div>
        </Link>
    );
}

export default LevelBox;
