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

// It’s spelling out “shift” because that’s key name associated when you press the actual “Shift” key on your keyboard
// Same thing happens with “Enter”, “Backspace”, “Escape”, etc.
// You’ll probably want to use ‘key.which’ and that’ll give you a number associated to the key pressed.
// And then you can just make sure that the value is in between the values of a-z and A-Z
// And probably the commas, exclamation marks, etc

// .which is deprecated


function renderLetter(letter, index, currentLetter, currentIndex, gameText) {

    // If letter matches the letter from game text, add pernament bgColor of 'green'
    // If letter doesn't match the letter from the game text, add pernament bgcolor of 'red'

    // console.log("render eltter", index)
    return <span
        style={{
            fontSize: "20px",
            margin: "0 2px",
            width: '20px',
            borderBottom: currentIndex === index ? '3px solid blue' : "",
            backgroundColor: currentLetter === gameText[currentIndex] ? 'green' : 'red'
        }}
        key={index}>
        {letter}
    </span>
}

// If the letter matches

function LevelScreen() {
    const [currentLevel, setCurrentLevel] = useState(1)
    const [gameText, setGameText] = useState([])
    const [userText, setUserText] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [incorrectLettersCount, setIncorrectLettersCount] = useState(0)
    const [currentLetter, setCurrentLetter] = useState(null)

    const [result, setResult] = useState([])


    // console.log(gameText)
    // function getAccuracy() {
    // const accuracy = (userText.length - incorrectLetters) * 100 / userText.length;
    // console.log(accuracy)
    // setAccuracy(accuracy);
    // }

    const type = () => {
        // console.log("s")
        // compareGameText()
        // getAccuracy()
        window.addEventListener('keydown', e => {
            setUserText(userText => [...userText, e.key]);
            setCurrentIndex(currentIndex => currentIndex += 1);
            setCurrentLetter(e.key)
        })
    }
    console.log("result", result)

    function compareGameText() {
        setUserText(userText => [userText, ...currentLetter])
        if (currentLetter === gameText[currentIndex]) {
            // setIncorrectLettersCount(incorrectLettersCount => incorrectLettersCount + 1)
            setResult(result => [result, ...true])
        } else {
            setResult(result => [result, ...false])
        }
        setCurrentIndex(currentIndex => [currentIndex, currentIndex + 1])
    }

    useEffect(() => {
        setGameText(Array.from(getLevelById(currentLevel).gameText))
        type()
        // setAccuracy(accuracy)
    }, [])

    return (
        <div className="LevelsScreen">
            <div>
                {Array.from(gameText).map((letter, index) => {
                    return renderLetter(letter, index, currentLetter, currentIndex, gameText)
                })}
            </div>
            <div>
                {/* <p>Accuracy: {accuracy}%</p> */}
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
