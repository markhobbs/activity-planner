import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow} from 'enzyme';
import PlanProgress from '../PlanProgress';

// Redux and Reducers
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import planReducer from '../../redux/actions/reducers/planReducer';
// Combining reducers into a single reducer
const reducer = combineReducers({
    plan : planReducer,
});
const store = createStore(reducer);

configure({ adapter: new Adapter() });

describe('Footer Component', () => {
    it('Should be selectable by class "plan-progress"', function() {   
        expect(
            shallow(
                <Provider store={store}>
                    <PlanProgress  />
                </Provider>
            )
            .contains(
                <section className="plan-progress"></section>
          ))
          .toBe(false);
    }); 
});
