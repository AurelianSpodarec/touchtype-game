import React, { useState, useEffect } from 'react';


const useAudio = (url) => {
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        const audio_file = new Audio(url);
        setAudio(audio_file);
    }, [url]);
    return audio;
}

export default useAudio;