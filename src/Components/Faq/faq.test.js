import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Faq from './Faq';

describe(`Faq Component`, () => {

  it('renders Faq by default', () => {
    const wrapper = shallow(<Faq />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
