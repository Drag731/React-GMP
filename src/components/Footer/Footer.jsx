import React from 'react';
import injectSheet from 'react-jss'

const styles = {
    footer: {
        backgroundColor: 'black',
        margin: '30px auto 0',
        maxWidth: '1000px'
    },
    footer__wrap : {
        padding: '15px 30px',
        color: 'red'
    }
};

const Footer = ({classes}) => (
    <div className={classes.footer}>
        <div className={classes.footer__wrap}>
            <span>Filmzilla</span>
        </div>
    </div>
);

const StyledFooter = injectSheet(styles)(Footer);
export default StyledFooter;