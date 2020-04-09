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

    const [result, setResult] = useState([]);
    // add timer
    const [accuracy, setAccuracy] = useState(0);
    const [WPM, setWPM] = useState(0);
    const [progress, setProgress] = useState(0);


    const [timer, setTimer] = useState(0);

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const [gameEndResult, setGameEndresult] = useState({})

    const dispatch = useDispatch();
    const game = useSelector(state => state.game)


    let audio = new Audio("/assets/audio/typewritter/key-press.mp3");
    let audioo = new Audio("/assets/audio/sound/computer-error-blip.mp3");
    let audioEnd = new Audio("/assets/audio/sound/party-horn.mp3");
    let applauseSound = new Audio("/assets/audio/sound/applause.mp3");

    const handleKeyPress = (e) => {

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
        setInterval(function () {
            const delta = Date.now() - start;

            setSeconds(Math.floor(delta / 1000));
        }, 500);
    }

    function countAccuracy() {
        let incorrect = 0;
        const a = result.filter(wrong => {
            if (wrong === false) {
                incorrect++
            }
        })
        if (result.length === 0) setAccuracy(0)
        setAccuracy(Math.round((result.length - incorrect) * 100 / result.length));
    }

    function endGame() {

        console.log("End game")

        if (result.length === gameText.length) {
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
    }, [])


    return (
        <Container className="menu-scene ">


            <div>
                <div>
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
                    <ProgressBar progress={progress} />

                    <Keyboard />
                </div>

                <div>
                    <p>Timer: {seconds}</p>
                    <p>Accuracy: {accuracy}%</p>
                    <p>Speed: {WPM}WPM</p>
                </div>
            </div>

        </Container>
    );
}

export default LevelScreen;