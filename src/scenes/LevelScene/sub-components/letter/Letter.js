import React, { useState, useEffect } from 'react';

function Letter({ letter, index, currentIndex, result }) {

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

    return <span
        className="letter"
        style={{

            borderBottom: currentIndex === index ? '3px solid blue' : "",
            backgroundColor: color
        }}
        key={index}
    >
        {letter}
    </span>
}


export default Letter;
