import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BackgroundPhoto from './BackgroundPhoto';

describe(`BackgroundPhoto Component`, () => {

  it('renders BackgroundPhoto by default', () => {
    const wrapper = shallow(<BackgroundPhoto />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
