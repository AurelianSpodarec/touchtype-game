import React, { useState, useEffect } from 'react';

import LevelsList from './sub-components/LevelsList/LevelsList';
import Letter from '../LevelScene/sub-components/letter/Letter';
import ProgressBar from '../LevelScene/sub-components/progressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';

import { getModeByID } from '../../utils/queries';
import { Container } from '../../components';



function LevelsListScreen() {
    const game = useSelector(state => state.game)

    return (
        <Container className="menu-scene">
            <p>LevelScreen</p>


            {/* {getCompleted().toFixed(0) + "% progress"} */}

            {/* <LevelScreen /> */}
            <LevelsList groupLevels={getModeByID(game.mode)[0].groupLevels} />

        </Container>
    );
}

export default LevelsListScreen;
