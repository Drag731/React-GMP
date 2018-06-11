// @flow
import React from 'react';

type Props = {
    handler: Function,
    children: string,
};

const style = {
    color: "red"
};

const Button = (props: Props) => {
    const {handler, children} = props;
    return (
        <button style={style} onClick={handler}>
            {children}
        </button>
    )
};

export default Button;