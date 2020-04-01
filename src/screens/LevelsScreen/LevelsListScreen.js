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
                    "oGoodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
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

// It’s spelling out “shift” because that’s key name associated when you press the actual “Shift” key on your keyboard
// Same thing happens with “Enter”, “Backspace”, “Escape”, etc.
// You’ll probably want to use ‘key.which’ and that’ll give you a number associated to the key pressed.
// And then you can just make sure that the value is in between the values of a-z and A-Z
// And probably the commas, exclamation marks, etc

// .which is deprecated


function renderLetter(letter, index, currentIndex, result) {

    let color;

    switch (result[index]) {
        case true:
            color = 'green'
            break;
        case false:
            color = 'red'
            break;
        default:
            color = "white"
    }

    return <span
        style={{
            fontSize: "20px",
            margin: "0 2px",
            width: '20px',
            borderBottom: currentIndex === index ? '3px solid blue' : "",
            backgroundColor: color
        }}
        key={index}
    >
        {letter}
    </span>
}

function LevelScreen() {
    const [currentLevel, setCurrentLevel] = useState(1)

    const [gameText, setGameText] = useState([])
    const [userText, setUserText] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);

    const [result, setResult] = useState([])
    // add timer
    const [accuracy, setAccuracy] = useState(0)

    const handleKeyPress = (e) => {
        setCurrentIndex(currentIndex + 1);

        setUserText(userText => [...userText, e.key]);

        if (e.key === gameText[currentIndex]) {
            setResult(result => [...result, true])
        } else {
            setResult(result => [...result, false])
        }

    }

    function countAccuracy() {
        console.log("Accuracy", result)
        let incorrect = 0;
        const a = result.filter(wrong => {
            if (wrong === false) {
                incorrect++
            }
        })

        setAccuracy((result.length - incorrect) * 100 / result.length)
    }

    useEffect(() => {
        setGameText(Array.from(getLevelById(currentLevel).gameText))
        countAccuracy();
        window.addEventListener('keydown', handleKeyPress);
        return () => { window.removeEventListener('keydown', handleKeyPress) }
    }, [currentIndex])

    return (
        <div className="LevelsScreen">
            <div>
                {Array.from(gameText).map((letter, index) => {
                    return renderLetter(letter, index, currentIndex, result)
                })}
            </div>
            <div>
                <p>Accuracy: {accuracy}%</p>
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
