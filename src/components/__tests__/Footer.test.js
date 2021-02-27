import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';
import Footer from '../Footer';

configure({ adapter: new Adapter() });

describe('Footer Component', () => {
    it('Should be selectable by class "footer"', function() {
        expect(shallow(<Footer />).is('.footer')).toBe(true);
    });

    it('Should be centered"', function() {
        expect(shallow(<Footer />).is('.center')).toBe(true);
    });
});
