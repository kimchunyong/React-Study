import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers , createStore } from 'redux';
import { Provider } from 'react-redux';

import productsRducer from './reducers/produts-reducer'; 
import userReducer from './reducers/user-reducer'

const allReducers = combineReducers({
    products: productsRducer,
    user:userReducer
})

const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}],
        user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);

const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'John'
    }
}

store.dispatch(updateUserAction)

const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
}

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

