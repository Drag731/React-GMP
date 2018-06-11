// @flow
import React from 'react';
import injectSheet, {withTheme} from 'react-jss'

type Props = {
    handler: Function,
    children: string,
    classes: {myButton:{}}
};

const styles = theme => ({
    myButton: {
        color: theme.colorPrimary,
        textTransform: theme.textTransform
    }
});

const Button = withTheme((props: Props) => {
    const {handler, children, classes } = props;
    return (
        <button className={classes.myButton} onClick={handler}>
            {children}
        </button>
    )
});

const StyledButton = injectSheet(styles)(Button);
export default StyledButton;