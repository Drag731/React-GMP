import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResultBlock from './ResultBlock.jsx'

configure({ adapter: new Adapter() });

describe('<ResultBlock  />', () => {
    it('Snapshot one', () => {
        const handleReleaseDateSort = jest.fn();
        const handleRatingSort = jest.fn();
        const total = 1;
        const tree = renderer
            .create(<ResultBlock
                handleReleaseDateSort={handleReleaseDateSort}
                handleRatingSort={handleRatingSort}
                total={total}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
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
    it('Renders ResultBlock component with sortBy release_date', () => {
        const handleReleaseDateSort = jest.fn();
        const handleRatingSort = jest.fn();
        const total = 1;
        const sortBy = 'release_date';
        const tree = shallow(
            <ResultBlock
                handleReleaseDateSort={handleReleaseDateSort}
                handleRatingSort={handleRatingSort}
                total={total}
                sortBy={sortBy}
            />
        );
        expect(tree.find('.b-result__sort-item_active')).toHaveLength(1);
    });
    it('Renders ResultBlock component with sortBy vote_average', () => {
        const handleReleaseDateSort = jest.fn();
        const handleRatingSort = jest.fn();
        const total = 1;
        const sortBy = 'vote_average';
        const tree = shallow(
            <ResultBlock
                handleReleaseDateSort={handleReleaseDateSort}
                handleRatingSort={handleRatingSort}
                total={total}
                sortBy={sortBy}
            />
        );
        expect(tree.find('.b-result__sort-item_active')).toHaveLength(1);
    });
});
