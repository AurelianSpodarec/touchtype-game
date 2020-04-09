import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLevel } from '../../../../store/actions/gameActions';
import { AudioButton, Button } from '../../../../components';


function LevelBox({ level, isLocked, perfectScore, description }) {
    const dispatch = useDispatch()

    // change redux current level? 
    if (isLocked) {
        return (
            <AudioButton key={level.id} audioURL="/assets/audio/click/locked-2.mp3">
                <div className="box">

                    <div>
                        <div className="d-flex flex-row flex-space-between">
                            <div className="box__level">
                                {level && level}
                            </div>
                        </div>

                        <div className="box__lock">
                            <div className="lock">
                                <div className="key-hole"></div>
                            </div>
                        </div>
                    </div>
                    <div className="box__description">
                        <span>Keys f & j</span>
                    </div>

                </div>
            </AudioButton>
        )
    }

    return (
        <AudioButton key={level.id} audioURL="/assets/audio/click/tiny-push.mp3">
            <Link to={`/level/${level}`}>
                <div className="box">

                    <div>

                        <div className="d-flex flex-row flex-space-between">
                            <div className="box__level">
                                {level && level}
                            </div>

                            {/* {perfectScore && */}
                            <div>
                                Win
                            </div>
                            {/* } */}
                        </div>
                        <div className="box__score-wrap">
                            <div>
                                ★☆☆
                            </div>
                            {/* <div className="checkmark">
                                Check mark
                            </div> */}

                            {/* Bronze, sliver, gold stars */}
                        </div>

                    </div>
                    <div className="box__description">
                        <span>Keys f & j</span>
                    </div>

                </div>

            </Link>
        </AudioButton >
    );
}

export default LevelBox;
