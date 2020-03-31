import React from 'react';

function LevelsList({ levelGroup }) {

    return (
        <div>
            Levels
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