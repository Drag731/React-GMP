// @flow
import React from 'react';
import injectSheet from 'react-jss'

type Props = {
    item: {
        poster_path: string,
        title: string,
        release_date: number,
        genres: Array<string>
    },
    classes: {
        'b-item': {},
        'b-item__img-wrap': {},
        'b-item__img-pic': {},
        'b-item__title-wrap': {},
        'b-item__title-text': {},
        'b-item__title-year': {},
        'b-item__ganre-wrap': {}
    }
};

const styles = {
    'b-item': {
        maxWidth: '300px',
        marginTop: '30px'
    },
    'b-item__img-wrap': {
        marginBottom: '10px'
    },
    'b-item__img-pic': {
        width: '100%'
    },
    'b-item__title-wrap': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    'b-item__title-text': {
        color: 'black',
        fontWeight: 'bold'
    },
    'b-item__title-year': {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '3px'
    },
    'b-item__ganre-wrap': {
        color: 'darkgray'
    }
};

const MovieItem = (props: Props) => {
    const {item, classes} = props;
    return (
        <div className={classes['b-item']}>
            <div className={classes['b-item__img-wrap']}>
                <img className={classes['b-item__img-pic']} src={item.poster_path} alt=""/>
            </div>
            <div className={classes['b-item__title-wrap']}>
                <span className={classes['b-item__title-text']}>{item.title}</span>
                <span className={classes['b-item__title-year']}>{item.release_date}</span>
            </div>
            <div className={classes['b-item__ganre-wrap']}>
                <span>{item.genres.join(' & ')}</span>
            </div>
        </div>
    )
};

const StyledMovieItem = injectSheet(styles)(MovieItem);
export default StyledMovieItem;