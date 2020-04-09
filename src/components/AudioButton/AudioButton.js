import React, { useEffect } from 'react';
import { useAudio } from '../../hooks';

import Button from '../Button/Button';


function AudioButton({ children, audioURL, className }) {

    const audio = useAudio(audioURL)

    function playAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0
        }
    }

    return (
        <Button className={className} onClick={playAudio}>
            {children}
        </Button>
    );
}

export default AudioButton;