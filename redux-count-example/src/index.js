import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Reducers from './reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loggerMiddleWare, applyMiddlewareByMonkeypatching } from './middlewares/loggerMiddleWare';
import { logEnhancer  } from './storeEnhacer/logEnhancer'; // store enhancer 的原理

const store = createStore(
  Reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    logEnhancer,
  )
);

store.printHello(); // store enhancer的扩展

// redux middleware的原理
applyMiddlewareByMonkeypatching(store, [loggerMiddleWare]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
