import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChoiceBlock from './ChoiceBlock.jsx'

configure({ adapter: new Adapter() });

describe('<ChoiceBlock  />', () => {
    it('Snapshot one', () => {
        const handleTitleSearch = jest.fn();
        const handleDirectorSearch = jest.fn();
        const tree = renderer
            .create(<ChoiceBlock
                handleTitleSearch={handleTitleSearch}
                handleDirectorSearch={handleDirectorSearch}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Renders ChoiceBlock component', () => {
        const handleTitleSearch = jest.fn();
        const handleDirectorSearch = jest.fn();
        const tree = shallow(
            <ChoiceBlock
                handleTitleSearch={handleTitleSearch}
                handleDirectorSearch={handleDirectorSearch}
            />
        );
        expect(tree.find('.b-header__choice')).toHaveLength(1);
    });
    it('Renders ChoiceBlock component with searchBy genres', () => {
        const handleTitleSearch = jest.fn();
        const handleDirectorSearch = jest.fn();
        const searchBy = 'genres';
        const tree = shallow(
            <ChoiceBlock
                handleTitleSearch={handleTitleSearch}
                handleDirectorSearch={handleDirectorSearch}
                searchBy={searchBy}
            />
        );
        expect(tree.find('.b-header__button_active')).toHaveLength(1);
    });
});
