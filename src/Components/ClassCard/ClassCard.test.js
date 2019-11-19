import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ClassCard from './ClassCard';

describe(`ClassCard Component`, () => {

  it('renders ClassCard by default', () => {
    const wrapper = shallow(<ClassCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
