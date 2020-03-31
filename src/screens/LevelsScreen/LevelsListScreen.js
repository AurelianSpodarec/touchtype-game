import React, { useState, useEffect } from 'react';
import LevelsList from './sub-components/LevelsList/LevelsList';


const groupedLevels = [
    {
        id: 1,
        name: "Top Row",
        levels: [
            {
                id: 1,
                gameText:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: false,
                completed: true
            },
            {
                id: 2,
                gameText:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true,
                completed: false
            },
            {
                id: 3,
                gameText:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true,
                completed: false
            },
            {
                id: 4,
                gameText:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true,
                completed: false
            },
        ]
    },
    {
        id: 2,
        name: "Bottom Row",
        levels: [
            {
                id: 5,
                gameText:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true,
                completed: false
            },
            {
                id: 6,
                gameText:
                    "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                locked: true,
                completed: false
            },
        ]
    }
]


function getPercentage(a, b) {
    return a / b * 100;
}

function getCompleted() {
    let completed = 0;
    let totalLevels = 0;


    for (const { levels } of groupedLevels) {
        totalLevels += levels.length
        completed += levels.filter(level => level.completed).length
    }

    return getPercentage(completed, totalLevels)
}


function getLevelById(id) {
    for (const { levels } of groupedLevels) {
        return levels.find(level => level.id === id)
    }
}


function renderLetter(letter, index) {
    // Add a class 'right or error'
    // Does the letter match whats in the array? If yes, put green, if not, put red
    return <span style={{
        fontSize: "20px",
        margin: "0 2px"
    }} key={index}>{letter}</span>
}


function LevelScreen() {
    const [currentLevel, setCurrentLevel] = useState(1)
    const [gameText, setGameText] = useState([])
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
    const [userText, setUserText] = useState([])


    function getAccuracy() {
        console.log("Game text", gameText)
        console.log("User text", userText)
    }
    // At the start, don't show accuracy or speed, as there isn't any

    const type = () => {
        window.addEventListener('keydown', e => {
            setUserText(userText => [...userText, e.key])
        })
    }
    console.log("User text", userText)

    useEffect(() => {
        setGameText(Array.from(getLevelById(currentLevel).gameText))
        type()
    }, [])

    return (
        <div className="LevelsScreen">
            <div>
                {Array.from(gameText).map((letter, index) => {
                    return renderLetter(letter, index)
                })}
            </div>
            <div>
                <p>Accuracy: 100% {getAccuracy()}</p>
                <p>Speed: 0WPM</p>
            </div>

        </div>
    );
}

function LevelsListScreen() {


    return (
        <div className="LevelsScreen">
            <p>LevelScreen</p>
            {getCompleted().toFixed(0) + "% progress"}

            <LevelScreen />
            {/* <LevelsList levels={groupedLevels} /> */}

        </div>
    );
}

export default LevelsListScreen;
