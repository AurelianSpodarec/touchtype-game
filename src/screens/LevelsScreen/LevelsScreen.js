import React from 'react';
import LevelsList from './sub-components/LevelsList/LevelsList';


const levels = [
    {
        id: 1,
        name: "Top Row",
        levels: [
            {
                id: 1,
                text:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: false
            },
            {
                id: 2,
                text:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true
            },
            {
                id: 3,
                text:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true
            },
        ]
    },
    {
        id: 2,
        name: "Bottom Row",
        levels: [
            {
                id: 4,
                text:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true
            },
        ]
    }
]





function LevelsScreen() {
    const [progress, setProgress] = React.useState(0);

    let unlockedLevels = 5
    let lockedLevels = 13

    const percentage = unlockedLevels / lockedLevels * 100;
    return (
        <div className="LevelsScreen">
            LevelScreen
            {`${percentage} %`}
            {/* // Get total items, check if its locked, get a percentage on how many are unlocked */}

            {levels.map(progress => {

                console.log(progress.levels)

            })}


            <LevelsList levels={levels} />

        </div>
    );
}

export default LevelsScreen;
