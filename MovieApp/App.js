import React,{Component}from 'react';
import { View } from 'react-native';
import AppContainer from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store from './store';


export default class App extends Component {

  render(){
    return (
      <>
        <Provider store={store}>
              <AppContainer />
        </Provider>
      </>
    );
  }
  
};







