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
                    <div className="box__inner">


                        <div className="box__header">
                            <div className="box__level">
                                {level && level}
                            </div>
                        </div>
                        <div className="box__content">


                            <div className="box__lock">
                                <div className="lock">
                                    <div className="lock__key-hole"></div>
                                </div>
                            </div>
                        </div>
                        <div className="box__description">
                            <span>Keys f & j</span>
                        </div>


                    </div>
                </div>
            </AudioButton>
        )
    }

    return (
        <AudioButton key={level.id} audioURL="/assets/audio/click/tiny-push.mp3">
            <Link to={`/level/${level}`}>
                <div className="box">
                    <div className="box__inner">


                        <div className="box__header">

                            <div className="box__level">
                                {level && level}
                            </div>


                            <div>
                                Win
                                    </div>

                        </div>

                        <div className="box__content">
                            <div className="box__score-wrap">
                                <div>
                                    ★☆☆
                                </div>
                                <div className="checkmark">
                                    Check mark
                                </div>
                            </div>
                        </div>


                        <div className="box__description">
                            <span>Keys f & j</span>
                        </div>


                    </div>
                </div>

            </Link >
        </AudioButton >
    );
}

export default LevelBox;
