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
        style={{
            fontSize: "20px",
            margin: "0 2px",
            width: '20px',
            borderBottom: currentIndex === index ? '3px solid blue' : "",
            backgroundColor: color
        }}
        key={index}
    >
        {letter}
    </span>
}


export default Letter;
