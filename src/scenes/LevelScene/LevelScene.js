import React, { useState, useEffect } from 'react';

import Letter from './sub-components/letter/Letter';
import ProgressBar from './sub-components/progressBar/ProgressBar';

import { useSelector, useDispatch } from 'react-redux';

import {
    getLevelByID,
} from '../../utils/queries';

import { Container, Keyboard } from '../../components';

// function countWPM() {
//     const wpmCount = Math.round((result.length / 5) / (60 - timer)) * 100
//     setWPM(wpmCount)
// }



// function countWPM() {
//     return
// }

function grossWPM(allTypedEntries, time) {
    console.log((allTypedEntries / 5) / time)
    return Math.floor((allTypedEntries / 5) / time * 60);
}

function netWPM(allTypedEntries, uncorrectedErrors, time) {
    const grossWPM = (allTypedEntries / 5) * 60;
    const netWPM = (grossWPM - uncorrectedErrors) / time
    return netWPM;
}

// function countAccuracy() {
//     let incorrect = 0;
//     const a = result.filter(wrong => {
//         if (wrong === false) {
//             incorrect++
//         }
//     })

//     setAccuracy(Math.round((result.length - incorrect) * 100 / result.length));
// }


// function Timer() {



// }

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


    const dispatch = useDispatch();
    const game = useSelector(state => state.game)


    let audio = new Audio("/assets/audio/typewritter/key-press.mp3");
    let audioo = new Audio("/assets/audio/sound/computer-error-blip.mp3");

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

    function ba() {
        const start = Date.now();
        setInterval(function () {
            const delta = Date.now() - start;

            setSeconds(Math.floor(delta / 1000));
        }, 500);
    }

    useEffect(() => {
        // console.log("usefefect", getLevelByID(game.level).gameText)
        const a = Array.from(getLevelByID(game.level).gameText)

        setGameText(a) // need to be dynamic
        // countAccuracy();
        getProgress();


        window.addEventListener('keydown', handleKeyPress);
        return () => { window.removeEventListener('keydown', handleKeyPress) }

    }, [currentIndex])

    useEffect(() => {
        // countWPM()
        // getTime()
        ba();
    }, [])

    // Based on WPM, give the user a star. 
    // Score is all stars compared to what the user got
    // Star lvl 1 brown, 2 silver, 3 gold - if user reached 3 stars, play party horn and some glitter

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
                </div>
                <div>
                    <p> Secnds {seconds}</p>
                    <p>Accuracy: {accuracy}%</p>
                    <p>Speed: {grossWPM(result.length, seconds)} {WPM}WPM</p>
                    <p>Timer: {timer}</p>
                </div>
            </div>
            <ProgressBar progress={progress} />

            <Keyboard />
        </Container>
    );
}

export default LevelScreen;