import ReactTestUtils from 'react-dom/test-utils'; // Test Utils
import PageHeader from '../PageHeader'; // Components

describe('Page Header Component', () => {
    
    it('Has an h1 tag', () => {
        const component = ReactTestUtils.renderIntoDocument( <PageHeader/> );
        ReactTestUtils.findRenderedDOMComponentWithTag( component, 'h1' );
    });
  
    it('Has a "heading" class', () => {
        const component = ReactTestUtils.renderIntoDocument( <PageHeader/> );    
        ReactTestUtils.findRenderedDOMComponentWithClass( component, 'heading' );
    })

    it('Can handle a "heading" prop', () => {
        const component = ReactTestUtils.renderIntoDocument( <PageHeader heading="Choose an Activity"/> );    
        const node = ReactTestUtils.findRenderedDOMComponentWithClass( component, 'heading' );
        expect(node.textContent).toBe('Choose an Activity');
    })

});
