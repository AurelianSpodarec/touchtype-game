import React from 'react';


function LevelBox({ level, isLocked }) {

    function loadLevel() {
        // Go to level
    }

    return (
        <div onClick={loadLevel} key={level + 1}>
            {level && level}
            {isLocked && isLocked ? "LOCKED" : "Unlocked"}
        </div>
    );
}

export default LevelBox;
