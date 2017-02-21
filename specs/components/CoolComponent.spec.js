import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CoolComponent from '../../src/components/CoolComponent';

describe('<CoolComponent />', () => {
  it('renders with no props given', () => {
    const wrapper = shallow(<CoolComponent />);
    const button = wrapper.find('button');

    expect(button).to.have.length(1);
    expect(button.prop('value')).to.equal(CoolComponent.defaultProps.caption);
    expect(button.prop('disabled')).to.equal(CoolComponent.defaultProps.disabled);
  });

  it('renders with \'disabled\' prop given', () => {
    const wrapper = shallow(<CoolComponent disabled />);
    const button = wrapper.find('button');

    expect(button).to.have.length(1);
    expect(button.prop('value')).to.equal(CoolComponent.defaultProps.caption);
    expect(button.prop('disabled')).to.equal(true);
  });

  it('renders with both \'disabled\' and \'caption\' props given', () => {
    const caption = 'Submit';
    const wrapper = shallow(<CoolComponent caption={caption} disabled />);
    const button = wrapper.find('button');

    expect(button).to.have.length(1);
    expect(button.prop('value')).to.equal(caption);
    expect(button.prop('disabled')).to.equal(true);
  });
});
