import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Policies from './Policies';

describe(`Policies Component`, () => {

  it('renders Policies by default', () => {
    const wrapper = shallow(<Policies />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
