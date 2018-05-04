import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('<Button />', () => {
    it('renders correctly', () => {
        const handler = jest.fn();
        const tree = renderer
            .create(<Button handler={handler}>Click me</Button>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        console.log('First', tree);
    });
});