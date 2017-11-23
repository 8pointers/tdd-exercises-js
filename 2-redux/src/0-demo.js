import React from 'react';
import {connect} from 'react-redux';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const increment = () => ({type: 'INCREMENT'});

const Counter = connect(
  ({value}, ownProps) => ({value}),
  (dispatch, ownProps) => ({onIncrement: () => dispatch(increment())})
)(
  ({value, onIncrement}) => <p>
    {value}
      <button onClick={onIncrement}>+</button>
  </p>
);

const reducer = ({value}, action) => {
  return action.type === 'INCREMENT' ? {value: value + 1} : {value};
};

const store = createStore(reducer, {value: 0});

render(
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
    </div>
  </Provider>,
  document.getElementById('root')
);
