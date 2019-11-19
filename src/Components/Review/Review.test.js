import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Review from './Review';

describe(`Review Component`, () => {
  const review = {
    content: 'test content',
    by: 'test by',
    from: 'test from'
  }

  it('renders Review by default', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
