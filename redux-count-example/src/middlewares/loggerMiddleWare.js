// middleWare的实现原理
export const loggerMiddleWare = (store) => {
  const next = store.dispatch;

  return (action) => {
    console.log('old state:', store.getState());
    console.log('action type:', action.type);
    next(action);
    console.log('new state:', store.getState());
  }
};

// applyMiddleware
export const applyMiddlewareByMonkeypatching = (store, middlewares) => {
  middlewares = middlewares.slice();
  middlewares.reverse();
  middlewares.forEach(middleware => store.dispatch = middleware(store));
};

export default 'dummy';
