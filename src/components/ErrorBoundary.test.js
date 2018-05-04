import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ErrorBoundary from './ErrorBoundary.jsx'

configure({ adapter: new Adapter() });

describe('<ErrorBoundary  />', () => {
    it('Renders ErrorBoundary component', () => {
        const tree = shallow(
            <ErrorBoundary />
        );
        tree.setState({
            hasError: true
        });
        expect(tree.find('h1')).toHaveLength(1);
    });
});