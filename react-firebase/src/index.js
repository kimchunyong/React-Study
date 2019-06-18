import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import Firebase, { FirebaseContext } from './components/Firebase';

import GlobalStyle from './resetCss';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <GlobalStyle />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'));

