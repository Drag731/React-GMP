import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DescriptionPage from './DescriptionPage.jsx'

configure({ adapter: new Adapter() });

describe('<DescriptionPage  />', () => {
    it('Renders DescriptionPage component', () => {
        const match = {
            params: {
                id: 1
            }
        };

        const tree = shallow(
            <DescriptionPage match={match}/>
        );
        tree.setState({
            isLoadingMovie: false,
            isLoadingMovies: false
        });
        expect(tree.find('.description-page')).toHaveLength(1);
    });
});