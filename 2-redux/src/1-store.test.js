import {createStore} from 'redux';

const __ = 'Replace this with concrete value so that the test is passing';
const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};
let store;
beforeEach(() => store = createStore(counterReducer));
it('Should be able to specify the initial state', () => {
  store = createStore(counterReducer, 123);

  expect(store.getState()).toBe(__);
});
it('Should have 0 initial state', () => {
  expect(store.getState()).toBe(__);
});
it('Should update state to 1 after INCREMENT', () => {
  store.dispatch({type: 'INCREMENT'});

  expect(store.getState()).toBe(__);
});
it('Should invoke a listener when action is dispatched', () => {
  let wasInvoked = false;
  store.subscribe(() => wasInvoked = true);
  
  store.dispatch({type: 'INCREMENT'});

  expect(wasInvoked).toBe(__);
});
it('Should be able to remove the listener', () => {
  let wasInvoked = false;
  const unsubscribe = store.subscribe(() => wasInvoked = true);
  unsubscribe();
  
  store.dispatch({type: 'INCREMENT'});

  expect(wasInvoked).toBe(__);
});
