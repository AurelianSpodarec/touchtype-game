import React from 'react';


function LevelGroup({ name, children }) {
    return (
        <div key={name}>
            <h2>{name && name}</h2>
            {children}
        </div>
    )
}

export default LevelGroup;