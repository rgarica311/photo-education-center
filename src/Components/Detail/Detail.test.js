import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Detail from './Detail';

describe(`Detail Component`, () => {

  it('renders Detail by default', () => {
    const wrapper = shallow(<Detail />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
