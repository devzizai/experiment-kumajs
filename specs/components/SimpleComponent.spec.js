import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SimpleComponent from '../../src/components/SimpleComponent';

describe('<SimpleComponent />', () => {
  it('renders', () => {
    const wrapper = shallow(<SimpleComponent />);
    const button = wrapper.find('button');

    expect(button).to.have.length(1);
    expect(button.prop('value')).to.equal(SimpleComponent.defaultProps.caption);
  });
});
