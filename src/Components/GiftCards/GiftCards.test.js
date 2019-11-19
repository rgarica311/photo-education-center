import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GiftCards from './GiftCards';

describe(`GiftCards Component`, () => {

  it('renders GiftCards by default', () => {
    const wrapper = shallow(<GiftCards />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
