import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {ThemeProvider} from 'react-jss'
import Button from './Button';

const searchButtonStyle = {
    colorPrimary: 'red',
    textTransform: 'uppercase'
};

const searchByButtonStyle = {
    colorPrimary: 'black',
    textTransform: 'none'
};

storiesOf('Button', module)
    .add('button for "search by" section', () => (
        <ThemeProvider theme={searchByButtonStyle}>
        <Button handler={action('clicked')}>My Button</Button>
        </ThemeProvider>
    ))
    .add('search button', () => (
        <ThemeProvider theme={searchButtonStyle}>
            <Button handler={action('clicked')}>My Button</Button>
        </ThemeProvider>
    ))
    .add('with some emoji', () => (
        <ThemeProvider theme={{}}>
        <Button handler={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
        </ThemeProvider>
    ));