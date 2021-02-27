import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.scss';

// Redux and Reducers
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import planReducer from './redux/actions/reducers/planReducer';

// Combining reducers into a single reducer
const reducer = combineReducers({
    //cart : cartReducer,
    plan : planReducer,
});
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
