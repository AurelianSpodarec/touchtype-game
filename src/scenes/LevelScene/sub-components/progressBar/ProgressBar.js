import React, { useState, useEffect } from 'react';

function ProgressBar({ progress }) {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ height: '10px', backgroundColor: 'red', width: progress + "%" }}></div>
        </div>
    )
}

export default ProgressBar;
