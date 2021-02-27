import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('NavBar Component', () => {
    it('Nav Bar should have a logo', function() {
        expect(shallow(<Header />).find('.logo').length).toBe(1)
    });

    it('Should be selectable by class "Header"', function() {
        expect(shallow(<Header />).is('.header')).toBe(true);
    });
});