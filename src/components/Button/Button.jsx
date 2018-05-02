import React from 'react';

const Button = ({handler, children}) => (
    <button onClick={handler}>
        {children}
    </button>
);

export default Button;
