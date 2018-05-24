import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { MainPageTest } from './MainPage'

configure({ adapter: new Adapter() });

describe('<MainPageTest  />', () => {
    const mockProps = {
        movies: [],
        total: 0,
        isLoadingMovies: true,
        receiveMoviesDB: jest.fn(),
        goToDescription: jest.fn()
    };
    const location = {
        search: "a"
    };
    it('Renders MainPageTest component', () => {
        const tree = shallow(
            < MainPageTest {...mockProps} location={location} />
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('Renders DescriptionPageTest component snapshot2', () => {
        const tree = shallow(
            < MainPageTest {...mockProps} isLoadingMovies={false} location={location}/>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('Renders DescriptionPageTest component snapshot3', () => {
        const tree = shallow(
            < MainPageTest {...mockProps} isLoadingMovies={false} total={3000} location={location}/>
        );
        expect(toJson(tree)).toMatchSnapshot();
    });
    it('should call receiveMovieDB on init', () => {
        const receiveMoviesDB = jest.fn();
        const tree = shallow(
            <MainPageTest
                {...mockProps}
                receiveMoviesDB={receiveMoviesDB}
                location={location}
            />
        );

        expect(receiveMoviesDB).toHaveBeenCalled();
    });
});
