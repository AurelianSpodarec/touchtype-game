import React from 'react';
import LevelBox from './sub-components/LevelBox/LevelBox';


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


    return (
        <div className="LevelsScreen">

            <LevelsList data={levels} />

        </div>
    );
}

export default LevelsScreen;
