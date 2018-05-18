import React from 'react';

const Button = ({handler, children, style, className=''}) => (
    <button
        onClick={handler}
        style={style}
        className={className}
    >
        {children}
    </button>
);

export default Button;
