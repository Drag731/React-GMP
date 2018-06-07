import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PageNotFound from './PageNotFound.jsx';

configure({ adapter: new Adapter() });

describe('<PageNotFound  />', () => {
  it('Snapshot one', () => {
    const tree = renderer
      .create(<PageNotFound />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders NoFilmsFound component', () => {
    const tree = shallow(<PageNotFound />);
    expect(tree.find('.b-not-found')).toHaveLength(1);
  });
});
