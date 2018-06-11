import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderLogo from './HeaderLogo';

storiesOf('HeaderLogo', module)
    .add('with text', () => (
        <HeaderLogo />
    ));
