import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer.jsx'

configure({ adapter: new Adapter() });

describe('<Footer  />', () => {
    it('Renders footer component', () => {
        const tree = shallow(
            <Footer />
        );
        expect(tree.find('div.footer')).toHaveLength(1);
    });
});