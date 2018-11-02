export const logEnhancer = createStore => (reducer, preloadState, enhancer) => {
  const store = createStore(reducer, preloadState, enhancer);

  const originalDispatch = store.dispatch; // 对store原有的接口进行重写
  store.dispatch = (action) => {
    console.log('store enhancer dispatch action', action);
    originalDispatch(action);
  }

  return {
    ...store,
    printHello: () => { console.log('hello') } // 对store进行扩展
  };
};
