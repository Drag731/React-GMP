import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { DescriptionPageTest } from './DescriptionPage'

configure({ adapter: new Adapter() });

describe('<DescriptionPageTest  />', () => {
        const mockProps = {
            genres: [],
            isLoadingMovie: true,
            movie: {},
            movies: [],
            receiveMovieDB: () => {},
            receiveMoviesDB: () => {}
        };
        const match = {
            params: {
                id: 1
            }
        };

        it('Renders DescriptionPageTest component', () => {
            const tree = shallow(
                < DescriptionPageTest {...mockProps} match={match} />
            );
            expect(toJson(tree)).toMatchSnapshot();
        });
        it('Renders DescriptionPageTest component snapshot2', () => {
            const tree = shallow(
                < DescriptionPageTest {...mockProps} match={match} isLoadingMovie={false} />
            );
            expect(toJson(tree)).toMatchSnapshot();
        });
        it('should call receiveMovieDB on init', () => {
            const receiveMovieDB = jest.fn();
            const receiveMoviesDB = jest.fn();
            const tree = shallow(
                <DescriptionPageTest
                    {...mockProps}
                    match={match}
                    receiveMovieDB={receiveMovieDB}
                    receiveMoviesDB={receiveMoviesDB}
                />
            );

            expect(receiveMovieDB).toHaveBeenCalled();
            expect(receiveMoviesDB).toHaveBeenCalled();
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
            const changeIsLoading = jest.fn();
            const receiveMovieDB = jest.fn();
            const receiveMoviesDB = jest.fn();
            const tree = mount(
                <DescriptionPageTest
                    {...mockProps}
                    match={match1}
                    receiveMovieDB={receiveMovieDB}
                    receiveMoviesDB={receiveMoviesDB}
                    changeIsLoading={changeIsLoading}
                />
            );

            expect(tree.prop('match')).toEqual(match1);
            tree.setProps({match: match2});
            expect(tree.prop('match')).toEqual(match2);
            expect(changeIsLoading).toHaveBeenCalled();
            expect(receiveMovieDB).toHaveBeenCalled();
            expect(receiveMoviesDB).toHaveBeenCalled();
        });
});
