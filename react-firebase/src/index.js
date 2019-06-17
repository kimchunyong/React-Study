import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Test from './components/test';

import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
        <Test />
    </FirebaseContext.Provider>,
    document.getElementById('root'));

