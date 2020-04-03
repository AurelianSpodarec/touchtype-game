import React, { useState } from 'react';

import LevelBox from '../LevelBox/LevelBox';
import LevelGroup from '../LevelGroup/LevelGroup';


function LevelsList({ groupLevels }) {

    const [currentLevel, setCurrentLevel] = useState(null);

    function onLevel(a) {
        setCurrentLevel(a)
    }

    return (
        <div className="all-wrap">

            {groupLevels.map(group => {
                return (
                    <LevelGroup name={group.name}>
                        {group.levels.map(level => {
                            return <LevelBox onClick={() => onLevel(level.id)} level={level.id} isLocked={level.locked} />
                        })}
                    </LevelGroup>
                )
            })}

        </div>
    )
}

export default LevelsList;