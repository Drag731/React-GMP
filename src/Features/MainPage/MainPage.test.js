import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from './MainPage.jsx'

configure({ adapter: new Adapter() });

describe('<MainPage  />', () => {
    it('Renders MainPage component', () => {
        const tree = shallow(
            <MainPage />
        );

        expect(tree.find('.main-page')).toHaveLength(1);
    });
    it('should call loadMovies on init', () => {
        const spy = jest.spyOn(MainPage.prototype, 'loadMovies');
        const tree = shallow(
            <MainPage />
        );

        expect(spy).toHaveBeenCalled();
    });
    it('should call handleReleaseDateSort on click', () => {
        const spy = jest.spyOn(MainPage.prototype, 'handleReleaseDateSort');
        const tree = mount(
            <MainPage />
        );

        tree.find('.b-result__sort-item').first().simulate('click');

        expect(spy).toHaveBeenCalled();
    });
    it('should call handleRatingSort on click', () => {
        const spy = jest.spyOn(MainPage.prototype, 'handleRatingSort');
        const spy2 = jest.spyOn(MainPage.prototype, 'loadMovies');
        const tree = mount(
            <MainPage />
        );

        tree.find('.b-result__sort-item').at(1).simulate('click');

        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
    it('should call handleTitleSearch on click', () => {
        const spy = jest.spyOn(MainPage.prototype, 'handleTitleSearch');
        const spy2 = jest.spyOn(MainPage.prototype, 'loadMovies');
        const tree = mount(
            <MainPage />
        );

        tree.find('button').at(0).simulate('click');

        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
    it('should call handleDirectorSearch on click', () => {
        const spy = jest.spyOn(MainPage.prototype, 'handleDirectorSearch');
        const spy2 = jest.spyOn(MainPage.prototype, 'loadMovies');
        const tree = mount(
            <MainPage />
        );

        tree.find('button').at(1).simulate('click');

        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
    it('should call handleSearch on click', () => {
        const spy = jest.spyOn(MainPage.prototype, 'handleSearch');
        const spy2 = jest.spyOn(MainPage.prototype, 'loadMovies');
        const tree = mount(
            <MainPage />
        );

        tree.find('.b-header__search-input').simulate('change');

        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
});
