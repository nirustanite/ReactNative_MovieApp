import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { getToken, fbLogout } from '../../actions/authactions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

class FBLogin extends Component {
  render() {
    console.log("navigation", this.props.navigation)
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    const token = data.accessToken.toString()
                    this.props.getToken(token)
                    this.props.navigation.navigate('MovieListScreen')
                  }
                )
              }
            }
          }
          />
      </View>
    );
  }
};

export default connect(null,{ getToken, fbLogout })(withNavigation(FBLogin))