import React, { useState, useEffect } from 'react';

function Letter({ letter, index, currentIndex, result }) {

    let color;
    switch (result[index]) {
        case true:
            color = 'valid'
            break;
        case false:
            color = 'error'
            break;
        default:
            color = "clear"
    }

    return (
        <span
            className="letter"
            style={{

                borderBottom: currentIndex === index ? '3px solid blue' : "",
                // backgroundColor: color
            }}
            key={index}
        >
            <span className={color}>{letter}</span>
        </span>
    )
}


export default Letter;
