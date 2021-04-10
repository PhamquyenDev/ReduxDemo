
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import store from './src/strore';


function App() {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>
    </Provider>
  )
}

export default App;
