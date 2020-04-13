import React from 'react';

function Key(char, charTop, type, dataKey) {

    // Add Appropriate class

    // Type must be one of the following:
    const types = ["shift", "space", "backspace", "capsLock", "tab", "control", "option"];

    return (
        <div class={`keyboard__key keyboard__key--${type}`} data-key={dataKey}>
            {charTop ? <div>{charTop}</div> : ""}
            <div>{char}</div>
        </div>
    )
}

export default Key;