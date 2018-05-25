import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoFilmsFound from './NoFilmsFound'

configure({ adapter: new Adapter() });

describe('<NoFilmsFound  />', () => {
    it('Snapshot one', () => {
        const tree = renderer
            .create(<NoFilmsFound />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Renders NoFilmsFound component', () => {
        const tree = shallow(
            <NoFilmsFound />
        );
        expect(tree.find('.b-not-found')).toHaveLength(1);
    });
});
