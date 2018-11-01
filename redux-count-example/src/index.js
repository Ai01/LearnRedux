import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Reducers from './reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loggerMiddleWare, applyMiddlewareByMonkeypatching } from './middlewares/loggerMiddleWare';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// redux middleware的原理
applyMiddlewareByMonkeypatching(store, [loggerMiddleWare]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
