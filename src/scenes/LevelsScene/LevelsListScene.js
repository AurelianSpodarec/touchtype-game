import React, { useState, useEffect } from 'react';

import LevelsList from './sub-components/LevelsList/LevelsList';
import Letter from '../LevelScene/sub-components/letter/Letter';
import ProgressBar from '../LevelScene/sub-components/progressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';

import { getModeByID } from '../../utils/queries';
import { Container } from '../../components';
import gameData from '../../gameData/gameData';


function LevelsListScreen() {
    const game = useSelector(state => state.game)



    // TODO: Needs to go though all levels and count the completes true/false
    function getCompleted() {
        let completed = 0;
        let totalLevels = 0;
        const gameMode = getModeByID(1);

        for (const { groupLevels } of gameMode) {
            console.log("v", gameMode)
            totalLevels += groupLevels.length
            completed += groupLevels.filter(level => level.completed).length
        }

        return getPercentage(completed, totalLevels)
    }


    function getPercentage(a, b) {
        return a / b * 100;
    }


    return (
        <Container className="menu-scene">
            <p>LevelsScreen</p>


            {getCompleted().toFixed(0) + "% progress"}
            <LevelsList groupLevels={getModeByID(game.mode)[0].groupLevels} />

        </Container>
    );
}

export default LevelsListScreen;
