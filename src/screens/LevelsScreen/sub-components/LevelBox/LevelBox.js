import React from 'react';


function LevelBox({ level, isLocked }) {
    return (
        <div className="LevelBox">
            {level && level}
            {isLocked && isLocked ? "LOCKED" : "Unlocked"}
        </div>
    );
}

export default LevelBox;
