import React, { useState, useEffect } from 'react';

import Letter from './sub-components/letter/Letter';
import ProgressBar from './sub-components/progressBar/ProgressBar';

import { useSelector, useDispatch } from 'react-redux';

import {
    getLevelByID,
} from '../../utils/queries';

import { Container, Keyboard } from '../../components';


function grossWPM(allTypedEntries, time) {
    console.log((allTypedEntries / 5) / time)
    if (!time) return 0;
    return Math.floor((allTypedEntries / 5) / time * 60);
}

function netWPM(allTypedEntries, uncorrectedErrors, time) {
    const grossWPM = (allTypedEntries / 5) * 60;
    const netWPM = (grossWPM - uncorrectedErrors) / time
    if (!time) return 0;
    return netWPM;
}


// TODO: Add a platinium color if the user reaches 100% accuracy with over 50WPM
function starScore({ accuracy, wpm }) {

    // If user has 80-89% - bronze star, if uesr has 95%+ gold star
    // const accuracy/


    const starColors = ["bronze", "silver", "gold"];


    // If user has 40wpm, but 80% accuracy, what do yoooou do ? Give him one star, is accuracy preffered or do something..

    // Show each start to be full if it matches the requirement. 

    //TODO: Animate the stars from up to down 
    // Show empty stars, and animate a full star wen enetering perhaps

    // Focus on accuracy for now
    // Bronze 80-89% or WPM 0 -20
    // Silver 90-95% or WPM 20 -39
    // Gold 95%+ wpm or 40+

    // Do math Math
    // No float allowed - at least for now
    // Points = 100% is 2000 score
    // 0.1% = 2
    // User has 84% = 1840 score

    let badge;
    let badgeCount;
    switch (accuracy) {
        case accuracy === 80 <= 89:
            badge = "bronze"
            badgeCount = 1
            break;
        case accuracy === 90 <= 95:
            badge = "silver";
            badgeCount = 2
            break;
        case accuracy < 95:
            badge = "gold"
            badgeCount = 3
            break;
        case 100:
            badge = "master"
            badgeCount = 3
            break;
        default:
            badge = "bronze"
    }

    function starOutline() {
        return (
            <>
                ☆
            </>
        )
    }

    function starFull() {
        return (
            <>
                ★
            </>
        )
    }

    // Animate inside store

    function starRow() {


        return (
            <>
                for (i = 0; i < badgeCount; {
                    starFull()
                }
            </>
        )
    }

    return (
        <div>
            {starRow}
        </div>
    )
}




// Start timer when the user has typed the first letter. 
// End the timer when the user has reached the last letter
//   - Save the WPM, and user results. 
//   - Give him a score
//   - Show a 'next level' or 'try again' buttons

// Open a modal -  Based on WPM, give the user a star. 
// Score is all stars compared to what the user got
// Star lvl 1 brown, 2 silver, 3 gold - if user reached 3 stars, play party horn and some glitter


// To pass, the user needs to have at least 80% accuracy - user passes we give him a tick

function scoreSystem() {
    // Speed: 20wpm 40wpm 60wpm
    // Errors: Makes the score lower

    // Show star bronze, silver, gold
}

function LevelScreen() {

    const [gameText, setGameText] = useState([]);
    const [userText, setUserText] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(true);


    const [result, setResult] = useState([]);
    // add timer
    const [accuracy, setAccuracy] = useState(0);
    const [WPM, setWPM] = useState(0);
    const [progress, setProgress] = useState(0);

    const [seconds, setSeconds] = useState(0);


    const [gameEndResult, setGameEndresult] = useState({})


    const dispatch = useDispatch();
    const game = useSelector(state => state.game)


    let audio = new Audio("/assets/audio/typewritter/key-press.mp3");
    let audioo = new Audio("/assets/audio/sound/computer-error-blip.mp3");
    let audioEnd = new Audio("/assets/audio/sound/party-horn.mp3");
    let applauseSound = new Audio("/assets/audio/sound/applause.mp3");

    const handleKeyPress = (e) => {

        console.log("Ss", gameText.length === result.length)
        if (gameText.length != result.length) {
            setPaused(false) // problem restarts
        }

        setCurrentIndex(currentIndex + 1);
        setUserText(userText => [...userText, e.key]);


        if (e.key === gameText[currentIndex]) {
            audio.play()
            setResult(result => [...result, true])
        } else {
            console.log("wrong")
            audioo.play()
            setResult(result => [...result, false])
        }

    }

    function getProgress() {
        let prog = (result.length / gameText.length) * 100
        setProgress(prog)
    }

    function clock() {
        const start = Date.now();

        if (!paused) {
            var a = setInterval(function () {
                const delta = Date.now() - start;

                setSeconds(Math.floor(delta / 1000));
            }, 500);
        } else {
            clearInterval(a)
        }
    }

    function countAccuracy() {
        let incorrect = 0;
        const a = result.filter(wrong => {
            if (wrong === false) incorrect++
        })
        if (result.length === 0) setAccuracy(0)
        setAccuracy(Math.round((result.length - incorrect) * 100 / result.length));
    }

    function endGame() {

        console.log("End game")

        if (result.length === gameText.length) {
            setPaused(true)
            // audioEnd.play()
            // applauseSound.play()
        }

        // get the wpm
        // get the time

        //show modal
        // give score
    }

    useEffect(() => {
        const a = Array.from(getLevelByID(game.level).gameText)
        setGameText(a) // need to be dynamic
    }, [])

    useEffect(() => {
        const a = Array.from(getLevelByID(game.level).gameText)
        console.log("aa", result, gameText)
        // setGameText(a) // need to be dynamic
        countAccuracy();
        getProgress();
        endGame()

        window.addEventListener('keydown', handleKeyPress);
        return () => { window.removeEventListener('keydown', handleKeyPress) }
    }, [currentIndex])

    useEffect(() => {
        setWPM(grossWPM(result.length, seconds))
    }, [seconds])

    useEffect(() => {
        clock();
    }, [paused])


    // Don't start tiem untill first keystroke
    // finish time when game text matches user text length

    return (
        <Container className="menu-scene ">


            <div className="level-scene__inner">
                <div>
                    <div className="level-scene__letters">
                        {Array.from(gameText).map((letter, index) => {
                            return (
                                <Letter
                                    key={index}
                                    letter={letter}
                                    index={index}
                                    currentIndex={currentIndex}
                                    result={result}
                                />
                            )
                        })}
                    </div>
                    <ProgressBar progress={progress} />

                    <Keyboard />

                    <div>
                        {paused ? " START typing to play" : ""}
                        <p>Timer: {seconds}</p>
                        <p>Accuracy: {accuracy}%</p>
                        <p>Speed: {WPM}WPM</p>
                    </div>
                </div>



            </div>

        </Container>
    );
}

export default LevelScreen;