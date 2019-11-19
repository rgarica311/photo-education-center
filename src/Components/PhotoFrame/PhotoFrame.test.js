import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PhotoFrame from './PhotoFrame';

describe(`PhotoFrame Component`, () => {
  const educator = {
    name: 'test name',
    photo: 'test photo',
    about: 'test about'
  };
  
  it('renders PhotoFrame by default', () => {
    const wrapper = shallow(<PhotoFrame educator={educator} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
