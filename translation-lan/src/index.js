import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import reducers from './reducers';
import App from './components/warpper/App';

import rootSaga from './sagas/sagas';

import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
