// @flow
import React from 'react';

type Props = {
    handler: Function,
    children: string,
};

const Button = (props: Props) => {
    const {handler, children} = props;
    return (
        <button onClick={handler}>
            {children}
        </button>
    )
};

export default Button;