import React from 'react';
import { View } from 'react-native';
import AppContainer from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <>
      <Provider store={store}>
            <AppContainer />
      </Provider>
    </>
  );
};




