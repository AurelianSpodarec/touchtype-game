import React from 'react';


function LevelGroup({ name, children }) {
    return (
        <div className="all-wrap" key={name}>
            <div>
                <h2>{name && name}</h2>
            </div>
            <div className="all-wrapp" >
                {children}
            </div>
        </div>
    )
}

export default LevelGroup;