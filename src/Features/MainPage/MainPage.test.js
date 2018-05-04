import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from './MainPage.jsx'

configure({ adapter: new Adapter() });

describe('<MainPage  />', () => {
    it('Renders DescriptionPage component', () => {
        const match = {
            params: {
                id: 1
            }
        };

        const tree = shallow(
            <MainPage match={match}/>
        );
        expect(tree.find('.main-page')).toHaveLength(1);
    });
});