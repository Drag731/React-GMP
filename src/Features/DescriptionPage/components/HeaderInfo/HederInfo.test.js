import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderInfo from './HeaderInfo.jsx'

configure({ adapter: new Adapter() });

describe('<HeaderInfo  />', () => {
    const obj = {
        poster_path: 'http',
        title: 'title',
        release_date: 2001,
        runtime: 120,
        overview: 'overview'
    };

    it('Snapshot one', () => {
        const tree = renderer
            .create(<HeaderInfo
                obj={obj}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Snapshot two', () => {
        const tree = renderer
            .create(<HeaderInfo
                obj={obj}
                tagline={'test'}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Renders HeaderInfo component', () => {
        const tree = shallow(
            <HeaderInfo
                obj={obj}
            />
        );

        expect(tree.find('.b-header-info')).toHaveLength(1);
    });
    it('Renders HeaderInfo component with tagline', () => {
        const tree = shallow(
            <HeaderInfo
                obj={obj}
                tagline={'test'}
            />
        );

        expect(tree.find('.b-header-info__about-tagline')).toHaveLength(1);
    });
});
