import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoFilmsFound from './NoFilmsFound.jsx'

configure({ adapter: new Adapter() });

describe('<NoFilmsFound  />', () => {
    it('Renders NoFilmsFound component', () => {
        const tree = shallow(
            <NoFilmsFound />
        );
        expect(tree.find('.b-not-found')).toHaveLength(1);
    });
});