import React, { useState, useEffect } from 'react';
import LevelsList from './sub-components/LevelsList/LevelsList';
import Letter from './sub-components/letter/Letter';
import ProgressBar from './sub-components/progressBar/ProgressBar';

import gameData from './../../gameData/gameData';

function getPercentage(a, b) {
    return a / b * 100;
}

function getGameModeByID(modeID) {
    const gameMode = gameData.filter(object => object.mode === modeID);
    return gameMode;
}

function getLevelByID(id) {
    const gameMode = getGameModeByID(1);

    for (const { levels } of gameMode) {
        console.log("SDs", levels.find(level => level.id === id))
        return levels.find(level => level.id === id)
    }
}


function getCompleted() {
    let completed = 0;
    let totalLevels = 0;
    const gameMode = getGameModeByID(1);

    for (const { levels } of gameMode) {
        totalLevels += levels.length
        completed += levels.filter(level => level.completed).length
    }

    return getPercentage(completed, totalLevels)
}





// Create a function timer  
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive)
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

}

function LevelScreen() {
    const [currentLevel, setCurrentLevel] = useState(1)

    const [gameText, setGameText] = useState([]);
    const [userText, setUserText] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [result, setResult] = useState([]);
    // add timer
    const [accuracy, setAccuracy] = useState(0);
    const [WPM, setWPM] = useState(0);
    const [progress, setProgress] = useState(0);

    const [timer, setTimer] = useState(0);

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleKeyPress = (e) => {
        setCurrentIndex(currentIndex + 1);

        setUserText(userText => [...userText, e.key]);

        if (e.key === gameText[currentIndex]) {
            setResult(result => [...result, true])
        } else {
            setResult(result => [...result, false])
        }

    }

    function getTime() {
        setInterval(() => {
            // const time = new Date().getSeconds()
            setTimer(timer + 1)
        }, 1000)
        // console.log("Timer", time)
    }

    function countAccuracy() {
        console.log("Accuracy", result)
        let incorrect = 0;
        const a = result.filter(wrong => {
            if (wrong === false) {
                incorrect++
            }
        })

        setAccuracy(Math.round((result.length - incorrect) * 100 / result.length));
    }

    function getProgress() {
        console.log('Get progress', (result.length / gameText.length) * 100)
        console.log(result.length);
        console.log(gameText.length)
        let prog = (result.length / gameText.length) * 100
        setProgress(prog)
    }

    function countWPM() {
        const wpmCount = Math.round((result.length / 5) / (60 - timer)) * 100
        setWPM(wpmCount)
    }

    useEffect(() => {

        setGameText(Array.from(getLevelByID(currentLevel).gameText))
        countAccuracy();
        getProgress();
        window.addEventListener('keydown', handleKeyPress);
        return () => { window.removeEventListener('keydown', handleKeyPress) }
    }, [currentIndex])

    useEffect(() => {
        countWPM()
        getTime()
    }, [timer])


    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    return (
        <div className="LevelsScreen">
            <div>
                {Array.from(gameText).map((letter, index) => {
                    return (
                        <Letter
                            letter={letter}
                            index={index}
                            currentIndex={currentIndex}
                            result={result}
                        />
                    )
                })}
            </div>
            <div>
                <p>Accuracy: {accuracy}%</p>
                <p>Speed: {WPM}WPM</p>
                <p>Timer: {timer}</p>
            </div>
            <ProgressBar progress={progress} />
        </div>
    );
}

function LevelsListScreen() {


    return (
        <div className="LevelsScreen">
            <p>LevelScreen</p>
            {getCompleted().toFixed(0) + "% progress"}

            <LevelScreen />
            {/* <LevelsList levels={gameMode} /> */}

        </div>
    );
}

export default LevelsListScreen;
