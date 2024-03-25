import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';

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

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Provider store={store}><App /></Provider>);
