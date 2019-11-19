import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from './NavBar';

describe(`NavBar Component`, () => {
  const topNav = {
    col1: 'test link',
    col2: 'test link'
  };
  it('renders NavBar by default', () => {
    const wrapper = shallow(<NavBar topNav={topNav} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
