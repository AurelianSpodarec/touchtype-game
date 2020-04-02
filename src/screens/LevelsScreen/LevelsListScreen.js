import React, { useState, useEffect } from 'react';

import LevelsList from './sub-components/LevelsList/LevelsList';
import Letter from './sub-components/letter/Letter';
import ProgressBar from './sub-components/progressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';

import { getModeByID } from '../../utils/queries';



function LevelsListScreen() {
    const game = useSelector(state => state.game)

    return (
        <div className="LevelsScreen">
            <p>LevelScreen</p>


            {/* {getCompleted().toFixed(0) + "% progress"} */}

            {/* <LevelScreen /> */}
            <LevelsList groupLevels={getModeByID(game.mode)[0].groupLevels} />

        </div>
    );
}

export default LevelsListScreen;
