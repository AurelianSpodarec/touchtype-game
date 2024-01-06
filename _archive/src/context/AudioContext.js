import React, { createContext, useEffect, useState } from 'react';


const AudioContext = createContext();


const AudioProvider = ({ children }) => {
    const [audio, setAudio] = useState();


    return (
        <AudioContext.Provider value={{ audio }}>
            {children}
        </AudioContext.Provider>
    )

}

export {
    AudioContext,
    AudioProvider
}