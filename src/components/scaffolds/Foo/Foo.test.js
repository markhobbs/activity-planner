import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render } from 'enzyme';
import Foo from './Foo';

configure({ adapter: new Adapter() });

describe('Tests for "foo" example componenet', function() {

  /*it('renders an `.icon-star`', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });*/

  it('should render without props without throwing an error', function() {
    expect(shallow(<Foo />).contains(
      <div className="foo"></div>
    )).toBe(true);
  });

  it('should render with prop "title" without throwing an error', function() {
    expect(shallow(<Foo title="Bar" />).contains(
      <div className="foo">
        <h1>Bar</h1>
      </div>
    )).toBe(true);
  });
  
  it('should render without throwing an error', function() {
    expect(shallow(<Foo title="Bar" value="1" />).contains(
      <div className="foo">
        <h1>Bar</h1>
        <p>1</p>
      </div>
    )).toBe(true);
  });

  it('Should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('Should mount in a full DOM', function() {
    expect(shallow(<Foo />).find('.foo').length).toBe(1);
  });

  it('Should render to static HTML', function() {
    //expect(shallow(<Foo />).text()).to.contain('Bar');
    expect(render(<Foo title="Bar" />).text()).toEqual('Bar');
    expect(render(<Foo title="Bar" />).text()).toBe('Bar');
    expect(render(<Foo title="Bar" />).text().length).toBe(3);
  });

});
