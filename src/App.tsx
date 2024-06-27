import React from 'react';
import { Provider } from 'react-redux';
import { store } from './application/store';
import AppRoutes from './navigation/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
