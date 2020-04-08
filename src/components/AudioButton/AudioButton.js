import React, { useEffect } from 'react';
import { useAudio } from '../../hooks';


function AudioButton({ children, audioURL }) {

    const audio = useAudio(audioURL)

    function playAudio() {
        audio.play()
    }


    return (
        <React.Fragment onClick={playAudio}>
            {children}
        </React.Fragment>
    );
}

export default AudioButton;




// const AudioButton = ({audioUrl, children }) => {
//     const audio = useAudio(audioUrl)

//     return <Button onClick={() => audio.play()}>{children}</Button>
// }