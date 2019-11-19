import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePageCard from './HomePageCard';

describe(`HomePageCard Component`, () => {
  const feature = {
    className: 'test class name',
    path: '/testpath'
  }
  it('renders HomePageCard by default', () => {
    const wrapper = shallow(<HomePageCard feature={feature}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
