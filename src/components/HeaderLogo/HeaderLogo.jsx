import React from 'react';
import injectSheet from 'react-jss'

const styles = {
    'b-header__logo-wrap': {
    },
    'b-header__logo-text' : {
        color: 'red',
        fontWeight: 'bold'
    }
};

const HeaderLogo = ({classes}) => (
    <div className={classes['b-header__logo-wrap']}>
        <h1 className={classes['b-header__logo-text']}>
            Filmzilla
        </h1>
    </div>
);

const StyledHeaderLogo = injectSheet(styles)(HeaderLogo);
export default StyledHeaderLogo;