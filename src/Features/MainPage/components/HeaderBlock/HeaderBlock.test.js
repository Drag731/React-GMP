import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HeaderBlock from './HeaderBlock.jsx';

configure({ adapter: new Adapter() });

describe('<HeaderBlock  />', () => {
  it('Renders HeaderBlock component', () => {
    const handleSearch = jest.fn();
    const handleTitleSearch = jest.fn();
    const handleDirectorSearch = jest.fn();
    const search = 'search';
    const tree = shallow(<HeaderBlock
                handleSearch={handleSearch}
                handleTitleSearch={handleTitleSearch}
                handleDirectorSearch={handleDirectorSearch}
                search={search}
            />);
    expect(tree.find('.main-page__header')).toHaveLength(1);
  });
});
