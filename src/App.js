import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';
import Calculator from './Calculator';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
};

export default App;
