import React from 'react';


function Button({ children, onClick }) {


    return (
        <button onClick={onClick} className="Button">
            {children}
        </button>
    );
}

export default Button;
