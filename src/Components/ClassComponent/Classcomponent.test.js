import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ClassComponent from './ClassComponent';

describe(`ClassComponent Component`, () => {

  it('renders ClassComponent by default', () => {
    const wrapper = shallow(<ClassComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
