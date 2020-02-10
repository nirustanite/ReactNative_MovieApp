import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInemail } from '../../actions/authactions';
import styles from '../../styles/SignInScreen.styles';
import { Button, TextInput, View, Text, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Header } from 'react-native-elements';

//The SignInScreen implements the Sign in by email functionality
class SignInScreen extends Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    // This is the Last method in the activity lifecycle
    // Removing Event Listener for the BackPress 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack()
    return true;
  }

  storeData = async (token) => {
    try {
      await AsyncStorage.setItem('accesstoken', token);
    } catch (error) {
      console.error(error)
    }
  };

  state = {
    username: '',
    password: ''
  }

  // calls the function sign in with email to get the token
  onPress = () => {
    this.props.signInemail(this.state)
    this.setState({
      username: '',
      password: ''
    })
    if (this.props.token !== null) {
      this.storeData(this.props.token)
      setTimeout(() => {
        this.props.navigation.navigate('MovieListScreen')
      }, 2000);
    }
  }

  render() {
    return (
      <>
        <Header
          centerComponent={<Text style={styles.title}>sign in with email</Text>}
          containerStyle={styles.containerstyle}
        />
        <View style={styles.outercontainer} />
        <View style={styles.container}>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          {this.props.errMessage && <Text>{this.props.errMessage.message}</Text>}
          <Button
            title={'Sign In'}
            style={styles.input}
            onPress={this.onPress}
          />
        </View>
      </>
    )
  }
}


// mapStateToProps is used for selecting part of data from the store. 
// fetching error message and the token from the store
const mapStateToProps = (state) => {
  return {
    errMessage: state.errMessage,
    token: state.login
  }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps, { signInemail })(SignInScreen)
