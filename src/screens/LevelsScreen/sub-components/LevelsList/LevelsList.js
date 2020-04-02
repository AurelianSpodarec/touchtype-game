import React from 'react';

import LevelBox from '../LevelBox/LevelBox';
import LevelGroup from '../LevelGroup/LevelGroup';


function LevelsList({ levels }) {

    return (
        <div>

            {levels.map(group => {
                return (
                    <LevelGroup name={group.name}>
                        {group.levels.map(level => {
                            return <LevelBox level={level.id} isLocked={level.locked} />
                        })}
                    </LevelGroup>
                )
            })}

        </div>
    )
}

export default LevelsList;