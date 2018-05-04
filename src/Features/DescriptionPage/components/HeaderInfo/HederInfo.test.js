import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderInfo from './HeaderInfo.jsx'

configure({ adapter: new Adapter() });

describe('<HeaderInfo  />', () => {
    it('Renders HeaderInfo component', () => {
        const obj = {
            poster_path: 'http',
            title: 'title',
            tagline: 'tagline',
            release_date: 2001,
            runtime: 120,
            overview: 'overview'
        };

        const tree = shallow(
            <HeaderInfo
                obj={obj}
            />
        );
        expect(tree.find('.b-header-info')).toHaveLength(1);
    });
});