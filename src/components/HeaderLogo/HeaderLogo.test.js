import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import HeaderLogo from './HeaderLogo.jsx';

configure({ adapter: new Adapter() });

describe('<HeaderLogo  />', () => {
  it('Snapshot one', () => {
    const tree = renderer
      .create(<HeaderLogo />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Snapshot two', () => {
    const tree = renderer
      .create(<BrowserRouter><HeaderLogo description={true}/></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders HeaderLogo component', () => {
    const tree = shallow(<HeaderLogo />);
    expect(tree.find('div.b-header__logo-wrap')).toHaveLength(1);
  });
  it('Renders HeaderLogo component', () => {
    const tree = shallow(<HeaderLogo description={true}/>);
    expect(tree.find('.b-header__logo-link')).toHaveLength(1);
  });
  it('should call handleGoSearchPage on click', () => {
    const handleGoSearchPage = jest.fn();
    const tree = shallow(<HeaderLogo
                description={true}
                handleGoSearchPage={handleGoSearchPage}
            />);

    tree.find('.b-header__logo-link').simulate('click');

    expect(handleGoSearchPage).toHaveBeenCalled();
  });
});
