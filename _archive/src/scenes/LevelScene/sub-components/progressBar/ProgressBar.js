import React, { useState, useEffect } from 'react';

function ProgressBar({ progress }) {
    return (
        <div className="progress-bar">
            <div className="progress-bar__bar" style={{ width: progress + "%" }}></div>
        </div>
    )
}

export default ProgressBar;
