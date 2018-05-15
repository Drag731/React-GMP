import React from 'react';

const Button = ({handler, children, style}) => (
    <button onClick={handler} style={style}>
        {children}
    </button>
);

export default Button;
