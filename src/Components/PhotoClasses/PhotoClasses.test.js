import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PhotoClasses from './PhotoClasses';

describe(`PhotoClasses Component`, () => {
  const data = {
    col1: 'test data'
  }

  const titles = {
    0: {
      title: 'test title'
    }
  }

  const descs = {
    0: {
      class_desc: 'test desc'
    }
  }
  it('renders PhotoClasses by default', () => {
    const wrapper = shallow(<PhotoClasses data={data} titles={titles} descs={descs}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
