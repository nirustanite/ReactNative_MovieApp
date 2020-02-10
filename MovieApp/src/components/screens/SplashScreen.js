import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/authactions';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';
import styles from '../../styles/SplashScreen.styles';

// intial screen to be displayed in the app
class SplashScreen extends Component {

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('accesstoken');
      if (value !== null) {
        this.props.getToken(value)
      }
    } catch (error) {
      console.error(error)
    }
  };

  componentDidMount() {
    this.retrieveData()
    setTimeout(() => {
      this.props.navigation.navigate('HomeScreen')
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Movie Viewer</Text>
      </View>
    )
  }
}

export default connect(null, { getToken })(SplashScreen)