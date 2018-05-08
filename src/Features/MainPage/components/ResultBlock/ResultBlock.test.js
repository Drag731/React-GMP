import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResultBlock from './ResultBlock.jsx'

configure({ adapter: new Adapter() });

describe('<ResultBlock  />', () => {
    it('Renders ResultBlock component', () => {
        const handleReleaseDateSort = jest.fn();
        const handleRatingSort = jest.fn();
        const total = 1;
        const tree = shallow(
            <ResultBlock
                handleReleaseDateSort={handleReleaseDateSort}
                handleRatingSort={handleRatingSort}
                total={total}
            />
        );
        expect(tree.find('.main-page__result')).toHaveLength(1);
    });
});
