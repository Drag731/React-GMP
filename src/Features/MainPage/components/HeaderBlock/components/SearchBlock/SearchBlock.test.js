import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBlock from './SearchBlock.jsx';

configure({ adapter: new Adapter() });

describe('<SearchBlock  />', () => {
  it('Snapshot one', () => {
    const handleSearch = jest.fn();
    const search = 'search';
    const tree = renderer
      .create(<SearchBlock
                handleSearch={handleSearch}
                search={search}
            />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders SearchBlock component', () => {
    const handleSearch = jest.fn();
    const search = 'search';
    const tree = shallow(<SearchBlock
                handleSearch={handleSearch}
                search={search}
            />);
    expect(tree.find('.b-header__search')).toHaveLength(1);
  });
  it('check SearchBlock component click', () => {
    const handleSearch = jest.fn();
    const search = 'search';
    const tree = shallow(<SearchBlock
                handleSearch={handleSearch}
                search={search}
            />);
    tree.find('input').simulate('change', { target: { value: 'a' } });

    expect(handleSearch).toHaveBeenCalled();
  });
  it('check handleEnterPress component click', () => {
    const handleEnterPress = jest.fn();
    const handleSearch = jest.fn();
    const search = 'search';
    const tree = shallow(<SearchBlock
                handleSearch={handleSearch}
                search={search}
                handleEnterPress={handleEnterPress}
            />);
    tree.find('input').simulate('keyDown');

    expect(handleEnterPress).toHaveBeenCalled();
  });
});
