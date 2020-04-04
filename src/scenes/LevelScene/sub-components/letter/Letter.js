import React, { useState, useEffect } from 'react';

function Letter({ letter, index, currentIndex, result }) {
    let audio = new Audio("assets/audio/click/locked.mp3");
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



    // const start = () => {
    //   audio.play()
    // }


    function onClick() {
        audio.play()
    }


    return (
        <span
            onClick={onClick}
            className="letter"
            style={{

                borderBottom: currentIndex === index ? '3px solid blue' : "",
                backgroundColor: color
            }}
            key={index}
        >
            {letter}
        </span>
    )
}


export default Letter;
