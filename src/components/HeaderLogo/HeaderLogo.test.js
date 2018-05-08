import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderLogo from './HeaderLogo.jsx'

configure({ adapter: new Adapter() });

describe('<HeaderLogo  />', () => {
    it('Renders HeaderLogo component', () => {
        const tree = shallow(
            <HeaderLogo />
        );
        expect(tree.find('div.b-header__logo-wrap')).toHaveLength(1);
    });
    it('Renders HeaderLogo component', () => {
        const tree = shallow(
            <HeaderLogo description={true}/>
        );
        expect(tree.find('.b-header__logo-link')).toHaveLength(1);
    });
});
