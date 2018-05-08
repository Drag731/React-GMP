import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DescriptionPage from './DescriptionPage.jsx'

configure({ adapter: new Adapter() });

describe('<DescriptionPage  />', () => {
    const match = {
        params: {
            id: 1
        }
    };
    it('Renders DescriptionPage component', () => {
        const tree = shallow(
            <DescriptionPage match={match}/>
        );
        tree.setState({
            isLoadingMovie: false,
            isLoadingMovies: false
        });
        expect(tree.find('.description-page')).toHaveLength(1);
    });
    it('should call loadMovie on init', () => {
        const spy = jest.spyOn(DescriptionPage.prototype, 'loadMovie');
        const tree = shallow(
            <DescriptionPage match={match}/>
        );

        expect(spy).toHaveBeenCalled();
    });
    it('DescriptionPage gets new props', () => {
        const match1 = {
            params: {
                id: 1
            }
        };
        const match2 = {
            params: {
                id: 2
            }
        };
        const tree = mount(
            <DescriptionPage match={match1}/>
        );

        expect(tree.prop('match')).toEqual(match1);
        tree.setProps({match: match2});
        expect(tree.prop('match')).toEqual(match2);
    });
});
